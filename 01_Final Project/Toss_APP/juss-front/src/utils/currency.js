// export는 여러개 반환
const formatter = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  });

// 숫자를 받고 문자로 바꿔주는 v 인자
export const won = (v) => {
  return formatter.format(v).slice(1) + "원";
}
