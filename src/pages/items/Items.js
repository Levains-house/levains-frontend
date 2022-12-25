import React, { useState } from "react";
import { Wrapper } from "../../components/common/wrapper/Wrapper.style";
import * as S from "./Items.style";
import BigButton from "./../../components/common/button/BigButton/BigButton";
import { useNavigate } from "react-router";
import * as G from "../../components/common/header/header.style"
import MyItem from "./MyItem";
import YourItem from "./YourItem";
import backImage from "../../assets/images/back.svg";

const Items = () => {
  const [whoseToggleState, setWhoseToggleState] = useState("my");
  // const [myCnt, setMyCnt] = useState(1);
  // const [yourCnt, setYourCnt] = useState(1);

  const navigate = useNavigate();

  const handleNextButton = () => {
    navigate("/main");
  };

  return (
    <>
      <Wrapper>
        <S.WrapperInner>
          <S.BackImage src={backImage} />
          <G.HeaderBox>
          <G.Title>
            <G.firstLine>{localStorage.getItem("username")}님,</G.firstLine>
            <G.secondLine>
              벌써 <G.Color>마지막</G.Color> 단계예요!
            </G.secondLine>
          </G.Title>
          {whoseToggleState === "my" ? (
            <G.thirdLine>교환하고 싶은 물건을 등록해주세요</G.thirdLine>
          ) : (
            <G.thirdLine>교환받고 싶은 물건을 등록해주세요</G.thirdLine>
          )}
        </G.HeaderBox>
        
          {/* <S.Title>
            {localStorage.getItem("username")}님, <br />
            벌써 <S.Color>마지막 </S.Color>단계에요!
          </S.Title>
          {whoseToggleState === "my" ? (
            <S.Subtitle>교환하고 싶은 물건을 등록해주세요</S.Subtitle>
          ) : (
            <S.Subtitle>교환받고 싶은 물건을 등록해주세요</S.Subtitle>
          )} */}

          <S.WhoseToggleBox>
            <S.WhoseToggleButton
              onClick={() => {
                setWhoseToggleState("my");
              }}
              isOn={whoseToggleState === "my"}
            >
              나의 주멍
            </S.WhoseToggleButton>
            <S.WhoseToggleButton
              onClick={() => {
                setWhoseToggleState("your");
              }}
              isOn={whoseToggleState === "your"}
            >
              너의 주멍
            </S.WhoseToggleButton>
          </S.WhoseToggleBox>
          {/* 컴포넌트 분리 */}
          <S.itemContainer>

          {whoseToggleState === "my" && (
            <>
              <MyItem />
              <MyItem />
              <MyItem />
              <MyItem />
              <MyItem />
              <MyItem />
              <MyItem />
              <MyItem />
              </>
              )}
          {whoseToggleState === "your" && (
            <>
              <YourItem />
              <YourItem />
              <YourItem />
              <YourItem />
              <YourItem />
              <YourItem />
              <YourItem />
            </>
          )}
          </S.itemContainer>
        </S.WrapperInner>
        <BigButton size="long" handleButton={handleNextButton}>
          다음으로
        </BigButton>
        </Wrapper>
      
    </>
  );
};

export default Items;