import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Tabs from "./Tabs";
import CategoryButton from "./CategoryButton";
import FilterButton from "./FilterButton";
import ColorFilterModal from "../../modal/search/ColorFilterModal";
import SizeFilterModal from "../../modal/search/SizeFilterModal";
import { article_list } from "../../../api/articles";

import { IoIosArrowDown } from "react-icons/io";

import "./CategoryTabs.css";

const categories = {
  전체: ["반소매 티셔츠", "숏팬츠", "코튼 팬츠"],
  상의: [
    "니트",
    "후드",
    "맨투맨",
    "셔츠블라우스",
    "긴소매티셔츠",
    "반소매티셔츠",
    "민소매티셔츠",
    "카라티셔츠",
    "베스트",
  ],
  하의: [
    "데님 팬츠",
    "슬랙스",
    "트레이닝조거팬츠",
    "숏팬츠",
    "코튼팬츠",
    "레깅스",
  ],
  아우터: [
    "후드집업",
    "바람막이아노락",
    "코트",
    "롱패딩",
    "숏패딩",
    "패딩베스트",
    "블루종",
    "레더자켓",
    "무스탕",
    "트러커자켓",
    "블레이저",
    "가디건",
    "뽀글이후리스",
    "사파리자켓",
  ],
  원피스: ["미니 원피스", "미디 원피스", "롱원피스"],
  스커트: ["미니스커트", "미디스커트", "롱스커트"],
};

const filters = {
  color: [
    { name: "어두운 빨강", color: "#8b0000" },
    { name: "빨강", color: "red" },
    { name: "밝은 빨강", color: "light red" },
    { name: "어두운 초록", color: "dark green" },
    { name: "초록", color: "green" },
    { name: "밝은 초록", color: "light green" },
    { name: "어두운 파랑", color: "dark blue" },
    { name: "파랑", color: "blue" },
    { name: "밝은 파랑", color: "light blue" },
    { name: "어두운 노랑", color: "dark yellow" },
    { name: "노랑", color: "yellow" },
    { name: "밝은 노랑", color: "light yellow" },
    { name: "어두운 자홍", color: "dark magenta" },
    { name: "자홍", color: "magenta" },
    { name: "밝은 자홍", color: "light magenta" },
    { name: "어두운 청록", color: "dark cyan" },
    { name: "청록", color: "cyan" },
    { name: "밝은 청록", color: "light cyan" },
    { name: "어두운 주황", color: "dark orange" },
    { name: "주황", color: "orange" },
    { name: "밝은 주황", color: "light orange" },
    { name: "어두운 보라", color: "dark purple" },
    { name: "보라", color: "purple" },
    { name: "밝은 보라", color: "light purple" },
    { name: "어두운 분홍", color: "dark pink" },
    { name: "분홍", color: "pink" },
    { name: "밝은 분홍", color: "light pink" },
    { name: "어두운 라임", color: "dark lime" },
    { name: "라임", color: "lime" },
    { name: "밝은 라임", color: "light lime" },
    { name: "어두운 갈색", color: "dark brown" },
    { name: "갈색", color: "brown" },
    { name: "밝은 갈색", color: "light brown" },
    { name: "어두운 회색", color: "dark gray" },
    { name: "회색", color: "gray" },
    { name: "밝은 회색", color: "light gray" },
    { name: "검정", color: "black" },
    { name: "흰색", color: "white" },
    { name: "기타 색상", color: "rainbow" },
  ],
  size: ["XS", "S", "M", "L", "XL", "2XL 이상", "FREE"],
  condition: ["New", "Used"],
  availability: ["In Stock", "Out of Stock"],
};

const CategoryTabs = ({ defaultCategory, defaultSubcategory }) => {
  const [currentCategory, setCurrentCategory] = useState(
    defaultCategory || "전체"
  );
  const [currentSubcategory, setCurrentSubcategory] = useState(
    defaultSubcategory || ""
  );
  const [activeFilters, setActiveFilters] = useState({
    condition: [],
    availability: [],
    color: [],
    size: [],
  });
  const [articles, setArticles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (defaultCategory) {
      setCurrentCategory(defaultCategory);
    }
    if (defaultSubcategory) {
      setCurrentSubcategory(defaultSubcategory);
    }
  }, [defaultCategory, defaultSubcategory]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const access = localStorage.getItem("access");
        if (!access) {
          throw new Error("Access token not found");
        }

        const articleData = {
          top_category:
            currentCategory !== "전체" ? currentCategory : undefined,
          bottom_category: currentSubcategory || undefined,
          color: activeFilters.color.length
            ? activeFilters.color.join(",")
            : undefined,
          size: activeFilters.size.length
            ? activeFilters.size.join(",")
            : undefined,
          condition: activeFilters.condition.length
            ? activeFilters.condition.join(",")
            : undefined,
          availability: activeFilters.availability.length
            ? activeFilters.availability.join(",")
            : undefined,
          sPrice: 9000, // 예시 값, 필요에 따라 조정
          ePrice: 50000, // 예시 값, 필요에 따라 조정
          isSort: "asc", // 예시 값, 필요에 따라 조정
        };

        console.log("Fetching articles with data:", articleData);

        const data = await article_list(articleData, access);
        console.log("Fetched articles:", data.results);
        setArticles(data.results);
      } catch (err) {
        console.error("Error fetching article list:", err);
      }
    };

    fetchArticles();
  }, [currentCategory, currentSubcategory, activeFilters]);

  const updateURLParams = (params) => {
    const searchParams = new URLSearchParams(location.search);
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        searchParams.set(key, params[key]);
      } else {
        searchParams.delete(key);
      }
    });
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const handleTabClick = (category) => {
    setCurrentCategory(category);
    setCurrentSubcategory(""); // 메인 카테고리를 클릭할 때 하위 카테고리를 초기화
    updateURLParams({ category });
  };

  const handleSubcategoryClick = (subcategory) => {
    setCurrentSubcategory(subcategory);
    updateURLParams({ category: currentCategory, subcategory });
  };

  // const handleFilterClick = (filterType, filterValue) => {
  //   setActiveFilters((prevFilters) => {
  //     const newFilters = { ...prevFilters };
  //     if (newFilters[filterType]?.includes(filterValue)) {
  //       newFilters[filterType] = newFilters[filterType].filter(
  //         (value) => value !== filterValue
  //       );
  //     } else {
  //       newFilters[filterType].push(filterValue);
  //     }
  //     return newFilters;
  //   });
  // };

  // const isFilterActive = (filterType, filterValue) => {
  //   return activeFilters[filterType]?.includes(filterValue) ?? false;
  // };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const handleApplyFilter = (filterType, selectedFilters) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: selectedFilters,
    }));
    const filterParams = {
      category: currentCategory,
      subcategory: currentSubcategory,
      color: activeFilters.color.join(","),
      size: activeFilters.size.join(","),
    };
    if (filterType === "color") {
      filterParams.color = selectedFilters.join(",");
    } else if (filterType === "size") {
      filterParams.size = selectedFilters.join(",");
    }
    updateURLParams(filterParams);
  };

  const handleCardSecClick = (article_pk) => {
    navigate(`/product?detail=${article_pk}`);
  };

  return (
    <div className="CategoryTabs">
      <div className="sticky-tabs">
        <Tabs
          tabs={Object.keys(categories).map((label) => ({ label }))}
          onTabClick={handleTabClick}
          defaultActiveTab={currentCategory}
        />
      </div>
      <div className="category-buttons">
        {(categories[currentCategory] || []).map((subcategory) => (
          <CategoryButton
            key={subcategory}
            label={subcategory}
            onClick={() => handleSubcategoryClick(subcategory)}
            active={currentSubcategory === subcategory}
          />
        ))}
      </div>

      <div className="line"></div>

      <div className="filter-buttons">
        <FilterButton
          label="색상"
          isActive={false}
          onClick={() => openModal("color")}
          Icon={IoIosArrowDown}
        />
        <FilterButton
          label="사이즈"
          isActive={false}
          onClick={() => openModal("size")}
          Icon={IoIosArrowDown}
        />
        {/* <FilterButton
          Icon={IoIosArrowDropdown}
          label="새상품"
          isActive={isFilterActive("condition", "New")}
          onClick={() => handleFilterClick("condition", "New")}
        />
        <FilterButton
          Icon={IoIosArrowDropdown}
          label="품절제외"
          isActive={isFilterActive("availability", "In Stock")}
          onClick={() => handleFilterClick("availability", "In Stock")}
        /> */}
      </div>
      <div className="category-content">
        <div className="cards">
          {articles.length > 0 ? (
            articles.map((article) => (
              <div
                key={article.id}
                className="card-sec"
                onClick={() => handleCardSecClick(article.id)}
              >
                <img
                  src={
                    article.product.product_images[0]?.image_url ||
                    "기본이미지경로"
                  }
                  alt={article.title}
                  className="card"
                />
                <div className="title">{article.title}</div>
                <div className="price">{article.product.price}원</div>
              </div>
            ))
          ) : (
            <p>No articles found</p>
          )}
        </div>
      </div>
      <ColorFilterModal
        isOpen={isModalOpen && modalContent === "color"}
        onClose={closeModal}
        colors={filters.color}
        activeFilters={activeFilters.color}
        onApply={handleApplyFilter}
      />
      <SizeFilterModal
        isOpen={isModalOpen && modalContent === "size"}
        onClose={closeModal}
        sizes={filters.size}
        activeFilters={activeFilters.size}
        onApply={handleApplyFilter}
      />
    </div>
  );
};

export default CategoryTabs;
