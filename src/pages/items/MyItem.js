import axios from "axios";
import React, { useState } from "react";
import * as S from "./MyItem.style";

const MYOPTIONS = [
  { id: 0, name: "카테고리", value: "default" },
  { id: 1, name: "의류", value: "CLOTH" },
  { id: 2, name: "잡화", value: "THINGS" },
  { id: 3, name: "도서", value: "BOOK" },
  { id: 4, name: "유아용품", value: "LIVE_THINGS" },
  { id: 5, name: "생활용품", value: "BABY_THINGS" },
  { id: 6, name: "체험", value: "EXPERIENCE" },
];

const MyItem = () => {
  const [myImageState, setMyImageState] = useState("");
  const [myNameState, setMyNameState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [myDescriptionState, setMyDescriptionState] = useState("");
  const [srcState, setSrcState] = useState("");
  const [imageToggle, setImageToggle] = useState(false);
  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(true);

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setSrcState(reader.result);
        resolve();
      };
    });
  };
  const handleCategory = (e) => {
    setCategoryState(e.target.value);
    setImageToggle(false);
  };
  const handleMyButton = async () => {
    // 파일 전송(내 아이템)
    const formData = new FormData();

    formData.append("image", myImageState[0]);
    formData.append("name", myNameState);
    formData.append("description", myDescriptionState);
    formData.append("category", categoryState);
    formData.append("purpose", "SHARE");
    console.log(localStorage.getItem("accesstoken"));
    const response = await axios({
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL+"/api/items/register",
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: localStorage.getItem("accesstoken"),
      },
      data: formData,
    });
    console.log(response);
    setToggle(false);
    setData({
      name: myNameState,
      description: myDescriptionState,
      category: MYOPTIONS.filter((it) => it.value === categoryState)[0].name,
    });
  };

  return (
    <S.MyItemsBox>
      {toggle ? (
        <S.MyItemsBoxAdd>
          <S.MyItemsImageBox src={srcState}>
            <S.MyItemsToggle
              onClick={() => {
                setImageToggle(!imageToggle);
              }}
            >
              . . .
            </S.MyItemsToggle>

            {imageToggle && (
              <div>
                <S.MyItemsImageInput
                  type="file"
                  onChange={(e) => {
                    setMyImageState(e.target.files);
                    const reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]);
                    return new Promise((resolve) => {
                      reader.onload = () => {
                        encodeFileToBase64(e.target.files[0]);
                        resolve();
                      };
                    });
                  }}
                  accept="img/*"
                  id="image"
                />
                <S.MyItemsImageLabel htmlFor="image">
                  이미지 넣기
                </S.MyItemsImageLabel>
              </div>
            )}
          </S.MyItemsImageBox>
          <S.MyItemsname
            onChange={(e) => {
              setMyNameState(e.target.value);
            }}
            placeholder="상품명을 입력해주세요"
          />
          <S.MyItemsDescription
            onChange={(e) => {
              setMyDescriptionState(e.target.value);
            }}
            placeholder="상세설명을 입력해주세요"
          />
          <S.MyItemsCatagoryBox>
            <S.MyItemsCatagory onChange={handleCategory}>
              {MYOPTIONS.map((option) => (
                <S.MyItemsOption
                  key={option.id}
                  value={option.value}
                  defaultValue={option.value === "default"}
                >
                  {option.name}
                </S.MyItemsOption>
              ))}
            </S.MyItemsCatagory>
            <S.MyItemsButton onClick={handleMyButton}>등록</S.MyItemsButton>
          </S.MyItemsCatagoryBox>
        </S.MyItemsBoxAdd>
      ) : (
        <S.MyItemsBoxAdd>
          {" "}
          <S.ToggleBox>
            <S.ToggleName>{data.name}</S.ToggleName>
            <S.ToggleCategory>{data.category}</S.ToggleCategory>
            <S.ToggleDescription>{data.description}</S.ToggleDescription>
          </S.ToggleBox>
        </S.MyItemsBoxAdd>
      )}
    </S.MyItemsBox>
  );
};

export default MyItem;
