import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav/BottomNav";
import CategoryTabs from "../../components/Button/category/CategoryTabs";
import { IoSearchOutline } from "react-icons/io5";

import "./Search.css";

const categories = {
  전체: ["반소매 티셔츠", "숏팬츠", "코튼 팬츠"],
  상의: ["니트", "후드", "맨투맨"],
  바지: ["데님 팬츠", "슬랙스", "트레이닝/조거팬츠"],
  아우터: ["후드 집업", "바람막이", "코트"],
  원피스: ["미니 원피스", "미디 원피스", "롱원피스"],
  스커트: ["미니스커트", "미디스커트", "롱스커트"],
};

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const subcategory = queryParams.get("subcategory");

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery) {
      const foundCategory = Object.keys(categories).find((cat) => {
        return categories[cat].includes(searchQuery) || cat === searchQuery;
      });

      if (foundCategory) {
        if (categories[foundCategory].includes(searchQuery)) {
          navigate(
            `/search?category=${foundCategory}&subcategory=${searchQuery}`
          );
        } else {
          navigate(`/search?category=${foundCategory}`);
        }
      } else {
        navigate(`/search?category=${searchQuery}`);
      }
    }
  };

  return (
    <div className="Search">
      <div className="search-sec">
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="상품 및 유저를 검색하세요"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <IoSearchOutline
            className="search-icon"
            size={20}
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className="category-sec">
        <CategoryTabs
          defaultCategory={category}
          defaultSubcategory={subcategory}
        />
      </div>
      <BottomNav />
    </div>
  );
};

export default Search;
