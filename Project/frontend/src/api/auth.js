import axios from "axios";

// 기본 API 설정
const api = axios.create({
  baseURL: "", // 프록시 설정을 사용하여 baseURL을 빈 문자열로 설정
});

// 응답 인터셉터 추가하여 access 저장
api.interceptors.response.use(
  (response) => {
    if (response.headers["authorization"]) {
      const access = response.headers["authorization"].split(" ")[1]; // 'Bearer ' 제거 후 토큰 추출
      localStorage.setItem("access", access); // 로컬 스토리지에 access 저장
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // accessToken이 만료되었을 때
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = getCookie("refresh"); // 쿠키에서 refresh_token을 가져옵니다
        if (!refresh) {
          throw new Error("No refresh token available");
        }

        const response = await axios.post("/api/accounts/refresh/", {
          refresh: refresh,
        });

        const { access } = response.data;
        localStorage.setItem("access", access);
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
    const token = localStorage.getItem("access");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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

// 로그인 new API
export const login = async (email, password) => {
  const requestData = {
    email,
    password,
  };
  console.log("Login Request Data:", requestData);

  try {
    const response = await api.post("/api/accounts/login/", requestData);

    const { access, user_id } = response.data;

    // access_token과 user_id를 로컬 스토리지에 저장
    localStorage.setItem("access", access);
    localStorage.setItem("userId", user_id);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Login Response Data:", error.response.data);
    }
    throw error;
  }
};

// // 로그인 API
// export const login = async (email, password) => {
//   const requestData = {
//     email,
//     password,
//   };
//   console.log("Login Request Data:", requestData); // 요청 데이터 출력

//   try {
//     const response = await api.post("/api/accounts/login/", requestData);

//     // 응답 데이터와 accessToken 반환
//     return {
//       data: response.data,
//       // access: access,
//     };
//   } catch (error) {
//     if (error.response) {
//       console.error("Login Response Data:", error.response.data); // 서버 응답 데이터 출력
//     }
//     throw error;
//   }
// };

// 로그아웃 API
export const logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("userId");

  // 로컬 스토리지 비우기
  localStorage.removeItem("access");
  document.cookie = "refresh=; Max-Age=0; path=/;"; // 쿠키에서 refresh_token 제거
};

// 아이디 찾기 API
export const findId = async (username, phone_number) => {
  const requestData = {
    username,
    phone_number,
  };
  console.log("FindId Request Data:", requestData); // 요청 데이터 출력

  try {
    const response = await api.post("/api/accounts/find/user/", requestData);
    return response.data; // access token이 포함된 응답 데이터 반환
  } catch (error) {
    if (error.response) {
      console.error("FindId Response Data:", error.response.data); // 서버 응답 데이터 출력
    }
    throw error;
  }
};

// 비밀번호 재설정 인증 함수
export const findPwAuth = async (username, email, phone_number) => {
  const requestData = {
    username,
    email,
    phone_number,
  };
  console.log("FindPwAuth Request Data:", requestData);

  try {
    const response = await axios.post(
      "/api/accounts/find/password/",
      requestData,
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("PasswordAuth Response Data:", error.response.data);
      if (error.response.status === 401) {
        console.error("Authentication failed: Unauthorized");
      }
    }
    throw error;
  }
};

// 비밀번호 재설정 완료 API (`resetPassword`)
export const resetPassword = async (newPassword) => {
  const requestData = {
    new_password: newPassword,
  };

  try {
    const response = await axios.post(
      "/api/accounts/change/password/",
      requestData,
      {
        withCredentials: true, // 쿠키를 함께 보냄
      }
    );

    // 쿠키에서 reset 삭제
    document.cookie = `reset=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;

    return response.data; // 응답 데이터 반환
  } catch (error) {
    if (error.response) {
      console.error("Reset Password Response Data:", error.response.data); // 서버 응답 데이터 출력
    }
    throw error;
  }
};

// 쿠키 가져오기 함수
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

// 회원 탈퇴 API
export const deleteAccount = async (userId, username, password) => {
  const requestData = {
    username,
    password,
  };
  console.log("Delete Request Data:", requestData);

  const access = localStorage.getItem("access");

  if (!access) {
    throw new Error("No access token available");
  }

  const headers = {
    Authorization: `Bearer ${access}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.delete(
      `http://localhost:3000/api/accounts/${userId}/`,
      {
        headers: headers,
        data: requestData,
      }
    );

    // 응답 데이터 반환
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Delete Response Data:", error.response.data);
    }
    throw error;
  }
};

export default api;
