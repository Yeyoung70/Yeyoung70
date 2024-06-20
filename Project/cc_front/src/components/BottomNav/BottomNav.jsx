import React from "react";

import { Link } from "react-router-dom";

import "./BottomNav.css";

import { GoHomeFill } from "react-icons/go";
import { IoChatboxOutline, IoSearchOutline } from "react-icons/io5";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <Link to={"/home"}>
        <span>
          <GoHomeFill size={27} />
        </span>
      </Link>
      <Link to={"/search"}>
        <IoSearchOutline size={28} />
      </Link>
      <Link to={"/plus"}>
        <AiOutlinePlusSquare size={28} />
      </Link>
      <Link to={"/deal"}>
        <IoChatboxOutline size={28} />
      </Link>
      <Link to={"/my"}>
        <BsPersonCircle size={25} />
      </Link>
    </div>
  );
};

export default BottomNav;
