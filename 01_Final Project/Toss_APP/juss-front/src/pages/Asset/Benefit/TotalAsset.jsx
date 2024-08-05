import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { won } from "../../../utils/currency"

import Card from "../../../components/Card/Card"
import BaseButton from "../../../components/Button/BaseButton"
import SubButton from "../../../components/Button/SubButton"

import { getAccounts } from '../../../api/account'
import './TotalAsset.css'

const TotalAsset = () => {
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts({ }).then(data => setAccounts(data))

  }, []) // 렌더링 시 실행

    // {
    //   id: 1,
    //   is_show: true,
    //   account_name: "씨티 글로벌통장",
    //   account_type: 0,
    //   balance: 3689416,
    // },
    // {
    //   id: 2,
    //   is_show: false,
    //   account_name: "우리 청년적금",
    //   account_type: 1,
    //   balance: 2307270,
    // },
    // {
    //   id: 3,
    //   is_show: true,
    //   account_name: "씨티 우대적금",
    //   account_type: 1,
    //   balance: 2307270,
    // },
    // {
    //   id: 4,
    //   is_show: false,
    //   account_name: "우리사랑적금",
    //   account_type: 1,
    //   balance: 900000,
    // },
    // {
    //   id: 5,
    //   is_show: false,
    //   account_name: "KB굿잡통장",
    //   account_type: 0,
    //   balance: 3999646,
    // },
    // {
    //   id: 6,
    //   is_show: false,
    //   account_name: "우리WON멤버스통장",
    //   account_type: 0,
    //   balance: 1233464,
    // },
    // {
    //   id: 7,
    //   is_show: false,
    //   account_name: "NH행복채움적금",
    //   account_type: 1,
    //   balance: 2102149,
    // },

  // let total = 0 ;
  // for (account in accounts) {
  //   total += account.balance;
  // }

  const [accountTotal, setAccountTotal] = useState(0);

  useEffect(() => {
    setAccountTotal(
      accounts.reduce((acc, {balance}) =>{return acc + balance}, 0)
      //자바스트립트에서 {} 쓰임새
      // 구조분해할당 할 때 - Object에서 python - dictionary
      // 코드블럭
    )
  }, [accounts])
  

  return (
    <div className='TotalAsset'>
        <div className='total'>
          <div className='left'>
            <div>총 자산</div>
            <div className='title'>{won(accountTotal)}</div>
          </div>
          <div className='right'>
            <BaseButton text={'분석'}/>
          </div>
        </div>

        <div className='account'>
          <div className='left'>
            <div>계좌</div>
            <div className='title'>{won(accountTotal)}</div>
          </div>
        </div>

        <div className='account-view'>
          <div className='tit'>입출금</div>
          {
            accounts.map( ({ id, is_show, account_name, account_type, balance }) => {
              if (!is_show) {
                return
              }

              // 계산하는 로직들...

              return (
                <Card key={id} title={account_name} subTitle={won(balance)} 
                      handleClick={() => navigate(`/account/${id}`)}
                      Child={ account_type === 0 ? 
                        <SubButton text={'송금'} 
                                    handleClick={() => {navigate(`/send/${id}`)}}
                        /> : '' } />
              )
            } )
          }
        </div>
        <div className='account-hide'>
          <div className='tit'>숨긴 계좌</div>
          {
            accounts.map( ({ id, is_show, account_name, account_type, balance }) => {
              if (is_show) {
                return
              }

              // 계산하는 로직들...

              return (
                <Card key={id} title={account_name} subTitle={won(balance)} 
                      handleClick={() => navigate(`/account/${id}`)}
                      Child={ account_type === 0 ? 
                        <SubButton text={'송금'} 
                                    handleClick={() => {navigate(`/send/${id}`)}}
                        /> : '' }/>
              )
            } )
          }
        </div>
    </div>
  )
}

export default TotalAsset