import api from "./utils/axios";

// 프로필 이미지 업데이트 API
export const user_profile = async (user_pk, profile_images, access) => {
  try {
    const formData = new FormData();
    formData.append("profile_images_url", profile_images);

    const response = await api.patch(`/api/profiles/${user_pk}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${access}`, // 액세스 토큰을 헤더에 추가
      },
    });
    return response.data;
  } catch (error) {
    console.error("Profile Image Update Error:", error.response?.data);
    throw error;
  }
};
