import React from "react";
import { Wrapper } from "../../components/common/wrapper/Wrapper.style";
import { useRecoilState } from "recoil";
import { userState } from "./../../atom/userState";
import * as S from "./Select.style";
import axios from "axios";

import src_airplane from "../../assets/airplane.png";
import src_home from "../../assets/home.png";
import { useNavigate } from "react-router";

const Select = () => {
  const [text, setText] = useRecoilState(userState);
  const navigate = useNavigate();
  console.log(text);
  const handleLocal = () => {
    console.log(text);
    axios({
      method: "post",
      url: "api/users/sign-in",
      contentType: "application/json",
      data: {
        username: text.name,
        kakao_talk_chatting_url: text.url,
        role: "LOCAL",
      },
    });
    navigate("/local_address");
  };
  const handleTravel = () => {
    console.log(text);
    axios({
      method: "post",
      url: "api/users/sign-in",
      data: {
        username: text.name,
        kakao_talk_chatting_url: text.url,
        role: "travel",
      },
    });
    navigate("/travel_address");
  };
  return (
    <Wrapper>
      <S.WrapperInner>
        <S.TitleBox>
          <S.Title>
            <p>유나님,</p>

            <p>
              만남을 위한 <S.Color>첫번째 단계</S.Color> 입니다.
            </p>
          </S.Title>
          <S.SubTitle>해당하는 곳을 선택해주세요.</S.SubTitle>
        </S.TitleBox>
        <S.SelectBox>
          <S.SelectLeftBox>
            <S.SelectLeft>
              <S.SelectIcon src={src_home} />
              <S.SelectText onClick={handleLocal}>
                제주에
                <br /> 살아요
              </S.SelectText>
            </S.SelectLeft>
          </S.SelectLeftBox>
          <S.SelectRightBox>
            <S.SelectRight>
              <S.SelectIcon src={src_airplane} />
              <S.SelectText onClick={handleTravel}>
                제주로
                <br /> 떠나요
              </S.SelectText>
            </S.SelectRight>
          </S.SelectRightBox>
        </S.SelectBox>
      </S.WrapperInner>
    </Wrapper>
  );
};

export default Select;
