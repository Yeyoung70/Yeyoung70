import { axiosClient } from "../utils/axios";

export const getCards = async (ym) => {
    const data = axiosClient({
        url: '/card?ym='+ym,
        method: 'get',
      }).then(res => res?.data?.cards)
      return data
}