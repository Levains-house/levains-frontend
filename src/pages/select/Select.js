import React from "react";
import { Wrapper } from "../../components/common/wrapper/Wrapper.style";
import { useRecoilState } from "recoil";
import { userState } from "./../../atom/userState";
import * as S from "./Select.style";
import axios from "axios";

const Select = () => {
  const [text, setText] = useRecoilState(userState);
  console.log(text);
  const handleLocal = () => {
    console.log(text);
    axios({
      method: "post",
      url: "http://levains-lb-2013408822.ap-northeast-2.elb.amazonaws.com/api/users/sign-in",
      data: {
        username: text.name,
        kakao_talk_chatting_url: text.url,
        role: "local",
      },
    });
  };
  return (
    <Wrapper>
      <S.WrapperInner>
        <S.TitleBox>
          <S.Title>
            유나님,
            <br /> 만남을 위한 첫번째 단계 입니다.
          </S.Title>
          <S.SubTitle>해당하는 곳을 선택해주세요.</S.SubTitle>
        </S.TitleBox>
        <S.SelectBox>
          <S.SelectLeftBox>
            <S.SelectLeft>
              <S.SelectIcon>a</S.SelectIcon>
              <S.SelectText onClick={handleLocal}>
                제주에
                <br /> 살아요
              </S.SelectText>
            </S.SelectLeft>
          </S.SelectLeftBox>
          <S.SelectRightBox>
            <S.SelectRight>
              <S.SelectIcon>b</S.SelectIcon>
              <S.SelectText>
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
