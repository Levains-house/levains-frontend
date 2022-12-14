import React from "react";
import { Wrapper } from "../../components/common/wrapper/Wrapper.style";
import * as S from "./Items.style";
import BigButton from "./../../components/common/button/BigButton/BigButton";

const Items = () => {
  return (
    <Wrapper>
      <S.WrapperInner>
        <S.Back>이전</S.Back>
        <S.Title>
          유나님, <br />
          만남을 위한 마지막 단계 입니다.
        </S.Title>
        <S.Subtitle>물건을 등록해주세요.</S.Subtitle>
        <S.MyItemsBox>
          <S.ItemsBoxTitle>나의 르방이</S.ItemsBoxTitle>
          <S.MyItemsBoxAdd>
            <S.MyItemsImage></S.MyItemsImage>
            <S.MyItemsname></S.MyItemsname>
            <S.MyItemsCatagory></S.MyItemsCatagory>
          </S.MyItemsBoxAdd>
        </S.MyItemsBox>
        <S.YourItemsBox>
          <S.ItemsBoxTitle>상대방에게 원하는 르방이</S.ItemsBoxTitle>
          <S.YourItemsBoxAdd>
            <S.MyItemsImage></S.MyItemsImage>
            <S.MyItemsname></S.MyItemsname>
            <S.MyItemsCatagory></S.MyItemsCatagory>
          </S.YourItemsBoxAdd>
        </S.YourItemsBox>
      </S.WrapperInner>
      <BigButton size="long">다음으로</BigButton>
    </Wrapper>
  );
};

export default Items;
