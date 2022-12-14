import * as S from "./YourItem.style";

import React, { useState } from "react";
import axios from "axios";

const MYOPTIONS = [
  { id: 0, name: "카테고리", value: "default" },
  { id: 1, name: "의류", value: "CLOTH" },
  { id: 2, name: "잡화", value: "THINGS" },
  { id: 3, name: "도서", value: "BOOK" },
  { id: 4, name: "유아용품", value: "LIVE_THINGS" },
  { id: 5, name: "생활용품", value: "BABY_THINGS" },
  { id: 6, name: "체험", value: "EXPERIENCE" },
];

const YourItem = () => {
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState({});
  const [yourNameState, setYourNameState] = useState("");
  const [yourDescriptionState, setYourDescriptionState] = useState("");
  const [yourCategoryState, setYourCategoryState] = useState("");

  const handleYourButton = async () => {
    // 파일 전송(내 아이템)
    const formData = new FormData();
    console.log(yourNameState, yourDescriptionState, yourCategoryState);

    formData.append("name", yourNameState);
    formData.append("description", yourDescriptionState);
    formData.append("category", yourCategoryState);
    formData.append("purpose", "WANT");
    const response = await axios({
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL+"/api/items/",
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: localStorage.getItem("accesstoken"),
      },
      data: formData,
    });
    console.log(response);
    setToggle(false);

    setData({
      name: yourNameState,
      description: yourDescriptionState,
      category: MYOPTIONS.filter((it) => it.value === yourCategoryState)[0]
        .name,
    });
  };
  const handleYourCategory = (e) => {
    setYourCategoryState(e.target.value);
  };

  // const change = (en) => {
  //   console.log(MYOPTIONS.filter(it.value === en)[0]);
  // };
  console.log(data);
  return (
    <S.YourItemsBox>
      {toggle ? (
        <S.YourItemsBoxAdd>
          <S.YourItemsname
            onChange={(e) => {
              setYourNameState(e.target.value);
            }}
            placeholder="상품명을 입력해주세요"
          />
          <S.YourItemsDescription
            onChange={(e) => {
              setYourDescriptionState(e.target.value);
            }}
            placeholder="상세설명을 입력해주세요"
          />
          <S.YourItemsCatagoryBox>
            <S.MyItemsCatagory onChange={handleYourCategory}>
              {MYOPTIONS.map((option) => (
                <S.MyItemsOption key={option.id} value={option.value}>
                  {option.name}
                </S.MyItemsOption>
              ))}
            </S.MyItemsCatagory>
            <S.MyItemsButton onClick={handleYourButton}>등록</S.MyItemsButton>
          </S.YourItemsCatagoryBox>
        </S.YourItemsBoxAdd>
      ) : (
        <S.YourItemsBoxAdd>
          <S.ToggleBox>
            <S.ToggleName>{data.name}</S.ToggleName>
            <S.ToggleCategory>{data.category}</S.ToggleCategory>
            <S.ToggleDescription>{data.description}</S.ToggleDescription>
          </S.ToggleBox>
        </S.YourItemsBoxAdd>
      )}
    </S.YourItemsBox>
  );
};

export default YourItem;
