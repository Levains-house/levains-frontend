import React, { useEffect, useState } from "react";
import Wrapper from "../../components/common/wrapper/Wrapper";
import * as S from "./Main.style";
import headerImage from "../../assets/images/여행객/Vector.svg";
import homeImage from "../../assets/images/homeicon.png";
import levainImage from "../../assets/images/levainicon.png";
import Home from "../home/Home";
import Mypage from "../myPage/Mypage";
import logoImage from "../../assets/images/logo.svg";
import Modal from "./Modals/Modal";
import axios from "axios";
import add from "../../assets/images/add.png";
import { useNavigate } from "react-router";

const Main = () => {
  const [isHome, Toggle] = useState(true);
  const [categoryItem, setCategoryItem] = useState([]);
  const [experienceItem, setExperienceItem] = useState([]);
  const naviagte = useNavigate();
  const getHomeData = async () => {
    const response = await axios({
      method: "get",
      url: "http://levains-lb-2013408822.ap-northeast-2.elb.amazonaws.com/api/users",
      headers: {
        authorization: localStorage.getItem("accesstoken"),
      },
    });
    setCategoryItem(response.data.category_items);
    setExperienceItem(response.data.experience_items);
    console.log(response.data);
  };

  useEffect(() => {
    getHomeData();
  }, []);
  console.log(categoryItem, experienceItem);
  return (
    <Wrapper>
      <S.headerWhiteBox></S.headerWhiteBox>
      <S.headerButton>
        <S.headerImg src={headerImage}></S.headerImg>
      </S.headerButton>
      {isHome ? (
        <>
          <S.headerText>혜연님,</S.headerText>
          <S.headerText2>
            제주에서&nbsp;
            <text style={{ color: "#86C3C7" }}>특별한 만남을</text>
            &nbsp;나눠보세요
          </S.headerText2>
          <Home />
        </>
      ) : (
        <>
          <S.headerText>혜연님,</S.headerText>
          <S.headerText2>
            <text style={{ color: "#86C3C7" }}>나의 르방</text>
            &nbsp;확인해보세요!
          </S.headerText2>
          <Mypage />
        </>
      )}
      <S.bottomNavContainer></S.bottomNavContainer>
      <S.logoButton>
        <S.logoImg
          src={add}
          onClick={() => {
            naviagte("/items");
          }}
        />
      </S.logoButton>
      <S.homeButton
        onClick={() => {
          Toggle(true);
        }}
      >
        <S.homeImg src={homeImage}></S.homeImg>
      </S.homeButton>
      <S.homeText>홈</S.homeText>
      <S.levainButton
        onClick={() => {
          Toggle(false);
        }}
      >
        <S.levainImg src={levainImage}></S.levainImg>
      </S.levainButton>
      <S.levainText>나의 르방</S.levainText>
    </Wrapper>
  );
};

export default Main;
