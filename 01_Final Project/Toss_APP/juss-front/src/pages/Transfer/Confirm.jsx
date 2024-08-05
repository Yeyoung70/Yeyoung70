import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { won } from '../../utils/currency'

import BaseButton from '../../components/Button/BaseButton'

import './Confirm.css'
// import axios from 'axios';
import { getAccount } from '../../api/account'

const Confirm = ({amount, toNext}) => {
  
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
  const {fromID, toID} = useParams();
  useEffect(() => {

    getAccount(fromID).then(data => setFromAccount(data))
    getAccount(toID).then(data => setToAccount(data))

    // const token = localStorage.getItem('jwt-token')
    // axios({
    //   url:'http://127.0.0.1:8082/api/v1/accounts/' + fromID,
    //   method: 'get',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   }
    // }).then(res => setFromAccount(res.data))
    // axios({
    //   url:'http://127.0.0.1:8082/api/v1/accounts/' + toID,
    //   method: 'get',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   }
    // }).then(res => setToAccount(res.data))
    
  }, [])
  
  

    
  return (
    <div className='Confirm'>
      <div>
        <div className="to-account">
            <div><span className='main-color'>{toAccount.account_name}</span> 님에게</div>
            <div>{won(amount)} 을</div>
            <div>보낼까요?</div>
        </div>
      </div>

      <div>
        <div className="account-info">
          <div>받는 분에게 표시</div>
            <div>
              <div>출금 계좌</div>
              <div>내 {fromAccount.account_name}</div>
            </div>
          
            <div>
              <div>입금 계좌</div>
              <div>{toAccount.bank_name} {toAccount.account_number}</div>
            </div>
        </div>
        
        <div className="account-btns">
            <BaseButton text={'보내기'} handleClick={() => toNext()}/>
          </div>
          <div>평생 수수료 무료</div>
      </div>
        
    </div>
  )
}

export default Confirm