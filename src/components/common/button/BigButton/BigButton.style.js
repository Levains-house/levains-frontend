import styled from "styled-components";
import {
  BACKGROUND_PALETTE,
  COLOR_PALETTE,
} from "./../../../../constants/palette";

const BigButton = styled.button`
  width: ${(props) => props.size === "small" && 10.065}rem;
  width: ${(props) => props.size === "big" && 15}rem;
  width: ${(props) => props.size === "long" && 35}rem;

  height: ${(props) => props.size === "small" && 4}rem;
  height: ${(props) => props.size === "big" && 11}rem;
  height: ${(props) => props.size === "long" && 5}rem;

  font-size: ${(props) => props.size === "small" && 1.4}rem;
  font-size: ${(props) => props.size === "big" && 2}rem;
  font-size: ${(props) => props.size === "long" && 2}rem;

  weight: 50rem;

  background-color: ${BACKGROUND_PALETTE.gray};
  color: ${COLOR_PALETTE.white};
  border-radius: 2rem;
  border: none;

  cursor: pointer;
`;

export { BigButton };
