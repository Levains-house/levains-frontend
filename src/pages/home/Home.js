import React, { useState, useEffect } from "react";
import * as S from "./Home.style";
import itemImage from "../../assets/images/item.png"
import sameImage from "../../assets/images/same.png"
import axios from 'axios'
import placeImage from "../../assets/images/여행객/placeicon.svg"

const Home = () => {
  const [isWalk, setWalk] = useState(true);
  const [isBus, setBus] = useState(false);
  const [isCar, setCar] = useState(false);
  const [range, setRange] = useState(1.5);
  
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
      //   axios.defaults.headers.get['header1'] = "";
        const response = await axios.get(
          "http://levains-lb-2013408822.ap-northeast-2.elb.amazonaws.com/api/users?range="+String(range),{
          headers: {
              'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSldUIiwidXNlcl9pZCI6OCwidXNlcm5hbWUiOiJ0MTIzIiwia2FrYW9fdGFsa19jaGF0dGluZ191cmwiOiJ0ZXN0ZXN0Iiwicm9sZSI6IlRSQVZFTCIsImlhdCI6MTY3MTEwMjUwMCwiZXhwIjoxNjczNjk0NTAwLCJpc3MiOiJhZG1pbiJ9.-GspI417TwHFee5oEITknNgOHBPM9J5jTM2-1rwneXA"
          },}
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
  };

  useEffect(() => {
      fetchUsers();
      // console.log("ddddd");
  }, [isWalk, isBus, isCar]);
  
  // if (loading) return <div>로딩중..</div>; 
  // if (error) return <div>에러가 발생했습니다</div>;
  
  // if (!users) return null;
    

  return(
    <>
      <S.homeBack></S.homeBack>
      <S.walkButton 
        style={isWalk ? {background:'#688FF2'} : {background:'#CDCED6'}}
        onClick={()=>{setWalk(true);setBus(false);setCar(false);setRange(1.5)}}
        >뚜벅이</S.walkButton>
      <S.busButton 
        style={isBus ? {background:'#688FF2'} : {background:'#CDCED6'}}
        onClick={()=>{setWalk(false);setBus(true);setCar(false);setRange(5)}}
        >버스로</S.busButton>
      <S.carButton 
        style={isCar ? {background:'#688FF2'} : {background:'#CDCED6'}}
        onClick={()=>{setWalk(false);setBus(false);setCar(true);setRange(10)}}
        >차타고</S.carButton>
      <S.lebangText>내가 찾던 바로 그 르방!</S.lebangText>
      <S.itemsContainer>

      <div style={{marginLeft:"1.5rem"}}>
      <S.itemButton style={{flexDirection:'column'}}>
        <S.itemImg src={itemImage}></S.itemImg>
        <S.itemText>셀린느 미디엄 버티컬 블랙</S.itemText>
        <S.iconContainer>
        <S.sameButton><S.sameImg src={sameImage}></S.sameImg></S.sameButton>
          <S.category>육아용품</S.category>
        </S.iconContainer>
      </S.itemButton>
      </div>
      
      <div style={{marginLeft:"1.5rem"}}>
      <S.itemButton style={{flexDirection:'column'}}>
        <S.itemImg src={itemImage}></S.itemImg>
        <S.itemText>셀린느 미디엄 버티컬 블랙</S.itemText>
        <S.iconContainer>
        <S.sameButton><S.sameImg src={sameImage}></S.sameImg></S.sameButton>
          <S.category>육아용품</S.category>
        </S.iconContainer>
      </S.itemButton>
      </div>
      
      <div style={{marginLeft:"1.5rem"}}>
      <S.itemButton style={{flexDirection:'column'}}>
        <S.itemImg src={itemImage}></S.itemImg>
        <S.itemText>셀린느 미디엄 버티컬 블랙</S.itemText>
        <S.iconContainer>
        <S.sameButton><S.sameImg src={sameImage}></S.sameImg></S.sameButton>
          <S.category>육아용품</S.category>
        </S.iconContainer>
      </S.itemButton>
      </div>
      
      <div style={{marginLeft:"1.5rem"}}>
      <S.itemButton style={{flexDirection:'column'}}>
        <S.itemImg src={itemImage}></S.itemImg>
        <S.itemText>셀린느 미디엄 버티컬 블랙</S.itemText>
        <S.iconContainer>
        <S.sameButton><S.sameImg src={sameImage}></S.sameImg></S.sameButton>
          <S.category>육아용품</S.category>
        </S.iconContainer>
      </S.itemButton>
      </div>
      
      <div style={{marginLeft:"1.5rem"}}>
      <S.itemButton style={{flexDirection:'column'}}>
        <S.itemImg src={itemImage}></S.itemImg>
        <S.itemText>셀린느 미디엄 버티컬 블랙</S.itemText>
        <S.iconContainer>
        <S.sameButton><S.sameImg src={sameImage}></S.sameImg></S.sameButton>
          <S.category>육아용품</S.category>
        </S.iconContainer>
      </S.itemButton>
      </div>
      
      <div style={{marginLeft:"1.5rem"}}>
      <S.itemButton style={{flexDirection:'column'}}>
        <S.itemImg src={itemImage}></S.itemImg>
        <S.itemText>셀린느 미디엄 버티컬 블랙</S.itemText>
        <S.iconContainer>
        <S.sameButton><S.sameImg src={sameImage}></S.sameImg></S.sameButton>
          <S.category>육아용품</S.category>
        </S.iconContainer>
      </S.itemButton>
      </div>
      
      <div style={{marginLeft:"1.5rem"}}>
      <S.itemButton style={{flexDirection:'column'}}>
        <S.itemImg src={itemImage}></S.itemImg>
        <S.itemText>셀린느 미디엄 버티컬 블랙</S.itemText>
        <S.iconContainer>
        <S.sameButton><S.sameImg src={sameImage}></S.sameImg></S.sameButton>
          <S.category>육아용품</S.category>
        </S.iconContainer>
      </S.itemButton>
      </div>
      
      </S.itemsContainer>

      <S.lebangText2>여기 있어! 르방 체험</S.lebangText2>
      <S.resHolder>
      
      <S.styledLi>
        <S.placeBox>
          <S.placeIcon src={placeImage}></S.placeIcon>
          <div>
              <S.placeName>해품은체험농장</S.placeName>
              <S.addrText>성산읍 수산리 279-3번지 동산관광농원</S.addrText>
          </div>
        </S.placeBox>
      </S.styledLi>
      
      <S.styledLi>
        <S.placeBox>
          <S.placeIcon src={placeImage}></S.placeIcon>
          <div>
              <S.placeName>해품은체험농장</S.placeName>
              <S.addrText>성산읍 수산리 279-3번지 동산관광농원</S.addrText>
          </div>
        </S.placeBox>
      </S.styledLi>
      <S.styledLi>
        <S.placeBox>
          <S.placeIcon src={placeImage}></S.placeIcon>
          <div>
              <S.placeName>해품은체험농장</S.placeName>
              <S.addrText>성산읍 수산리 279-3번지 동산관광농원</S.addrText>
          </div>
        </S.placeBox>
      </S.styledLi>
      <S.styledLi>
        <S.placeBox>
          <S.placeIcon src={placeImage}></S.placeIcon>
          <div>
              <S.placeName>해품은체험농장</S.placeName>
              <S.addrText>성산읍 수산리 279-3번지 동산관광농원</S.addrText>
          </div>
        </S.placeBox>
      </S.styledLi>

      </S.resHolder>
    </>
  )
};

export default Home;
