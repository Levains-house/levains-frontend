import React from "react";
import * as S from './ItemInfo.style'
import cateMap from './categoryMap.json'
import itemSameImg from '../../assets/images/itemInfoSame.png'

const ItemInfo = (props) =>{
    // console.log(props.item_id)
    // console.log(props.img_url);
    // console.log(props.name);
    // console.log(props.description);
    // console.log(props.category);
    // console.log(props.kakao_talk_chatting_url);
    
    return(
        <>
        <S.grayWindow></S.grayWindow>
        <S.whiteBack></S.whiteBack>
        <S.exitButton onClick={()=>props.setModalNum(-1)}>X</S.exitButton>
        <S.titleText>주멍 상세설명</S.titleText>
        <S.itemContainer></S.itemContainer>
        <S.itemimg src={props.img_url}></S.itemimg>
        <S.dot1></S.dot1>
        <S.text1>내가 원하는 상품</S.text1>
        <S.categoryBox>{cateMap[props.category]}</S.categoryBox>
        <S.line1></S.line1>
        <S.nameText>{props.name}</S.nameText>
        <S.descriptionText>{props.description}</S.descriptionText>
        <S.wantBox></S.wantBox>
        <S.dot2></S.dot2>
        <S.text2>상대방이 원하는 상품</S.text2>
        <S.categoryBox2>{cateMap[props.want_category]}</S.categoryBox2>
        <S.line2></S.line2>
        <S.text3>{props.want_name}</S.text3>
        <S.text4>{props.want_description}</S.text4>
        <S.zzim><S.zzimText>찜하기</S.zzimText></S.zzim>
        <a href={props.kakao_talk_chatting_url}><S.chatButton>채팅하기</S.chatButton></a>
        <S.sameImg src={itemSameImg}></S.sameImg>
        </>
    );
}

export default ItemInfo;