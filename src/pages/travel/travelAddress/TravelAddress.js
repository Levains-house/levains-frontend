import React, { useState, useEffect } from "react";
import Wrapper from "../../../components/common/wrapper/Wrapper";
import headerImage from "../../../assets/images/여행객/Vector.svg";
import searchImage from "../../../assets/images/여행객/Union.svg";
import placeImage from "../../../assets/images/여행객/placeicon.svg";
import * as S from "./TravelAddress.style";
import SearchList from "../../../components/SearchList";
import { useNavigate } from "react-router";
import axios from "axios";
const { kakao } = window;

const TravelAddress = () => {
  const [Keyword, setKeyword] = useState("");
  const [isGet, setGet] = useState(false);
  const [LatList, pushLat] = useState([]);
  const [LongList, pushLong] = useState([]);
  console.log(LatList, LongList);
  const navigate = useNavigate();
  const getAVG = (arr) => {
    var sum = 0;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      sum += arr[i];
    }
    return sum / len;
  };

  var centerPos = new kakao.maps.LatLng(33.450701, 126.570667);
  useEffect(() => {
    const container = document.getElementById("myMap");
    if (LatList.length === 0) {
      centerPos = new kakao.maps.LatLng(33.450701, 126.570667);
    } else {
      centerPos = new kakao.maps.LatLng(getAVG(LatList), getAVG(LongList));
    }
    const options = {
      center: centerPos,
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    for (var i = 0; i < LatList.length; i++) {
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(LatList[i], LongList[i]), // 마커를 표시할 위치
      });
    }
  }, [LatList]);

  const handleChange = (event) => {
    setKeyword(event.target.value);
    setGet(false);
  };

  const handleNextButton = async () => {
    const newArray = [];
    LatList.forEach((it, i) => {
      newArray.push({ latitude: LatList[i], longitude: LongList[i] });
    });
    const response = await axios({
      method: "post",
      url: "http://levains-lb-2013408822.ap-northeast-2.elb.amazonaws.com/api/users/sign-in/address",
      contentType: "application/json",
      headers: { authorization: localStorage.getItem("accesstoken") },
      data: {
        address: newArray,
      },
    });
    navigate("/items");
  };

  const [places, setPlace] = useState(null);
  let listItem;
  return (
    <Wrapper>
      <S.headerButton>
        <S.headerImg src={headerImage}></S.headerImg>
      </S.headerButton>
      <S.textHeader1>유나님,</S.textHeader1>
      <S.textHeader2>
        만남을 위한&nbsp;<text style={{ color: "#86C3C7" }}>두번째 단계</text>
        &nbsp;입니다.
      </S.textHeader2>
      <S.placeText>머무르는 숙소를 추가해주세요.</S.placeText>
      <div
        id="myMap"
        style={{
          width: "39.3rem",
          height: "17.4rem",
          top: "20.5rem",
          position: "absolute",
        }}
      ></div>
      <S.searchBox></S.searchBox>
      <S.inputBox
        placeholder="숙소 검색하기"
        onChange={handleChange}
      ></S.inputBox>
      <S.ddot></S.ddot>
      <S.searchButton>
        <S.glassImg
          src={searchImage}
          onClick={() => {
            setGet(true);
          }}
        ></S.glassImg>
      </S.searchButton>
      {isGet ? (
        <SearchList Keyword={Keyword} setPlace={setPlace}></SearchList>
      ) : (
        <></>
      )}
      <S.resHolder>
        {places ? (
          (listItem = places.documents.map((place) => (
            <S.styledLi>
              <S.placeBox>
                <S.placeIcon src={placeImage}></S.placeIcon>
                <div>
                  <S.placeName>{place.place_name}</S.placeName>
                  <S.addrText>{place.road_address_name}</S.addrText>
                </div>
                <S.choice
                  onClick={() => {
                    pushLat((oldArray) => [...oldArray, place.y]);
                    pushLong((oldArray) => [...oldArray, place.x]);
                  }}
                >
                  선택
                </S.choice>
              </S.placeBox>
            </S.styledLi>
          )))
        ) : (
          <></>
        )}
      </S.resHolder>
      <S.nextButton onClick={handleNextButton}>다음으로</S.nextButton>
    </Wrapper>
  );
};

export default TravelAddress;
