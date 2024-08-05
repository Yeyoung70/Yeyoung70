import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa"

import TotalAsset from "./Benefit/TotalAsset"
import RollingAsset from "./Benefit/RollingAsset"
import FindLoan from "./Benefit/FindLoan"

import "./Asset.css"

const Asset = () => {
  const navigate = useNavigate();
  const [assetPage, setAssetPage] = useState(0);

  return (
    <div className="Asset">
        <div className="app-bar">
            <div onClick={() => {navigate(-1)}}>
            <FaArrowLeft size={24}/>
            </div>      
            <div>편집</div>
        </div> 

        <div className="menu-bar">
            <div className={assetPage === 0 ? 'active': ''} 
            onClick={ ()=> {setAssetPage(0);} }> 자산</div>
            <div className={assetPage === 1 ? 'active': ''} 
            onClick={ ()=> {setAssetPage(1);} }> 자산 굴리기</div>
            <div className={assetPage === 2 ? 'active': ''} 
            onClick={ ()=> {setAssetPage(2);} }> 대출 찾기</div>
        </div>
        {
          assetPage === 0 ? <TotalAsset /> :
          assetPage === 1 ? <RollingAsset /> : < FindLoan />
        }
        
    </div>
  )
}

export default Asset