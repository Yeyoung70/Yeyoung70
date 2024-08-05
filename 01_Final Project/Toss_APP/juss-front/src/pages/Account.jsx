import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { FaArrowLeft, FaCopy } from 'react-icons/fa';

import { won } from "../utils/currency"

import BaseButton from '../components/Button/BaseButton'
import SecondCard from '../components/Card/SecondCard'
import Deposit from '../Modals/Deposit';

import './Account.css'

import axios from 'axios';
import { getAccount } from '../api/account';
import { getTransactions } from '../api/transaction';

const Account = () => {
  const { accountID } = useParams();
  const navigate = useNavigate();

  const [account, setAccount] = useState({
    // id: accountId,
    // bank_name: "한국씨티은행",
    // account_name: "씨티 글로벌통장",
    // account_number: "554-64-79609",
    // account_type: 0,
    // balance: 3689416,
  });

  useEffect(() => {
    const token = localStorage.getItem('jwt-token')
    getAccount(accountID).then(data => setAccount(data))

    getTransactions(accountID).then(data => setTransactions(data))
    // axios({
    //   url: 'http://127.0.0.1:8082/api/v1/transaction/' + accountID,
    //   method: 'get',
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // }).then(res => setTransactions(res.data.transactions))
  }, [])

  const [showModal, setShowModal] = useState(false)

  let nowBalance = account.balance;
  let nextBalance = account.balance;

  const [transactions, setTransactions] = useState([
    // {
    //   id: 1,
    //   memo: "외식비용",
    //   amount: 202584,
    //   is_fill: false,
    //   sender_id: 322,
    //   created_at: [2024, 3, 5, 8, 33, 0],
    // },
    // {
    //   id: 2,
    //   memo: "도서구매",
    //   amount: 74350,
    //   is_fill: false,
    //   sender_id: 322,
    //   created_at: [2024, 2, 21, 23, 9, 0],
    // },
    // {
    //   id: 3,
    //   memo: "온라인 구독료 결제",
    //   amount: 54543,
    //   is_fill: false,
    //   sender_id: 311,
    //   created_at: [2024, 2, 18, 9, 4, 0],
    // },
    // {
    //   id: 4,
    //   memo: "교통비 결제",
    //   amount: 20750,
    //   is_fill: false,
    //   sender_id: 322,
    //   created_at: [2024, 2, 8, 21, 32, 0],
    // },
    // {
    //   id: 5,
    //   memo: "휴대폰 요금 결제",
    //   amount: 275031,
    //   is_fill: true,
    //   sender_id: 322,
    //   created_at: [2024, 2, 7, 2, 9, 0],
    // },
  ]);

  

  const [dateTransactions, setDateTransactions] = useState([])
  
  useEffect(() => {
    let temp = []; // [ { date: [2024, 5, 3], trs: [ tr, tr, ] } ]
    for (let idx in transactions) {
      let tr = transactions[idx];
      console.log(tr['created_at']);
      // 일단, temp에 현재 날짜가 있는지 없는지 체크
      let targetIdx = temp.findIndex( 
        ({ date }) => date.toString() === tr['created_at'].slice(0, 3).toString() 
      )

      if (targetIdx !== -1) {
        // 있으면, trs: push
        temp[targetIdx].trs.push(tr)
      } else {
        // 없으면, temp: push ( {date:  tr[] , trs: [tr] })
        temp.push({ date: tr['created_at'].slice(0, 3), trs: [tr] })
      }

      // 날짜를 가지고,
      // temp에 {}를 만들어서 넣는데,
      // date: [연, 월, 일]이고,
      // trs: [tr, tr, tr]
    }

    // 리스트 슬라이스
    console.log([2024, 5, 3, 14, 3, 7].slice(0, 3)) // [2024, 5, 3]
    console.log( [2024, 5, 3] == [2024, 5, 3] ? 'true' : 'false') // false
    // 리스트의 값 비교 -> 문자열로 바꿔서 (트릭) or 값 하나씩 꺼내서 체크
    console.log([2024, 5, 3].toString() === [2024, 5, 3].toString()); // true
    // 특정 값이 있는 index 찾기 -1인 경우 없음
    console.log(transactions.findIndex(
      ({created_at}) => created_at.toString() === [2024, 3, 5, 8, 33, 0].toString())
    );

    // console.log(temp.push(transactions[0])); // 1, 0 -> true, false
    console.log(temp)

    setDateTransactions(temp);

    nowBalance = account.balance
    nextBalance = account.balance
  }, [transactions])

  return (
    <div className='Account'>
      <div className="app-bar">
        <div className='left' onClick={() => {navigate(-1)} }>
            <FaArrowLeft size={24}/>
          <div>{ account.account_name }</div>
        </div>
        <div>관리</div>
      </div>
      <div className="account-info">

        <div className='account-number'>
          <span>{account.bank_name}</span>
          <span>{account.account_number}</span>
          <span><FaCopy size={12} /> 복사</span>
        </div>
        <div style={{ height: 4 }}></div>
        <div className='balance'>
          {won(account.balance)}
        </div>

      </div>
      <div className="account-btns">
        <BaseButton text={'채우기'} handleClick={() => {setShowModal(true)}} />
        <BaseButton text={'보내기'} handleClick={() => navigate(`/send/${accountID}`)} />
      </div>

      <div className="transactions">
          {/* [ {date, trs}, {date, trs } ] */}
          {/* trs: [tr, tr, tr] */}
          {dateTransactions.map( ({date, trs}, idx) => {
            // 일자, 거래내역들
            // 자바스크립트 코드가 나오는 부분 뒤에 최종적으로 <div>
            return (
              <div className='date-tr-box' key={idx}>
                <span>{ `${date[1]}월 ${date[2]}일` }</span>
                {/* 거래내역들 */}
                {/* [2024, 5, 3, 14, 6, 0] */}
                {trs.map(({id, memo, amount, sender_id, created_at}) => {
                  nowBalance = nextBalance

                  if (sender_id == accountID) {
                    nextBalance = nowBalance + amount;
                  } else {
                    nextBalance = nowBalance - amount;
                  }

                  return (
                    <SecondCard key={id}
                      title={memo}
                      subTitle={`${
                        created_at[3].toString().padStart(2, '0')}:${
                          created_at[4].toString().padStart(2, '0')}`} 
                      Child={
                        <div className='tr-balance'>
                          <div className={sender_id == accountID ? '' : 'income'} >{sender_id == accountID ? '-' : ''} 
                                { won(amount) }</div>
                          <div>{ won(nowBalance) }</div>
                        </div>
                      }
                    />
                  )
                })}
              </div>
            )
          })}
                    

      </div>
      {/* div.item-list>li.item*5>span
      <div className="item-list">
        <li className="item"><span></span></li>
        <li className="item"><span></span></li>
        <li className="item"><span></span></li>
        <li className="item"><span></span></li>
        <li className="item"><span></span></li>
      </div> */}

      {showModal ? <Deposit closeModal={() => setShowModal(false)} /> : null}
    </div>
  )
}

export default Account