import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { FaBell } from 'react-icons/fa';

import BottomNav from '../components/BottomNav/BottomNav';
import Card from '../components/Card/Card';
import SubButton from '../components/Button/SubButton';

import { won } from '../utils/currency';

// import { axiosClient } from '../utils/axios';
import { getAccounts } from '../api/account';
import { getTopay, getUsed } from '../api/transaction';

import './Home.css'
// 1. React Element 개발 시 className 바꾸고, 2. css import 하고

const Home = () => {

  const navigate = useNavigate();

  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    // const token = localStorage.getItem('jwt-token')

    getAccounts({ isShow: true}).then(data => setAccounts(data))

    getTopay({}).then(data => setToPay(data))
    getUsed({}).then(data => setUsedMoney(data))

  //   axiosClient({
  //     url: 'http://127.0.0.1:8082/api/v1/used',
  //     method: 'get',
  //   }).then(res => {
  //     console.log(res.data);
  //     setUsedMoney(res.data.amount)});

  //   axiosClient({
  //     url: 'http://127.0.0.1:8082/api/v1/topay',
  //     method: 'get',
  // }).then(res => setToPay(res.data.topay));



  }, []) // 랜더링 완료된 후 실행
  const [toPay, setToPay] = useState({})

  // const accounts = [
  //   {
  //     id: 1,
  //     name: '신한 쏠(SOL)',
  //     type: 0, // 입출금, 1: 적금, 2: 연락처
  //     balance: 1576326,
  //   },
  //   {
  //     id: 2,
  //     name: '기업 BIZ적금',
  //     type: 0, // 입출금, 1: 적금, 2: 연락처
  //     balance: 1607728,
  //   },
  //   {
  //     id: 3,
  //     name: '부산 해피드림적금',
  //     type: 1, // 입출금, 1: 적금, 2: 연락처
  //     balance: 896659,
  //   },
  //   {
  //     id: 4,
  //     name: '씨티 클리어적금',
  //     type: 1, // 입출금, 1: 적금, 2: 연락처
  //     balance: 4932120,
  //   },
  //   {
  //     id: 5,
  //     name: '청년내일저축계좌',
  //     type: 1, // 입출금, 1: 적금, 2: 연락처
  //     balance:  3000000,
  //   },
  // ]

  const [usedMoney, setUsedMoney] = useState(0)

  // const toPay = {
  //   date: '5월 15일',
  //   amount: 5670653
  // }

  return (
    <div className='Home'>
        <div className="header">
          <div className="left">
            <div className="icon"></div>
            <span className="app-name">Juss</span>
          </div>
          <div className="right">
            <FaBell size={28}/>
          </div>
        </div>

        <div className="section asset">
          {accounts.map( ( { id, account_name, account_type, balance } ) => {
            return (
              // {/* 1. layout 잡는 것 */}
              // {/* 2. 컴포넌트의 구성 요소인 경우 */}
              <Card key={id} title={account_name} subTitle={won(balance)}
                    handleClick={() => navigate(`/account/${id}`)}
                    Child={ account_type === 0 ? 
                      <SubButton text={'송금'} 
                                  handleClick={() => {navigate(`/send/${id}`)}}
                      /> : '' } />
            )
          })}
          <hr style={ { width: '100%', border: "1px solid #efefef" } } />
          <Link to={"/asset"}>
            전체 자산 보기 
          </Link>
        </div>

        <div className="section expense">
            <Card title={'이번 달 쓴 금액'} subTitle={won(usedMoney)}
                  Child={ <SubButton text={'내역'} handleClick={() => navigate('/expense')} /> } />

            <Card title={ `${toPay.date} 낼 카드값` } subTitle={won(toPay.amount)} />
        </div>

        <div className="section function">
          <span>계좌개설</span>
          |
          <span>카드발급</span>
          |
          <span>대출받기</span>
        </div>
        <BottomNav />
    </div>
  )
}

export default Home