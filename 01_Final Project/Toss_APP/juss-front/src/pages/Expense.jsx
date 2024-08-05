import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'

import { FaArrowLeft } from "react-icons/fa"

import MyExpense from './Expense/MyExpense'
import CardReco from './Expense/CardReco'

import './Expense.css'

const Expense = () => {

  const navigate = useNavigate();
  const [expensePage, setExpensePage] = useState(0);

  return (
    <div className='Expense'>
        <div className="app-bar">
        <div onClick={() => {navigate(-1)}}>
            <FaArrowLeft size={24}/>
            </div>
        </div>
    <div className="menu-bar">
        <div className={expensePage === 0 ? 'active': ''} 
        onClick={ ()=> {setExpensePage(0);} }> 내 소비</div>
        <div className={expensePage === 1 ? 'active': ''} 
        onClick={ ()=> {setExpensePage(1);} }> 카드 추천</div>
    </div>
    {
          expensePage === 0 ? <MyExpense/> : <CardReco/>
        }    
    </div>
  )
}

export default Expense