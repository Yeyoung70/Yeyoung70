import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { won } from '../../utils/currency'
import BaseButton from '../../components/Button/BaseButton'

import { FaFlagCheckered } from "react-icons/fa";

import './Complete.css'
import SubButton from '../../components/Button/SubButton';

// import axios from 'axios';
import { getAccount } from '../../api/account';

const Complete = ({amount, toNext}) => {
  const {toID} = useParams()
  const [toAccount, setToAccount ] = useState({
    // id: 1,
    // account_name: '하나골드클럽통장',
    // account_number: '800-41-45416',
    // bank_name: '하나은행',
  })
  useEffect(() => {

    getAccount(toID).then(data => setToAccount(data))

    // const token = localStorage.getItem('jwt-token')
    // axios({
    //   url: 'http://127.0.0.1:8082/api/v1/accounts/' + toID,
    //   method: 'get',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   }
    // }).then(res => setToAccount(res.data))

  }, [])

  return (
    <div className='Complete'>
      <div className="icon">
        <FaFlagCheckered size={190}/>
      </div>
      <div>
        <div className="message">
            <div><span className='main-color'>{toAccount.account_name}</span> 님에게</div>
            <div>{won(amount)} 을</div>
            <div>보냈어요!</div>
        </div>
        <div className='memo'>
          <SubButton text={"메모 남기기"}/>
        </div>
      </div>

      <div className='button'>
          <BaseButton text={'공유하기'}/>
          <BaseButton text={'확인'} handleClick={() => toNext()}/>    
      </div>
      <div className='sub-text'>수수료는 주스가 냈어요!</div>
       
    </div>
  )
}

export default Complete