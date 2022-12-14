import styled from "styled-components";

const WrapperInner = styled.div`
  padding: 0 1.5rem;
  margin-top: 5rem;
`;
const TitleBox = styled.div``;
const Title = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  display: flex;
  align-items: center;
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
`;

export const SelectLeftBox = styled.div`
  width: 19.5rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const SelectLeft = styled.div`
  width: 15rem;
  height: 11rem;
`;
export const SelectRightBox = styled.div`
  width: 19.5rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const SelectRight = styled.div``;
const SelectIcon = styled.p``;
const SelectText = styled.p`
  color: white;
  background-color: #ffdb66;
  border-radius: 2rem;
  width: 15rem;
  height: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
