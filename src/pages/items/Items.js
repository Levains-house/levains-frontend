import React, { useState } from "react";
import { Wrapper } from "../../components/common/wrapper/Wrapper.style";
import * as S from "./Items.style";
import BigButton from "./../../components/common/button/BigButton/BigButton";
import Input from "../../components/common/input/Input";
import { useNavigate } from "react-router";
import axios from "axios";
import _ from "lodash";
import api from "../../api/api";

const MYOPTIONS = [
  { id: 0, name: "카테고리", value: "default" },
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
  const [whoseToggleState, setWhoseToggleState] = useState("my");
  const [yourCategoryState, setYourCategoryState] = useState("");
  const [myCnt, setMyCnt] = useState(1);
  const [yourCnt, setYourCnt] = useState(1);
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
  // "wsl"

  const navigate = useNavigate();
  const handleMyButton = async () => {
    // 파일 전송(내 아이템)
    const formData = new FormData();
    console.log(
      myImageState[0],
      categoryState,
      myDescriptionState,
      yourCategoryState
    );
    formData.append("image", myImageState[0]);
    formData.append("name", myNameState);
    formData.append("description", myDescriptionState);
    formData.append("category", categoryState);
    formData.append("purpose", "SHARE");
    console.log(localStorage.getItem("accesstoken"));
    const response = await axios({
      method: "post",
      url: "http://levains-lb-2013408822.ap-northeast-2.elb.amazonaws.com/api/items/register",
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: localStorage.getItem("accesstoken"),
      },
      data: formData,
    });
    console.log(response);
  };
  const handleYourButton = () => {
    api.post({
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
  const handleAddButton = () => {};

  return (
    <Wrapper>
      <S.WrapperInner>
        <S.Back>&#60;</S.Back>
        <S.Title>
          유나님, <br />
          만남을 위한 <S.Color>마지막 단계</S.Color> 입니다.
        </S.Title>
        <S.Subtitle>물건을 등록해주세요.</S.Subtitle>

        <S.WhoseToggleBox>
          <S.WhoseToggleButton
            onClick={() => {
              setWhoseToggleState("my");
            }}
            isOn={whoseToggleState === "my"}
          >
            나의 르방
          </S.WhoseToggleButton>
          <S.WhoseToggleButton
            onClick={() => {
              setWhoseToggleState("your");
            }}
            isOn={whoseToggleState === "your"}
          >
            상대 르방
          </S.WhoseToggleButton>
        </S.WhoseToggleBox>

        {whoseToggleState === "my" &&
          _.times(myCnt, _.constant(0)).map((it) => (
            <S.MyItemsBox>
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
                  <S.MyItemsButton onClick={handleMyButton}>
                    등록sssss
                  </S.MyItemsButton>
                </S.MyItemsCatagoryBox>
              </S.MyItemsBoxAdd>
            </S.MyItemsBox>
          ))}
        {whoseToggleState === "your" &&
          _.times(yourCnt, _.constant(0)).map((it) => (
            <S.YourItemsBox>
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
                  <S.MyItemsButton onClick={handleMyButton}>
                    등록
                  </S.MyItemsButton>
                </S.YourItemsCatagoryBox>
              </S.YourItemsBoxAdd>
            </S.YourItemsBox>
          ))}
        <S.AddButtonWrapper>
          <S.AddButton
            onClick={() => {
              if (whoseToggleState === "my") {
                setMyCnt(myCnt + 1);
              } else {
                setYourCnt(myCnt + 1);
              }
            }}
          >
            +
          </S.AddButton>
        </S.AddButtonWrapper>
      </S.WrapperInner>
      <S.BigButtonWrapper>
        <BigButton size="long" handleButton={handleYourButton}>
          다음으로
        </BigButton>
      </S.BigButtonWrapper>
    </Wrapper>
  );

  [1, 2, 3].map((it) => <div></div>);
};

export default Items;
