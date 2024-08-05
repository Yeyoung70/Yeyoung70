import { axiosClient } from "../utils/axios";

export const startJuss = async () => {
    const data = axiosClient({
        url: '/start',
        method: 'post', 
    }).then((res) => res?.data)
    return data
}