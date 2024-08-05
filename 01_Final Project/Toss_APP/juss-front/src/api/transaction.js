import { axiosClient } from "../utils/axios";

export const getTransactions = async (id) => {
    const data = axiosClient({
        url: '/transaction/' + id,
        method: 'get',
    }).then(res => res?.data?.transactions)
    return data
}

export const getUsed = async () => {
    const data = axiosClient({
        url: '/used',
        method: 'get',
    }).then(res => res?.data?.amount) //amount
    return data
}

export const getTopay = async () => {
    const data = axiosClient({
        url: '/topay',
        method: 'get',
    }).then(res => res?.data?.topay)
    return data
}