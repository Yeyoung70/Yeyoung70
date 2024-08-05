import { axiosClient } from "../utils/axios";

export const getAccounts = async ({isShow}) => {
    const data = axiosClient({
        url: `/accounts${ isShow ? "?isShow=" + isShow : "" }`,
        method: 'get',
      }).then( res => res?.data?.accounts ) 
    return data
}
// required arguments 필수 값 -> 파라미더
// 선택 값 -> object 
export const getAccount = async ( id ) => {
    const data = axiosClient({
        url: '/accounts/' + id,
        method: 'get',
      }).then(res => res?.data)
    return data
}

export const getRecents = async (accountType) => {
    const data = axiosClient({
        url: '/recent?accountType=' + accountType, 
        method: 'get',
    }).then(res => res?.data?.accounts)
    return data
}
export const toggleFavorite = async (id) => {
    const data = axiosClient({
      url: `/accounts/${id}/favorite`,
      method: 'put',
    }).then(res => res?.data)
    return data
}