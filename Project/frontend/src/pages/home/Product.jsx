import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { article_detail } from "../../api/articles";
import { list_comments } from "../../api/comment";

import ProductModal from "../../components/modal/home/ProductModal";
import BottomQuest from "../../components/BottomNav/BottomQuest";
import card from "../../assets/card/card_sample.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoArrowLeft } from "react-icons/go";

import "./Product.css";

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const article_pk = searchParams.get("detail");

  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const access = localStorage.getItem("access");
        if (!access) {
          throw new Error("액세스 토큰을 찾을 수 없습니다");
        }
        const data = await article_detail(article_pk, access);
        setArticle(data);
      } catch (err) {
        setError(err);
        console.error("게시물 정보를 가져오는 중 오류 발생:", err);
      }
    };

    if (article_pk) {
      fetchArticle();
    } else {
      console.error("게시물 ID가 정의되지 않았습니다");
    }
  }, [article_pk]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await list_comments(article_pk);
        setComments(data);
      } catch (err) {
        console.error("댓글 정보를 가져오는 중 오류 발생:", err);
      }
    };

    if (article_pk) {
      fetchComments();
    }
  }, [article_pk]);

  const handleShowProductModal = () => {
    setShowProductModal(true);
  };

  const handleCloseProductModal = () => {
    setShowProductModal(false);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    if (article?.product) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0
          ? article.product.product_images.length - 1
          : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (article?.product) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === article.product.product_images.length - 1
          ? 0
          : prevIndex + 1
      );
    }
  };

  if (error) {
    return <div>오류: {error.message}</div>;
  }

  if (!article) {
    return <div>로딩 중...</div>;
  }

  const handleBackClick = () => {
    const fromSellPage = location.state?.fromSellPage || false;
    if (fromSellPage) {
      navigate("/search");
    } else {
      navigate(-1);
    }
  };

  const images = article.product?.product_images || [];
  const imageUrl = images[currentImageIndex]?.image_url || "기본이미지경로";

  return (
    <div className="Product">
      <div className="header-sec">
        <div className="back" onClick={handleBackClick}>
          <IoIosArrowBack size={26} />
        </div>
        <div className="title">{article.title}</div>
        <div className="alarm">
          <HiOutlineDotsVertical size={26} onClick={handleShowProductModal} />
        </div>
        {showProductModal && (
          <ProductModal
            closeModal={handleCloseProductModal}
            article_pk={article_pk}
            user_id={article.user.id}
          />
        )}
      </div>

      <div className="photo-sec">
        <button className="arrow left" onClick={handlePrevImage}>
          <IoIosArrowBack size={26} />
        </button>
        <img
          src={imageUrl}
          alt="Product"
          className="card"
          width={355}
          height={355}
        />
        <button className="arrow right" onClick={handleNextImage}>
          <IoIosArrowForward size={26} />
        </button>
      </div>

      <div className="thumbnail-sec">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.image_url}
            alt="Thumbnail"
            className={`thumbnail ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => handleImageClick(index)}
            width={45}
            height={45}
          />
        ))}
      </div>

      <div className="product-sec">
        <div className="info">
          <div className="cate">
            <div className="top">{article.product.category.top_category}</div>
            <div>
              &nbsp;
              <IoIosArrowForward size={16} />
              &nbsp;
            </div>
            <div className="bottom">
              {article.product.category.bottom_category}
            </div>
          </div>
          <div className="name">{article.title}</div>
        </div>
        <div className="nickname" onClick={() => navigate(`/user`)}>
          @{article.nickname}
        </div>
        <div className="price">{article.product.price} 원</div>
        <div className="content">{article.content}</div>
      </div>
      <div className="line"></div>
      {comments.map((comment, index) => (
        <div className="review-sec" key={index}>
          <div className="photo">
            <img
              src={comment.user.profile_image || card}
              alt="card"
              className="card"
            />
          </div>
          <div className="info">
            <div className="nickname">@{comment.user.nickname}</div>
            <div className="text">{comment.text}</div>
            <div className="bottom">
              <div className="time">
                {new Date(comment.created_at).toLocaleString()}
              </div>
              <div className="like">♡ 좋아요</div>
              <div className="rereview">답글 쓰기</div>
            </div>
          </div>
        </div>
      ))}
      <div className="comment-sec">
        <div className="info">
          <input type="text" placeholder="댓글을 입력해 주세요" />
          <div className="icon">
            <GoArrowLeft size={24} />
          </div>
        </div>
      </div>

      <BottomQuest
        article_id={article_pk}
        initialFavoriteCount={article.num_favorites}
        initialIsFavorited={article.is_favorited}
        access={localStorage.getItem("access")}
      />
    </div>
  );
};

export default Product;
