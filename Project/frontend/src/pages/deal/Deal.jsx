import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomNav from "../../components/BottomNav/BottomNav";
import DealTabs from "../../components/tabs/deal/DealTabs";
import ChatNone from "./ChatNone";

import { GoBell } from "react-icons/go";

import "./Deal.css";
import DealBuy from "../../components/tabs/deal/DealBuy";
import DealSell from "../../components/tabs/deal/DealSell";

const tabs = ["판매중", "판매 완료", "채팅"];

const Deal = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleAlarmClick = () => {
    navigate("/alarm");
  };

  const renderContent = () => {
    switch (currentTab) {
      case "판매중":
        return (
          <div>
            <DealSell />
          </div>
        );

      case "판매 완료":
        return (
          <div>
            <DealBuy />
          </div>
        );
      case "채팅":
        return (
          <div>
            <ChatNone />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="Deal">
      <div className="header-sec">
        <div className="title">거래</div>
        <div className="alarm-icon">
          <GoBell size={26} onClick={handleAlarmClick} />
        </div>
      </div>
      <div className="tab-sec">
        <DealTabs
          tabs={tabs.map((label) => ({ label }))}
          onTabClick={handleTabClick}
        />
      </div>
      <div className="content-sec">{renderContent()}</div>
      <BottomNav />
    </div>
  );
};

export default Deal;
