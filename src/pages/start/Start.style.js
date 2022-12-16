import styled from "styled-components";
import { BACKGROUND_PALETTE } from "./../../constants/palette";

export const WrapperInner = styled.div`
  height: 90%;
  background-color: Red;
`;

const InputBox = styled.div`
  position: absolute;
  top: 39.7rem;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  width: 35rem;
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

const MainImage = styled.img`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 18rem;
  width: 16.3rem;
`;

const ButtonBox = styled.div`
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0rem;
  /* bottom: 5.2rem; */
`;

export const MainTitle = styled.div`
  position: absolute;
  top: 36rem;
  left: 0;
  right: 0;
  margin: auto;
  color: #ffc000;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
`;

export { InputBox, Input, MainImage, ButtonBox };
