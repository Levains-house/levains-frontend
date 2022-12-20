import React, { useState, useEffect, useCallback } from "react";
import * as S from "./Home.style";
import sameImage from "../../assets/images/same.png";
import axios from "axios";
import placeImage from "../../assets/images/여행객/placeicon.svg";
import ItemInfo from "./ItemInfo";
import cateMap from "./categoryMap.json";

const Home = () => {
  const [isWalk, setWalk] = useState(true);
  const [isBus, setBus] = useState(false);
  const [isCar, setCar] = useState(false);
  const [range, setRange] = useState(1.5);
  const [loadingDone, setDone] = useState(false);

  const [users, setUsers] = useState(null);

  const [modalNum, setModalNum] = useState(-1);

  const fetchUsers = useCallback(async () => {
    try {
      setUsers(null);
      //   axios.defaults.headers.get['header1'] = "";
      const response = await axios.get(
        process.env.REACT_APP_BACKEND_URL+"/api/items?range=" +
          String(range),
        {
          headers: {
            Authorization: localStorage.getItem("accesstoken"),
          },
        }
      );
      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      console.log(response);
      setDone(true);
    } catch (e) {
      console.log(e);
    }
  },
  [range]
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, isWalk, isBus, isCar]);

  if (!users) {
    console.log("error");
    return null;
  }
  return (
    <>
      <S.homeBack></S.homeBack>
      <S.walkButton
        style={isWalk ? { background: "#FFC000" } : { background: "#CDCED6" }}
        onClick={() => {
          setWalk(true);
          setBus(false);
          setCar(false);
          setRange(1.5);
        }}
      >
        뚜벅이
      </S.walkButton>
      <S.busButton
        style={isBus ? { background: "#FFC000" } : { background: "#CDCED6" }}
        onClick={() => {
          setWalk(false);
          setBus(true);
          setCar(false);
          setRange(5);
        }}
      >
        버스로
      </S.busButton>
      <S.carButton
        style={isCar ? { background: "#FFC000" } : { background: "#CDCED6" }}
        onClick={() => {
          setWalk(false);
          setBus(false);
          setCar(true);
          setRange(10);
        }}
      >
        차타고
      </S.carButton>
      <S.lebangText>내가 찾던 바로 그 상품!</S.lebangText>
      <S.itemsContainer>
        {/* Map으로 뿌리기 */}
        {loadingDone &&
          (users.recommend_and_opposite_wanted_items.map((item) => (
            <div style={{ marginLeft: "1.5rem" }}>
              <S.itemButton
                style={{ flexDirection: "column" }}
                onClick={() => {
                  console.log("push");
                  setModalNum(item.item_id); // item_id
                }}
              >
                <S.itemImg src={item.img_url}></S.itemImg>
                <S.itemText>{item.name}</S.itemText>
                <S.iconContainer>
                  <S.sameButton>
                    <S.sameImg src={sameImage}></S.sameImg>
                  </S.sameButton>
                  <S.category>{cateMap[item.category]}</S.category>
                </S.iconContainer>
              </S.itemButton>
            </div>
          )))
        }

        {/* <div style={{marginLeft:"1.5rem"}}>
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
       */}
      </S.itemsContainer>

      <S.lebangText2>여기 있어! 제주 체험</S.lebangText2>
      <S.resHolder>
        {loadingDone &&
          (users.experience_items.map((item) => (
            <S.styledLi
              onClick={() => {
                console.log("push");
                setModalNum(item.item_id); // item_id
              }}
            >
              <S.placeBox>
                <S.placeIcon src={placeImage}></S.placeIcon>
                <div>
                  <S.placeName>{item.name}</S.placeName>
                  <S.addrText>성산읍 수산리 279-3번지 동산관광농원</S.addrText>
                </div>
              </S.placeBox>
            </S.styledLi>
          )))
        }

        {/* Map으로 뿌리기 */}
      </S.resHolder>

      {loadingDone &&
        (users.category_items.map(
          (item) =>
            modalNum === item.item_id && (
              <ItemInfo
                item_id={item.item_id}
                img_url={item.img_url}
                name={item.name}
                description={item.description}
                category={item.category}
                kakao_talk_chatting_url={item.kakao_talk_chatting_url}
                want_name={item.want_name}
                want_description={item.want_description}
                want_category={item.want_category}
                setModalNum={setModalNum}
                isItem={true}
              />
            )
          )
        )
      }

      {
        (users.experience_items.map(
          (item) => 
            modalNum === item.item_id && (
              <ItemInfo
                item_id={item.item_id}
                img_url={item.img_url}
                name={item.name}
                description={item.description}
                category={item.category}
                kakao_talk_chatting_url={item.kakao_talk_chatting_url}
                want_name={"no"}
                want_description={"no"}
                want_category={"no"}
                setModalNum={setModalNum}
                isItem={false}
              />
            )
          )
        )
      }
      {/* {(modalNum === 1) && <ItemInfo item_id={"1"} img_url={"img_url"} name={"name"} description={"des"} category={"cate"} kakao_talk_chatting_url={"chat url"} setModalNum={setModalNum} />} */}
      {/* {(modalNum === 2) && <ItemInfo item_id={"2"} img_url={"img_url"} name={"name"} description={"des"} category={"cate"} kakao_talk_chatting_url={"chat url"} setModalNum={setModalNum} />} */}
    </>
  );
};

export default Home;