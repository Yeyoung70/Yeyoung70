import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Modal from '../containers/Modal'
import Card from '../components/Card/Card'
import { won } from '../utils/currency'

import './Deposit.css'

// import axios from 'axios'
import { getAccounts } from '../api/account'

const Deposit = ({ closeModal }) => {
    const { accountID } = useParams()
    const navigate = useNavigate()
    const [myAccounts, setMyAccounts] = useState([])
    
    const [accounts, setAccounts] = useState([
      // { id: 1, account_type: 0, account_name: "KB마이핏통장", balance: 93050 },
      // {
      //   id: 2,
      //   account_type: 0,
      //   account_name: "NH멤버스통장",
      //   balance: 2690771,
      // },
      // {
      //   id: 3,
      //   account_type: 0,
      //   account_name: "KB마이핏통장",
      //   balance: 4840092,
      // },
      // {
      //   id: 4,
      //   account_type: 1,
      //   account_name: "기업 BIZ통장",
      //   balance: 2553247,
      // },
]);

    useEffect(() => {

      getAccounts({ }).then(data => setAccounts(data))

      // const token = localStorage.getItem('jwt-token')

      // axios({
      //   url: 'http://127.0.0.1:8082/api/v1/accounts',
      //   method: 'get',
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }).then(res => {
      //   console.log(res) 
      //   setAccounts(res.data.accounts)
      // })
    }, []) // 렌더링 시 accounts 가져옴.

    useEffect( () => {
        //accounts를 통해
        // 1. 입출금이 가능한 계좌
        // 2. 현재 선택된 계좌는 제외 (AccountDetail의 모달임에 유의)
        //         -  현재 계좌는 어떻게 가져올 것인지
        // myAccounts에 담기

        // const temp = []
        // array.forEach(element => {
        //     temp.push()
        // });
        setMyAccounts(
            accounts.filter(( {id, account_type }) => {
            return account_type === 0 && id+"" !== accountID
        })
    )
    }, [accounts]) // account가 변했을 때 myaccounts를 계산한다 
    
  return (
    <Modal closeModal={() => closeModal() }>
        <div className='Deposit'>
        <hr style={{width: "90px", border: "3px solid ##D9D9D9"}}/>
            <div className="menu-bar">
            
            어떤 계좌에서 돈을 가져올까요?
            </div>
        <div className="accounts">
            {myAccounts.map( ({ id, account_name, balance }) => {
                return <Card key={id} title={account_name} subTitle={won(balance)}
                handleClick={() => navigate(`transfer/${id}/${accountID}`)} />
            } ) }
        </div>
      </div>
    </Modal>
  )
}

export default Deposit
