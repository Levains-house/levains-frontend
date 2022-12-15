import styled from "styled-components";

const WrapperInner = styled.div`
  padding: 0 1.5rem;
  margin-top: 5rem;
`;
const TitleBox = styled.div``;
const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Color = styled.span`
  color: #86c3c7;
`;
const SubTitle = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  display: flex;
  align-items: center;

  color: #3e404c;
`;
const SelectBox = styled.div`
  display: flex;
  margin-top: 40rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  /* color: #ffffff; */
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 20rem;
`;
export const msg = styled.p`
  line-height: 0rem;
`;
export const SelectLeftBoxOuter = styled.div`
  position: relative;
`;
export const SelectRightBoxOuter = styled.div`
  position: relative;
`;
export const SelectLeftBox = styled.img`
  width: 15rem;
  height: 21.1rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const SelectLeft = styled.div`
  width: 15rem;
  height: 11rem;
`;
export const SelectRightBox = styled.img`
  width: 15rem;
  height: 21.1rem;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 1rem;
  left: 0;
  right: 0;
  margin: auto;
`;
const SelectRight = styled.div``;
const SelectIcon = styled.img``;
const SelectText = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  margin: auto;
`;

export {
  WrapperInner,
  TitleBox,
  Title,
  SubTitle,
  SelectBox,
  SelectLeft,
  SelectRight,
  SelectIcon,
  SelectText,
};
