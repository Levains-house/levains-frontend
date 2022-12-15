import React, { useState } from "react";
import { Wrapper } from "../../components/common/wrapper/Wrapper.style";
import * as S from "./Items.style";
import BigButton from "./../../components/common/button/BigButton/BigButton";
import Input from "../../components/common/input/Input";
import { useNavigate } from "react-router";
import axios from "axios";
import _ from "lodash";
import api from "../../api/api";
import image from "./sample.png";
import MyItem from "./MyItem";
import YourItem from "./YourItem";

const Items = () => {
  const [whoseToggleState, setWhoseToggleState] = useState("my");
  const [myCnt, setMyCnt] = useState(1);
  const [yourCnt, setYourCnt] = useState(1);
  // "wsl"

  const navigate = useNavigate();

  const handleAddButton = () => {};

  const handleNextButton = () => {
    navigate("/main");
  };

  return (
    <>
      <Wrapper>
        <S.WrapperInner>
          <S.Back>&#60;</S.Back>
          <S.Title>
            유나님, <br />
            만남을 위한 <S.Color>마지막 단계</S.Color> 입니다.
          </S.Title>
          <S.Subtitle>물건을 등록해주세요.</S.Subtitle>

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
          {whoseToggleState === "my" &&
            _.times(myCnt, _.constant(0)).map((it, i) => <MyItem key={i} />)}
          {whoseToggleState === "your" &&
            _.times(yourCnt, _.constant(0)).map((it) => <YourItem />)}
          <S.AddButtonWrapper>
            <S.AddButton
              onClick={() => {
                if (whoseToggleState === "my") {
                  setMyCnt(myCnt + 1);
                } else {
                  setYourCnt(yourCnt + 1);
                }
              }}
            >
              +
            </S.AddButton>
          </S.AddButtonWrapper>
        </S.WrapperInner>
      </Wrapper>
      <BigButton size="long" handleButton={handleNextButton}>
        다음으로
      </BigButton>
    </>
  );
};

export default Items;
