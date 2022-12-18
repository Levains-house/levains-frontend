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
  const [text, ] = useRecoilState(userState);
  const navigate = useNavigate();
  
  const handleLocal = async () => {
    // console.log(process.env.REACT_APP_BACKEND_URL)
    const response = await axios({
      
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL+"/api/users/sign-in",
      contentType: "application/json",
      data: {
        username: text.name,
        kakao_talk_chatting_url: text.url,
        role: "LOCAL",
      },
    });

    localStorage.setItem("accesstoken", response.data.access_token);
    if (response.status === 201) {
      // console.log(response)
      navigate("/local_address");
    } else {
      navigate("/main");
    }
    //
  };

  const handleTravel = async () => {
    const response = await axios({
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL+"/api/users/sign-in",
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
            <S.firstLine>만나서 반가워요 :&#41;</S.firstLine>
            <S.secondLine>
              여정을 위한 <S.Color>첫번째</S.Color> 단계예요
            </S.secondLine>
          </S.Title>
          <S.thirdLine>해당하는 곳을 선택해주세요</S.thirdLine>
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