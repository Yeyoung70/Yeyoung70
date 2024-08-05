import React, { useState } from 'react'

import Home from './Home'
import { Init, Ing, Complete, Confirm } from './Transfer'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './TransferPage.css'
import { Transfer } from '../api/transfer'
// import axios from 'axios';

const TransferPage = () => {
  const { fromID, toID } = useParams()

  
  const [current, setCurrent] = useState(0)
  const [amount, setAmount] = useState(0)
  const navigate = useNavigate()

  const toConfirm = (v) => {
    setAmount(v)
    setCurrent(1)
  }
  const toIng = () => {
    setCurrent(2)
    Transfer({ fromID, toID, amount }).then(res => toComplete())
    // shorthand property
    // 키 이름 = 값 변수이름 => 생략 가능

    // const token = localStorage.getItem('jwt-token')
    // axios({
    //   url: 'http://127.0.0.1:8082/api/v1/transfer',
    //   method: 'post',
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   },
    //   data: {
    //     sender_id: fromID,
    //     receriver_id: toID,
    //     amount, // aount 키와 값이 변수명이 같을 경우는 생략 가능 shorthand property
    //     memo: '',
    //   }
    // }).then(res => toComplete())

    // 서버로 송금 보내는 API 호출 -> 응답을 받을 수 있다.
    // API를 호출한 뒤
    // .then( (res) => {} ) <-- 정상적으로 응답을 받았을 경우 실행
    // .catch( (err) => {} ) <-- 응답 받았을 때 에러코드인 경우 실행 

    //서버에 요청을 보냈다 치고, 몇 초 뒤에 코드를 실행 (API 대신 쓰는 것) 
    // setTimeout(() => {
    //   // setCurrent(3)
    //   toComplete()
    // }, 3000);
  }
  const toComplete = () => {
    setCurrent(3)
  }
  // const toHome = () => {
  //   setCurrent(4)
  // }

  return (
    <div className='TransferPage'>

        {current === 0 ? <Init toNext={(v) => {toConfirm(v)} }/> : '' }
        {current === 1 ? <Confirm amount={amount} toNext={toIng}/> : '' }
        {current === 2 ? <Ing amount={amount} toNext={() => toComplete()} /> : '' }
        {current === 3 ? <Complete amount={amount} toNext={() => navigate('/')}/> : '' }
        {/* {current === 4 ? <Home /> : '' } */}
    </div>
  )
}

export default TransferPage