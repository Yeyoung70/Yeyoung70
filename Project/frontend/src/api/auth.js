import axios from "axios";

// 기본 API 설정
const api = axios.create({
  baseURL: "", // 프록시 설정을 사용하여 baseURL을 빈 문자열로 설정
});

// 응답 인터셉터 추가하여 accessToken 저장
api.interceptors.response.use(
  (response) => {
    if (response.headers["authorization"]) {
      const accessToken = response.headers["authorization"].split(" ")[1]; // 'Bearer ' 제거 후 토큰 추출
      localStorage.setItem("accessToken", accessToken); // 로컬 스토리지에 accessToken 저장
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // accessToken이 만료되었을 때
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getCookie("refresh_token"); // 쿠키에서 refresh_token을 가져옵니다
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        const response = await axios.post("/api/accounts/refresh/", {
          refresh: refreshToken,
        });

        const { access } = response.data;
        localStorage.setItem("accessToken", access);
        originalRequest.headers["Authorization"] = `Bearer ${access}`;

        return api(originalRequest); // 원래 요청을 재시도합니다
      } catch (refreshError) {
        console.error("Failed to refresh access token", refreshError);
        // 갱신 실패 시 로그아웃 또는 다른 필요한 처리를 수행합니다
        logout(); // 로그아웃 함수 호출
      }
    }

    return Promise.reject(error);
  }
);

// API 요청에 accessToken 포함시키기 위한 인터셉터 추가
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 쿠키에서 특정 쿠키 값을 가져오는 함수
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// 회원가입 API
export const signUp = async (
  username,
  password,
  phone_number,
  nickname,
  email,
  profile_image = null
) => {
  const requestData = {
    username,
    password,
    phone_number,
    nickname,
    email,
    profile_image,
  };
  console.log("Request Data:", requestData); // 요청 데이터 출력

  try {
    const response = await api.post("/api/accounts/signup/", requestData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Response Data:", error.response.data); // 서버 응답 데이터 출력
    }
    throw error;
  }
};

// 로그인 API
export const login = async (email, password) => {
  const requestData = {
    email,
    password,
  };
  console.log("Login Request Data:", requestData); // 요청 데이터 출력

  try {
    const response = await api.post("/api/accounts/login/", requestData);

    // accessToken이 포함된 응답 헤더 가져오기
    const accessToken = response.headers["authorization"];

    // 응답 데이터와 accessToken 반환
    return {
      data: response.data,
      accessToken: accessToken,
    };
  } catch (error) {
    if (error.response) {
      console.error("Login Response Data:", error.response.data); // 서버 응답 데이터 출력
    }
    throw error;
  }
};

// 아이디 찾기 API
export const findId = async (username, phone_number) => {
  const requestData = {
    username,
    phone_number,
  };
  console.log("FindId Request Data:", requestData); // 요청 데이터 출력

  try {
    const response = await api.post("/api/accounts/auth/user/", requestData);
    return response.data; // access token이 포함된 응답 데이터 반환
  } catch (error) {
    if (error.response) {
      console.error("FindId Response Data:", error.response.data); // 서버 응답 데이터 출력
    }
    throw error;
  }
};

// 비밀번호 재설정 인증 API
export const findPwAuth = async (username, email, phone_number) => {
  const requestData = {
    username,
    email,
    phone_number,
  };
  console.log("FindPwAuth Request Data:", requestData); // 요청 데이터 출력

  try {
    const response = await api.post(
      "/api/accounts/auth/password/",
      requestData
    );
    const { reset_token } = response.data; // 응답에서 인증 토큰 추출
    document.cookie = `resetToken=${reset_token}; path=/`; // 인증 토큰을 쿠키에 저장
    return response.data; // 응답 데이터 반환
  } catch (error) {
    if (error.response) {
      console.error("PasswordAuth Response Data:", error.response.data); // 서버 응답 데이터 출력
      if (error.response.status === 401) {
        console.error("Authentication failed: Unauthorized");
      }
    }
    throw error;
  }
};

// 비밀번호 재설정 완료 API
export const resetPassword = async (newPassword) => {
  const requestData = {
    new_password: newPassword,
  };
  console.log("Reset Password Request Data:", requestData); // 요청 데이터 출력

  const resetToken = getCookie("resetToken"); // 쿠키에서 resetToken을 가져옵니다
  if (!resetToken) {
    throw new Error("No reset token available");
  }

  try {
    const response = await axios.post(
      "/api/accounts/change/password/",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // 응답 데이터 반환
  } catch (error) {
    if (error.response) {
      console.error("Reset Password Response Data:", error.response.data); // 서버 응답 데이터 출력
    }
    throw error;
  }
};

// 회원 탈퇴 API
export const deleteAccount = async (userId, username, password) => {
  try {
    const url = `http://localhost:3000/api/accounts/delete/${userId}/`;
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    };
    const body = JSON.stringify({ username, password });

    console.log("Making DELETE request to:", url);
    console.log("Request headers:", headers);
    console.log("Request body:", body);

    const response = await fetch(url, {
      method: "DELETE",
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Network response was not ok:", response.status, errorText);
      throw new Error("Network response was not ok");
    }

    // 로컬 스토리지 비우기
    localStorage.removeItem("accessToken");
    document.cookie = "refresh_token=; Max-Age=0; path=/;";

    return response.json();
  } catch (error) {
    console.error("Failed to delete account:", error);
    throw error;
  }
};

// 로그아웃 API
export const logout = () => {
  // 서버에 로그아웃 요청을 보내는 로직을 추가할 수 있습니다
  // 예: await api.post("/api/accounts/logout/");

  // 로컬 스토리지 비우기
  localStorage.removeItem("accessToken");
  document.cookie = "refresh_token=; Max-Age=0; path=/;"; // 쿠키에서 refresh_token 제거
};

export default api;
