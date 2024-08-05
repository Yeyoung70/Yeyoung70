import React from 'react'

import BaseButton from '../components/Button/BaseButton';
import { useNavigate } from 'react-router-dom';

// import axios from 'axios';
import { startJuss } from '../api/start';

import './Start.css'

const Start = () => {
    const navigate = useNavigate()

    // const startJuss = () => {
    //     // 서버에 유저 생성 요청
    //     axios({
    //         url: 'http://127.0.0.1:8082/api/v1/start',
    //         method: 'post', 
    //     })

    //     // 성공 -> token정보 저장하고,
    //     .then((res) => {
    //         console.log(res)
    //         // res.data.access_token 
    //         localStorage.setItem("jwt-token", res.data.access_token)
    //         navigate('/')
    //     })
    //     // 실패하면 -> 홈화면으로 x 
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

  return (
    <div className='Start'>
        <BaseButton 
        text={"시작하기"}
        handleClick={ () => {startJuss().then(data => {
            localStorage.setItem("jwt-token", data.access_token)
             navigate('/')
        })}}/>
    </div>
  )
}

export default Start