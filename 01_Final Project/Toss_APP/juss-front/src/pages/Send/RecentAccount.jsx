import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { FaCamera, FaAngleRight } from "react-icons/fa";

import SecondCard from '../../components/Card/SecondCard';
import Favorite from '../../components/Card/Favorite';

import './RecentAccount.css'
import { getRecents } from '../../api/account';
// import axios from 'axios';

const RecentAccount = () => {
    const navigate = useNavigate();
    const {accountID} = useParams();
    const [recentAccounts, setRecentAccount] = useState([]);

    useEffect(() => {
        getRecents(0).then(data => setRecentAccount(data))
        
        // const token = localStorage.getItem('jwt-token')
        // axios({
        //     url: 'http://127.0.0.1:8082/api/v1/recent?accountType=0', 
        //     method: 'get',
        //     headers: {
        //         Authorization : `Bearer ${token}`,
        //     }
        // }).then(res => setRecentAccount(res.data.accounts))
    }, [])
    


  return (
    <div className='RecentAccount'>
        {/* input-box, search-bar */}
        <div className="input-box">
            <input type='text' placeholder='계좌번호 입력' />
            <FaCamera size={20} color='#505050'/>
            </div>

        <div className="myaccount">
                <div>내 계좌</div>
                <div>+ 16개 <FaAngleRight size={12}/></div>
        </div>
    <div className="recent">
        <span>최근 보낸 계좌</span>
        {recentAccounts.map(
            ({
                id,
                account_name,
                bank_name,
                account_number,
                is_favorite,
                is_own,
            }) => {
            return (
                <SecondCard key={id} title={account_name}
                subTitle={`${bank_name} ${account_number}`}
                handleClick={ () => navigate(`/transfer/${accountID}/${id}`)}
            Child={<Favorite id={id} initialFavorite={is_favorite} />}
            />
            );
            })}
        </div>
    </div>
  )
}
export default RecentAccount