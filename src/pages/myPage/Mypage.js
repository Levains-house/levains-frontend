import React from "react";
import * as S from "./MyPage.style";

const rebangStatus = {
  before: "교환 전",
  after: "교환 완료",
};

const DUMMYLIST = [
  {
    item_id: 0,
    name: "스웨터 상하의 세트",
    trade_status: "after",
  },
  {
    item_id: 1,
    name: "제주 귤 농장 체험",
    trade_status: "before",
  },
  {
    item_id: 2,
    name: "브라운 어그 부츠",
    trade_status: "before",
  },
];

const Mypage = () => {
  return (
    <>
      <S.MyRebangList>
        {DUMMYLIST.map((MyRebang) => (
          <S.MyRebangItem key={MyRebang.item_id} id={MyRebang.item_id}>
            <S.MyRebangStatus>
              <S.MyRebangStatusCircle status={MyRebang.trade_status} />
              <S.MyRebangStatusText status={MyRebang.trade_status}>
                {rebangStatus[MyRebang.trade_status]}
              </S.MyRebangStatusText>
            </S.MyRebangStatus>
            <S.MyRebangItemName>{MyRebang.name}</S.MyRebangItemName>
          </S.MyRebangItem>
        ))}
      </S.MyRebangList>
    </>
  );
};

export default Mypage;
