import React from "react";
import { Routes, Route } from "react-router-dom";

import Start from "../pages/Start";

import Home from "../pages/Home";
import Asset from "../pages/Asset/Asset";
import Expense from "../pages/Expense";
import TransferPage from "../pages/TransferPage";


import Pay from "../pages/Pay";
import Menu from "../pages/Menu";
import Benefit from "../pages/Benefit";
import Stock from "../pages/Stock";
import Account from "../pages/Account";
import Send from "../pages/Send";

import PrivateRoute from "./PrivateRoute";



// 처음 Route 설정이 끝나면,
// 1. routes/index.js에서 url 매핑하고,
// 2. 페이지 컴포넌트 개발
// 1, 2 반복

// 1. 다른 페이지들 만들고, Route element에 연결
// 2. BottomNav 연결하여 전체 페이지 이동하는데 문제가 없도록 개발


const AllRoutes = () => { //arrow function
    // 라우터들을 넣을 것
    return (
        <Routes>
            <Route path="/start" element={<Start />} />

            <Route element={<PrivateRoute/>}>
            
                <Route path="/" element={<Home />} />
                <Route path="/asset" element={<Asset />} />
                <Route path="/account/:accountID" element={<Account />} />
                <Route path="/send/:accountID" element={<Send />} />
                <Route path="/expense" element={<Expense />} />
                <Route path="/transfer/:fromID/:toID" element={<TransferPage />} />

                <Route path="/benefit" element={<Benefit />} />
                <Route path="/pay" element={<Pay /> } />
                <Route path="/stock" element={ <Stock />} />
                <Route path="/menu" element={ <Menu />} />

            </Route>
        </Routes>
    );
}

export default AllRoutes