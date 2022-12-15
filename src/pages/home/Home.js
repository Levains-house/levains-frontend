import React, { useState, useEffect } from "react";
import * as S from "./Home.style";
import itemImage from "../../assets/images/item.png"
import sameImage from "../../assets/images/same.png"
import axios from 'axios'
import placeImage from "../../assets/images/여행객/placeicon.svg"
import ItemInfo from "./ItemInfo";

const Home = () => {
  const [isWalk, setWalk] = useState(true);
  const [isBus, setBus] = useState(false);
  const [isCar, setCar] = useState(false);
  const [range, setRange] = useState(1.5);
  
  const [users, setUsers] = useState(null);

  const [modalNum, setModalNum] = useState(-1);

  const fetchUsers = async () => {
      try {
        setUsers(null);
      //   axios.defaults.headers.get['header1'] = "";
        const response = await axios.get(
          "http://levains-lb-2013408822.ap-northeast-2.elb.amazonaws.com/api/users?range="+String(range),{
          headers: {
              'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSldUIiwidXNlcl9pZCI6OCwidXNlcm5hbWUiOiJ0MTIzIiwia2FrYW9fdGFsa19jaGF0dGluZ191cmwiOiJ0ZXN0ZXN0Iiwicm9sZSI6IlRSQVZFTCIsImlhdCI6MTY3MTEwMjUwMCwiZXhwIjoxNjczNjk0NTAwLCJpc3MiOiJhZG1pbiJ9.-GspI417TwHFee5oEITknNgOHBPM9J5jTM2-1rwneXA"
          },}
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        console.log(response);
      } catch (e) {
        console.log(e);
      }
  };

  useEffect(() => {
      fetchUsers();
      // console.log("ddddd");
  }, [isWalk, isBus, isCar]);

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
      {/* Map으로 뿌리기 */}

      <div style={{marginLeft:"1.5rem"}}>
      <S.itemButton 
      style={{flexDirection:'column'}}
      onClick={()=>{
        console.log("push");
        setModalNum(0); // item_id
      }}>
        <S.itemImg src={itemImage}></S.itemImg>
        <S.itemText>셀린느 미디엄 버티컬 블랙</S.itemText>
        <S.iconContainer>
        <S.sameButton><S.sameImg src={sameImage}></S.sameImg></S.sameButton>
          <S.category>육아용품</S.category>
        </S.iconContainer>
      </S.itemButton>
      </div>
      

      <div style={{marginLeft:"1.5rem"}}>
      <S.itemButton 
      style={{flexDirection:'column'}}
      onClick={()=>{
        console.log("push");
        setModalNum(1); // item_id
      }}>
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
      {/* Map으로 뿌리기 */}
      <S.styledLi onClick={()=>{
        console.log("push");
        setModalNum(2); // item_id
      }}>
        <S.placeBox>
          <S.placeIcon src={placeImage}></S.placeIcon>
          <div>
              <S.placeName>해품은체험농장</S.placeName>
              <S.addrText>성산읍 수산리 279-3번지 동산관광농원</S.addrText>
          </div>
        </S.placeBox>
      </S.styledLi>
      
      </S.resHolder>

      {(modalNum === 0) && <ItemInfo item_id={"0"} img_url={"img_url"} name={"name"} description={"des"} category={"cate"} kakao_talk_chatting_url={"chat url"} setModalNum={setModalNum} />}
      {(modalNum === 1) && <ItemInfo item_id={"1"} img_url={"img_url"} name={"name"} description={"des"} category={"cate"} kakao_talk_chatting_url={"chat url"} setModalNum={setModalNum} />}
      {(modalNum === 2) && <ItemInfo item_id={"2"} img_url={"img_url"} name={"name"} description={"des"} category={"cate"} kakao_talk_chatting_url={"chat url"} setModalNum={setModalNum} />}

    </>
  )
};

export default Home;
