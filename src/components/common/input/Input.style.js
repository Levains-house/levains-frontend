import styled from "styled-components";
import { BACKGROUND_PALETTE } from "./../../../constants/palette";

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
