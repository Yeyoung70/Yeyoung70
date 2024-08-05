import React, { useState } from 'react'

import { FaStar } from "react-icons/fa";

import './Favorite.css'

// import { axiosClient } from '../../utils/axios';
import { toggleFavorite } from '../../api/account';

const Favorite = ( {id, initialFavorite } ) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const toggle = () => {

    toggleFavorite(id).then(data => setIsFavorite(!isFavorite))
    // const token = localStorage.getItem('jwt-token');

    // axiosClient.put(`/accounts/${id}/favorite`,{}, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }).then(res => {setIsFavorite(!isFavorite)});

    // axiosClient({
    //   url: `${process.env.REACT_APP_API_URL}/accounts/${id}/favorite`,
    //   method: 'put',
    //   // headers: {
    //   //   Authorization: `Bearer ${token}`,
    //   // },
    // }).then(res => {setIsFavorite(!isFavorite)})
  };

  return (
    <div className='Favorite' onClick={() => {toggle()}}>
        <FaStar className={isFavorite ? "active" : ""} size={24} />
      </div>
  )
}

export default Favorite;
