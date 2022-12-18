import React, { useEffect, useState } from "react";
import * as S from "./MyPage.style";
import axios from "axios";

const rebangStatus = {
  BEFORE: "교환 전",
  AFTER: "교환 완료",
};

const Mypage = () => {
  const [List, setList] = useState([]);
  const getMyRebang = async () => {
    const response = await axios({
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL+"/api/users/profiles",
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: localStorage.getItem("accesstoken"),
      },
    });
    setList(response.data.items);
  };
  useEffect(() => {
    getMyRebang();
  }, []);
  console.log(List);
  const handleItem = async (e) => {
    await axios({
      method: "put",
      url: process.env.REACT_APP_BACKEND_URL+"/api/items/status",
      headers: {
        authorization: localStorage.getItem("accesstoken"),
      },
      data: {
        item_id: e.target.id,
        trade_status: "AFTER",
      },
    });

    await getMyRebang();
  };
  return (
    <>
      <S.MyRebangList>
        {List.map((MyRebang) => (
          <S.MyRebangItem
            key={MyRebang.item_id}
            id={MyRebang.item_id}
            onClick={handleItem}
          >
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
