import React from "react";
import { Wrapper } from "../../components/common/wrapper/Wrapper.style";
import { useRecoilState } from "recoil";
import { userState } from "./../../atom/userState";
import * as S from "./Select.style";
import axios from "axios";

// import src_airplane from "../../assets/airplane.png";
// import src_home from "../../assets/home.png";
import { useNavigate } from "react-router";

import imgLocal from "../../assets/images/selectLocal.png";
import imgTravel from "../../assets/images/selectTravel.png";

const Select = () => {
  const text = useRecoilState(userState).text;
  const navigate = useNavigate();
  const handleLocal = async () => {
    const response = await axios({
      method: "post",
      url: "http://levains-lb-2013408822.ap-northeast-2.elb.amazonaws.com/api/users/sign-in",
      contentType: "application/json",
      data: {
        username: text.name,
        kakao_talk_chatting_url: text.url,
        role: "LOCAL",
      },
    });

    localStorage.setItem("accesstoken", response.data.access_token);
    if (response.status === 201) {
      navigate("/local_address");
    } else {
      navigate("/main");
    }
    //
  };

  const handleTravel = async () => {
    const response = await axios({
      method: "post",
      url: "http://levains-lb-2013408822.ap-northeast-2.elb.amazonaws.com/api/users/sign-in",
      data: {
        username: text.name,
        kakao_talk_chatting_url: text.url,
        role: "TRAVEL",
      },
    });
    localStorage.setItem("accesstoken", response.data.access_token);
    if (response.status === 201) {
      navigate("/travel_address");
    } else {
      navigate("/main");
    }
  };
  return (
    <Wrapper>
      <S.WrapperInner>
        <S.TitleBox>
          <S.Title>
            <S.msg>만나서 반가워요 :&#41;</S.msg>
            <S.msg>
              여정을 위한 <S.Color>첫번째</S.Color> 단계에요
            </S.msg>
          </S.Title>
          <S.SubTitle>해당하는 곳을 선택해주세요</S.SubTitle>
        </S.TitleBox>
        <S.SelectBox>
          <S.SelectLeftBoxOuter onClick={handleLocal}>
            <S.SelectLeftBox src={imgLocal} />
            <S.SelectText>
              제주에
              <br />
              살아요
            </S.SelectText>
          </S.SelectLeftBoxOuter>
          <S.SelectRightBoxOuter onClick={handleTravel}>
            <S.SelectRightBox src={imgTravel} />
            <S.SelectText>
              제주로
              <br /> 떠나요
            </S.SelectText>
          </S.SelectRightBoxOuter>
        </S.SelectBox>
      </S.WrapperInner>
    </Wrapper>
  );
};

export default Select;