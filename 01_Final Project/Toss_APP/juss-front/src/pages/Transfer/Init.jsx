import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { won } from '../../utils/currency';

import { FaArrowLeft } from "react-icons/fa"

import './Init.css'
import Keypad from '../../components/Keypad/Keypad'
import SubButton from '../../components/Button/SubButton';

// import axios from 'axios';
import { getAccount } from '../../api/account';

const Init = ({toNext}) => {

  const navigate = useNavigate()
  const { fromID, toID } = useParams()
  

  const [initAmount, setInitAmount ] = useState(0)

  const [fromAccount, setFromAccount ] = useState({
    // id: 6,
    // account_name: 'NH올원통장',
    // balance: 2454345,
  });
  const [toAccount, setToAccount ] = useState({
    // id: 1,
    // account_name: '하나골드클럽통장',
    // account_number: '800-41-45416',
    // bank_name: '하나은행',
  });

  // const changeAmount = (v) => {
  //   setAmount(v)
  // }

  useEffect(() => {
    getAccount(fromID).then(data=> setFromAccount(data))
    getAccount(toID).then(data => setToAccount(data))
  }, [])
  

  const changeAmount= (v) => {
    // v -> 키패드 누른 것
    
    let tempAmount = initAmount + ""

    // 2가지
    // 1.숫자 입력했을 때 
    // 2. 지우기 눌렀을 때
    // console.log(v.type?.name)

    // if(v.type) {
      if(v.type?.name === 'FaArrowLeft') {
        console.log('지우기')
        tempAmount = tempAmount.slice(0, tempAmount.length -1)
        // tempAmount[:-1]
      } else {
        tempAmount += v
      }
    // }


    tempAmount *= 1

    // 현재 보내는 계좌의 잔액보다 크면, 잔액으로 변경  
    if(fromAccount < initAmount ? '' : fromAccount )

    // 변경된 값을
    setInitAmount(tempAmount)
  
    // // v를 통해 initAmount 값을 변경시키고,
    // // 숫자를 문자로 +""
    // // 문자를 숫자로 *1
    // let temp = "234"
    // temp *= 1
    // console.log(temp, typeof temp)

    // // 참고) 숫자로 이루어진 문자열도 curreny 적용 가능
    // console.log( won("23343") )

    // // 문자열 관련 메서드
    // console.log("a" + "0")
    // // 문자열 슬라이싱
    // console.log("asdfefg".slice(0, 5))
    // // 문자열 길이
    // console.log("abcdefg".length)

    // // 뒤로가기 체크는 type -> name 확인



    // 변경된 값을

  }

  return (
    <div className='Init'>

        <div>
        <div className="app-bar">
        <div onClick={() => {navigate(-1)}}>
            <FaArrowLeft size={24}/>
            </div>
        </div>
        <div className="account-info">
          <div className="from-account">
              <div><strong>내 {fromAccount.account_name}</strong> 에서</div>
                <span>잔액 {fromAccount.balance}</span>
          </div>
          <div className="to-account">
              <div><strong>{toAccount.account_name}</strong> 님에게</div>
              <span>{toAccount.bank_name} {toAccount.account_number}</span>
          </div>
        </div>

        <div className="amount">
        <input type='text'
          value= {initAmount === 0 ? '' : won(initAmount)}
          placeholder='얼마나 보낼까요?' disabled />
        </div>
        <div className="balance-btn">
          <SubButton
          text={<span>잔액 . {won(fromAccount.balance)} 입력</span>}
          handleClick={() => setInitAmount(fromAccount.balance)}/>
        </div>
        </div>

        <div>
        {initAmount > 0 ? <div className='next-btn'
        onClick={() => toNext(initAmount)}>다음
        </div> : ''}
        <Keypad
          changeValue={changeAmount}
        />
        </div>

    </div>
  )
}

export default Init