import React, { useState } from "react";
import Wrapper from "../../components/common/wrapper/Wrapper";
import * as S from "./Main.style";
import headerImage from "../../assets/images/여행객/Vector.svg";
import homeImage from "../../assets/images/homeicon.png";
import levainImage from "../../assets/images/levainicon.png";
import Home from "../home/Home";
import Mypage from "../myPage/Mypage";
import * as G from "../../components/common/header/header.style"
import add from "../../assets/images/add.png";
import { useNavigate } from "react-router";

const Main = () => {
  const [isHome, Toggle] = useState(true);
  const naviagte = useNavigate();
  return (
    <Wrapper>
      <S.headerWhiteBox></S.headerWhiteBox>
      <S.headerButton>
        <S.headerImg src={headerImage}></S.headerImg>
      </S.headerButton>
      <G.firstLine>{localStorage.getItem("username")}님,</G.firstLine>
      {isHome ? (
      <>
        <G.secondLine>
          제주에서 <G.Color>특별한 여정</G.Color>을 시작해보세요!
        </G.secondLine>
        <Home />
      </>
      ):(
        <>
        <G.secondLine>
          <G.Color>나의 주멍</G.Color> 확인해보세요!
        </G.secondLine>
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
      <S.levainText>나의 주멍</S.levainText>
    </Wrapper>
  );
};

export default Main;