import axios from 'axios';

const axiosClient = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
})

// interceptor -> 요청이 날아가기 전, 응답이 들어왔을 때 (정상인지, 에러인지) 실행하는 코드
// = middleware

const reqInterceptor = (config) => {
    // 실행할 코드 혹은 config에 값을 주입하는 코드
    // { **data }
    // [ *data ]
    const token = localStorage.getItem('jwt-token')
    return {...config, headers: {Authorization: `Bearer ${token}`} };
}

const resInterceptor = (res) => {
    
    // 정상 응답에 대한 처리 코드

    return res
}

const errInterceptor = (error) => {
    // 에러 발생시 처리할 코드 
    if(error.response.status === 500 ) {
        localStorage.removeItem('jwt-token')
        window.location.href = '/start'
        return ;
    }
    return Promise.reject(error); // 기존 에러는 그대로 전달 
}

axiosClient.interceptors.request.use(reqInterceptor, errInterceptor)
axiosClient.interceptors.response.use(resInterceptor, errInterceptor)

export { axiosClient }