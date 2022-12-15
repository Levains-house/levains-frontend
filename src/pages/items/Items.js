import React, { useState } from "react";
import { Wrapper } from "../../components/common/wrapper/Wrapper.style";
import * as S from "./Items.style";
import BigButton from "./../../components/common/button/BigButton/BigButton";
import Input from "../../components/common/input/Input";
import { useNavigate } from "react-router";
import axios from "axios";

const MYOPTIONS = [
  { id: 1, name: "의류", value: "CLOTH" },
  { id: 2, name: "잡화", value: "THINGS" },
  { id: 3, name: "도서", value: "BOOK" },
  { id: 4, name: "유아용품", value: "LIVE_THINGS" },
  { id: 5, name: "생활용품", value: "BABY_THINGS" },
  { id: 6, name: "체험", value: "EXPERIENCE" },
];

const Items = () => {
  const [myImageState, setMyImageState] = useState("");
  const [myNameState, setMyNameState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [myDescriptionState, setMyDescriptionState] = useState("");
  const [yourNameState, setYourNameState] = useState("");
  const [yourDescriptionState, setYourDescriptionState] = useState("");
  const [imageToggle, setImageToggle] = useState(false);
  const [srcState, setSrcState] = useState("");
  const [yourCategoryState, setYourCategoryState] = useState("");
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
  const navigate = useNavigate();
  console.log(srcState);
  console.log(myImageState, myNameState);
  const handleMyButton = () => {
    // 파일 전송(내 아이템)
    const formData = new FormData();
    formData.append("image", myImageState[0]);
    formData.append("name", myNameState);
    formData.append("category", categoryState);
    formData.append("description", myDescriptionState);
    formData.append("item_type", "MINE");
    console.log(formData);
    axios({
      method: "post",
      url: "/api/items/register",
      header: {
        "Context-Type": "multipart/form-data",
      },
      data: {
        formData,
      },
    });
  };
  const handleYourButton = () => {
    axios({
      method: "post",
      url: "/api/items/register",
      data: {
        username: myImageState,
        name: yourNameState,
        descriptoin: yourDescriptionState,
        // category: categoryState,
        item_type: "OPPONENT",
      },
    });
  };
  const handleCategory = (e) => {
    setCategoryState(e.target.value);
  };
  const handleYourCategory = (e) => {
    setYourCategoryState(e.target.value);
  };

  console.log(myImageState);
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
                  <S.MyItemsOption key={option.id} value={option.value}>
                    {option.name}
                  </S.MyItemsOption>
                ))}
              </S.MyItemsCatagory>
              <S.MyItemsButton onClick={handleMyButton}>등록</S.MyItemsButton>
            </S.MyItemsCatagoryBox>
          </S.MyItemsBoxAdd>
        </S.MyItemsBox>
        <S.YourItemsBox>
          <S.ItemsBoxTitle>상대방에게 원하는 르방이</S.ItemsBoxTitle>
          <S.YourItemsBoxAdd>
            <S.MyItemsname
              onChange={(e) => {
                setYourNameState(e.target.value);
              }}
              placeholder="상품명을 입력해주세요"
            />
            <S.MyItemsDescription
              onChange={(e) => {
                setYourDescriptionState(e.target.value);
              }}
              placeholder="상세설명을 입력해주세요"
            />
            <S.MyItemsCatagoryBox>
              <S.MyItemsCatagory onChange={handleYourCategory}>
                {MYOPTIONS.map((option) => (
                  <S.MyItemsOption key={option.id} value={option.value}>
                    {option.name}
                  </S.MyItemsOption>
                ))}
              </S.MyItemsCatagory>
              <S.MyItemsButton onClick={handleMyButton}>등록</S.MyItemsButton>
            </S.MyItemsCatagoryBox>
          </S.YourItemsBoxAdd>
        </S.YourItemsBox>
      </S.WrapperInner>
      <S.BigButtonWrapper>
        <BigButton size="long" handleButton={handleYourButton}>
          다음으로
        </BigButton>
      </S.BigButtonWrapper>
    </Wrapper>
  );
};

export default Items;
