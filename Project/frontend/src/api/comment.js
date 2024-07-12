import axios from "axios";

export async function list_comments(article_pk) {
  try {
    const access = localStorage.getItem("access");
    const response = await axios.get(`/api/comments/${article_pk}/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("좋아요한 목록을 가져오는 중 오류 발생:", error);
    throw error;
  }
}
