import React, {useState} from 'react'

import { useNavigate, useParams } from "react-router-dom";

import { FaArrowLeft } from 'react-icons/fa';

import RecentAccount from "./Send/RecentAccount";
import RecentPhone from "./Send/RecentPhone";


import './Send.css'

const Send = () => {

//   const { accountID } = useParams();
  const navigate = useNavigate();

//   const [isAccount, setIsAccount] = useState(true)
  const [AccountIdx, setAccountIdx] = useState(0) 

  return (
    <div className="Send">
        <div className="app-bar">
            <div onClick={() => navigate(-1)}>
                <FaArrowLeft size={24} />
            </div>
        </div>
        <div className="header">
            <div>어디로 돈을 보낼까요?</div>
        </div>
        <div className="menu-bar">
            <div className={AccountIdx === 0 ? 'active' : ''} 
                onClick={() => {setAccountIdx(0)}}>계좌
            </div>
            <div className={AccountIdx === 1 ? 'active' : ''} 
                onClick={() => {setAccountIdx(1)}}>연락처
            </div>
        </div>
            {
    AccountIdx === 0 ? <RecentAccount /> : <RecentPhone />
    }
    </div>
  )
}

export default Send