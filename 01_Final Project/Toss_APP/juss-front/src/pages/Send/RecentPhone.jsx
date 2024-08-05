import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { FiSearch } from 'react-icons/fi'

import SecondCard from '../../components/Card/SecondCard'
import Favorite from '../../components/Card/Favorite'
import './RecentPhone.css'

// import axios from 'axios';
import { getRecents } from '../../api/account'

const RecentPhone = () => {
    const navigate = useNavigate();
    const {accountID} =useParams();
    
    const [recentPhones, setRecentPhones] = useState([
        // {
        //     id: 1,
        //     bank_name: "",
        //     account_name: "강우우",
        //     account_number: "010-2009-1370",
        //     is_favorite: true,
        //     is_own: false,
        // },
        // {
        //     id: 2,
        //     bank_name: "",
        //     account_name: "최태도",
        //     account_number: "010-2058-4326",
        //     is_favorite: false,
        //     is_own: false,
        // },
        // {
        //     id: 3,
        //     bank_name: "",
        //     account_name: "이지빈",
        //     account_number: "010-4662-7088",
        //     is_favorite: false,
        //     is_own: false,
        // },
        // {
        //     id: 4,
        //     bank_name: "",
        //     account_name: "김현영",
        //     account_number: "010-2891-9346",
        //     is_favorite: false,
        //     is_own: false,
        // },
        // {
        //     id: 5,
        //     bank_name: "",
        //     account_name: "윤민아",
        //     account_number: "010-2086-9234",
        //     is_favorite: false,
        //     is_own: false,
        // },
        ]);
    useEffect(() => {

        getRecents(2).then(data => setRecentPhones(data))
        // const token = localStorage.getItem('jwt-token')
        // axios({
        //     url: 'http://127.0.0.1:8082/api/v1/recent?accountType=2', 
        //     method: 'get',
        //     headers: {
        //         Authorization : `Bearer ${token}`,
        //     }
        // }).then(res => setRecentPhones(res.data.accounts))
    }, [])
    


  return (
    <div className='RecentPhone'>
        <div className='input-box'>
            <FiSearch />
            <input type="text" placeholder='검색/직접 입력' />
        </div>

    <div className="recent">
    {recentPhones.map(
        ({
            id,
            account_name,
            bank_name,
            account_number,
            is_favorite,
        }) => {
        return (
            <SecondCard key={id} title={account_name}
            subTitle={`${bank_name} ${account_number}`}
            handleClick={ () => navigate(`/transfer/${accountID}/${id}`)}
        Child={<Favorite id={id} initialFavorite={is_favorite} />}
        />
        )
        })}
    </div>
    </div>
  )
}

export default RecentPhone