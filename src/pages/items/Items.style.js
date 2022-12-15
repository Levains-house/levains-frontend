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
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

export const Subtitle = styled.div`
  font-size: 1.6rem;
`;

export const MyItemsBox = styled.div``;
export const MyItemsBoxAdd = styled.div`
  width: 29.6rem;
  height: 31.1rem;
  box-shadow: 1px 5px 5px gray;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const YourItemsBoxAdd = styled.div`
  width: 29.3rem;
  height: 19rem;
  box-shadow: 1px 5px 5px gray;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: relative;
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
  /* display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: Red; */
`;
export const YourItemsBoxInner = styled.div``;

export const MyItemsImageBox = styled.div`
  width: 25.2rem;
  height: 15.6rem;
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
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  padding: 0.5rem;
  background-color: white;
  border-radius: 0.5rem;
`;

export const MyItemsname = styled.input`
  width: 25rem;
  height: 3rem;
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

export const MyItemsDescription = styled.input`
  width: 25rem;
  height: 3rem;
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
export const MyItemsCatagoryBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 6rem;
  width: 25rem;
`;

export const MyItemsCatagory = styled.select`
  position: absolute;
  left: 0;
  width: 10rem;
  height: 4rem;
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
  left: 0;

  margin-top: 1rem;
`;
export const MyItemsButton = styled.button`
  position: absolute;

  right: 0;
  width: 10.065rem;
  height: 4rem;
  border-radius: 2rem;
  border: 1px solid #ffd058;
  color: #ffd058;
  font-size: 1.4rem;
  background-color: white;
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
