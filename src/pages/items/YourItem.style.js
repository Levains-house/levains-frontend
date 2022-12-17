import styled from "styled-components";
import { BACKGROUND_PALETTE } from "./../../constants/palette";

export const WrapperInner = styled.div`
  padding: 0 1.5rem;
  margin-top: 3rem;
`;

export const Back = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

export const Color = styled.span`
  color: #86c3c7;
`;

export const ToggleBox = styled.div`
  width: 33rem;
  height: 11.6rem;
  border: 1px solid #a9abb8;
  border-radius: 2rem;
  position: relative;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const ToggleName = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 2rem;
  color: #3e404c;
  font-weight: 700;
`;
export const ToggleCategory = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  /* color: #ffffff; */
  background-color: #78a484;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  color: white;
`;
export const ToggleDescription = styled.div`
  position: absolute;
  left: 1.5rem;
  margin: auto;
  bottom: 4rem;
  color: #a9abb8;
  padding-top: 1rem;
  box-sizing: border-box;
  /* background-color: red; */
  width: 90%;
  border-top: 1px solid #a9abb8;
`;

export const WhoseToggleBox = styled.div`
  width: 26rem;
  border: 1px solid #e1e1e8;
  display: flex;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 2rem;
  margin: 1.6rem auto 1rem auto;
  padding: 0.2rem;
`;

export const WhoseToggleButton = styled.div`
  width: 13rem;
  height: 4.7rem;
  background-color: ${(props) => (props.isOn ? "#ffd058" : "white")};

  color: ${(props) => (props.isOn ? "white" : "#A9ABB8")};
  border-radius: 2rem;
  font-size: 1.6rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 0.2rem;
`;

export const MyItemsBox = styled.div`
  margin-top: 1rem;
`;
export const MyItemsBoxAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-top: 1rem;
`;

export const ItemsBoxTitle = styled.p`
  font-size: 1.8rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

export const YourItemsBox = styled.div`
  margin-top: 1rem;
  margin-bottom: 8rem;
`;

export const YourItemsBoxAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: relative;
  width: 35rem;
  /* height: 22.6rem; */
  border-radius: 2rem;
  padding: 2rem;
  box-sizing: border-box;
`;
export const YourItemsBoxInner = styled.div``;

export const MyItemsImageBox = styled.div`
  width: 33rem;
  height: 25.9rem;
  display: block;
  border-radius: 2rem;
  background-color: #d9d9d9;
  position: relative;
  background-image: url(${(props) => props.src});
`;

export const MyItemsToggle = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 2.2rem;
  height: 2.2rem;
  background: #4f5462;
  border-radius: 50%;
  color: white;
  text-align: center;
  cursor: pointer;
`;

export const MyItemsImageInput = styled.input`
  position: absolute;
  display: none;
`;
export const MyItemsImageLabel = styled.label`
  position: absolute;
  bottom: 3.2rem;
  right: 1rem;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.7rem;
  display: flex;
  align-items: center;
  border: 0.1rem solid gray;
  padding: 0.5rem;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  padding: 0.2rem;
`;

export const MyItemsname = styled.input`
  width: 33rem;
  height: 3rem;
  /* color: ${BACKGROUND_PALETTE.gray2}; */
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  border: ${BACKGROUND_PALETTE.gray2} 1px solid;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;
export const YourItemsname = styled.input`
  width: 31.2rem;
  height: 4.5rem;
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  border: ${BACKGROUND_PALETTE.gray2} 1px solid;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  display: flex;
  align-items: center;
`;
export const YourItemsDescription = styled.input`
  width: 31.2rem;
  height: 3rem;
  /* color: ${BACKGROUND_PALETTE.gray2}; */
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  border: ${BACKGROUND_PALETTE.gray2} 1px solid;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;

export const MyItemsDescription = styled.input`
  width: 33rem;
  height: 4.5rem;
  /* color: ${BACKGROUND_PALETTE.gray2}; */
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  border: ${BACKGROUND_PALETTE.gray2} 1px solid;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;
export const MyItemsCatagoryBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 6rem;
  width: 33rem;
`;

export const YourItemsCatagoryBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 6rem;
  width: 31.2rem;
`;
export const AddButtonWrapper = styled.div`
  /* background-color: red; */
  position: relative;
  align-items: center;
  height: 3rem;
  margin-bottom: 6rem;
`;
export const AddButton = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  border: none;
  padding: 1rem;
  font-size: 2rem;
  width: 1rem;
  height: 1rem;
  justify-content: center;
  display: flex;
  align-items: center;
  border: 1px #cdced6 solid;
  color: #cdced6;
  border-radius: 50%;
`;
export const MyItemsCatagory = styled.select`
  position: absolute;
  left: 0;

  height: 4.5rem;
  /* color: ${BACKGROUND_PALETTE.gray2}; */
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  border: ${BACKGROUND_PALETTE.gray2} 1px solid;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  display: flex;
  align-items: center;
  left: 0;
  width: 12.6rem;
  margin-top: 1rem;

  padding: 0 1rem;
  width: 12rem;
`;
export const MyItemsButton = styled.button`
  position: absolute;

  right: 0;

  height: 4.5rem;
  border-radius: 2rem;
  border: 1px solid #ffd058;
  /* color: #ffd058; */
  font-size: 1.4rem;
  background-color: white;
  cursor: pointer;
  display: block;
  border-radius: 1.5rem;
  width: 12rem;
`;
export const MyItemsOption = styled.option``;

export const Input = styled.input`
  width: 25rem;
  height: 4.5rem;
  color: ${BACKGROUND_PALETTE.gray2};
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  border: ${BACKGROUND_PALETTE.gray2} 1px solid;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;

export const BigButtonWrapper = styled.div`
  padding: auto;
  text-align: center;
  margin-bottom: 3rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 1rem;
`;