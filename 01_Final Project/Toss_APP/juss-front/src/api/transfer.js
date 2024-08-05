import { axiosClient } from "../utils/axios";

export const Transfer = async ({ fromID, toID, amount }) => {
    const data = axiosClient({
        url: '/transfer',
        method: 'post',
        data: {
          sender_id: fromID,
          receriver_id: toID,
          amount,
          memo: '',
        }
      })
    return data
}