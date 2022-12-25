import React, { useState, useEffect } from "react";
import Wrapper from "../../../components/common/wrapper/Wrapper";
import searchImage from "../../../assets/images/여행객/Union.svg";
import placeImage from "../../../assets/images/여행객/placeicon.svg";
import * as S from "./TravelAddress.style";
import * as G from "../../../components/common/header/header.style"
import SearchList from "../../../components/SearchList";
import { useNavigate } from "react-router";
import axios from "axios";
import markerImg from '../../../assets/images/marker.png'
import BigButton from "../../../components/common/button/BigButton/BigButton";
const { kakao } = window;

const TravelAddress = () => {
  const [Keyword, setKeyword] = useState("");
  const [isGet, setGet] = useState(false);
  const [LatList, pushLat] = useState([]);
  const [LongList, pushLong] = useState([]);
  
  const navigate = useNavigate();
  
  const getAVG = (arr) => {
    var sum = 0;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      sum += parseFloat(arr[i]);
    }
    return sum / len;
  };

  useEffect(() => {
    var centerPos;
    const container = document.getElementById("myMap");
    if (LatList.length === 0) {
        centerPos = new kakao.maps.LatLng(33.400701, 126.570667);
      } else {
        centerPos = new kakao.maps.LatLng(getAVG(LatList), getAVG(LongList));
      }
      const options = {
      center: centerPos,
      level: 11,
    };
    var markerImage = new kakao.maps.MarkerImage(markerImg, new kakao.maps.Size(30, 34.5), {offset: new kakao.maps.Point(17, 30)})
    const map = new kakao.maps.Map(container, options);

    for (var i = 0; i < LatList.length; i++) {
      new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(LatList[i], LongList[i]), // 마커를 표시할 위치
        image: markerImage
      });
    }
  }, [LatList, LongList]);

  const handleChange = (event) => {
    setKeyword(event.target.value);
    setGet(false);
  };

  const handleNextButton = async () => {
    const newArray = [];
    LatList.forEach((it, i) => {
      newArray.push({ latitude: parseFloat(LatList[i]), longitude: parseFloat(LongList[i]) });
    });
    await axios({
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL+"/api/address",
      contentType: "application/json",
      headers: { authorization: localStorage.getItem("accesstoken") },
      data: {
        address: newArray,
      },
    });
    navigate("/items");
  };

  const [places, setPlace] = useState(null);
  
  return (
    <Wrapper>
      <S.headerButton>
        {/* <S.headerImg src={headerImage}></S.headerImg> */}
      </S.headerButton>
      <G.HeaderBox>
        <G.Title>
          <G.firstLine>{localStorage.getItem("username")}님,</G.firstLine>
          <G.secondLine>
            만남을 위한 <G.Color>두번째 단계</G.Color> 입니다.
          </G.secondLine>
        </G.Title>
        <G.thirdLine>머무르는 숙소를 추가해주세요.</G.thirdLine>
      </G.HeaderBox>
      <div
        id="myMap"
        style={{
          width: "39.3rem",
          height: "17.4rem",
          top: "20.5rem",
          position: "absolute",
        }}
      ></div>
      <S.searchBox>
        <S.ddot></S.ddot>
        <S.inputBox
          placeholder="숙소 검색하기"
          onChange={handleChange}
        ></S.inputBox>
        <S.searchButton>
          <S.glassImg
            src={searchImage}
            onClick={() => {
              setGet(true);
            }}
          ></S.glassImg>
        </S.searchButton>
      </S.searchBox>
      {isGet ? (
        <SearchList Keyword={Keyword} setPlace={setPlace}></SearchList>
      ) : (
        <></>
      )}
      <S.resHolder>
        {places ? (
          (places.documents.map((place) => (
            <S.styledLi key={place.place_name}>
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
      <BigButton size="long" handleButton={handleNextButton}>
        다음으로
      </BigButton>
    </Wrapper>
  );
};

export default TravelAddress;
