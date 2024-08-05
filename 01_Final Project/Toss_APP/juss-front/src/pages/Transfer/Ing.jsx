import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { won } from '../../utils/currency'

import { FaSpinner } from "react-icons/fa";

import './Ing.css'
// import axios from 'axios';
import { getAccount } from '../../api/account';

const Ing = ({amount}) => {
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

  }, []) // toID를 주지않아도, 적용되는 상황
        // 페이지가 다시 렌더링 되는 상황은 toID가 바뀌었을 때 뿐
  


  return (
    <div className='Ing'>
      <div className="icon">
      <FaSpinner size={190}/>
      </div>
      <div>
        <div className="message">
            <div><span className='main-color'>{toAccount.account_name}</span> 님에게</div>
            <div>{won(amount)} 을</div>
            <div>보낼게요</div>
        </div>
      </div>
    </div>
  )
}

export default Ing