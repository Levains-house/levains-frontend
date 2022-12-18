import styled from "styled-components";

const WrapperInner = styled.div`
  padding: 0 1.5rem;
  margin-top: 8rem;
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
  line-height: 0;
`;
const SelectBox = styled.div`
  position:absolute;
  display: flex;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  /* color: #ffffff; */
  justify-content: center;
  top: 37rem;
  left: 5.5rem;
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

export const firstLine = styled.a`
position: absolute;
height: 2.9rem;
width: 36.5rem;
left: 1.8rem;
top: 10rem;
border-radius: 0px;

font-family: Noto Sans KR;
font-size: 2rem;
font-weight: 500;
line-height: 2.9rem;
letter-spacing: 0em;
text-align: left;
`
export const secondLine = styled.a`
position: absolute;
height: 2.9rem;
width: 36.5rem;
left: 1.8rem;
top: 12.9rem;
border-radius: 0px;

font-family: Noto Sans KR;
font-size: 2rem;
font-weight: 500;
line-height: 2.9rem;
letter-spacing: 0em;
text-align: left;
`

export const thirdLine = styled.a`
font-family: Inter;
font-size: 1.6rem;
font-weight: 500;
line-height: 1.9rem;
letter-spacing: 0em;
text-align: left;

position:absolute;
height: 2.5rem;
width: 25rem;
left: 2rem;
top: 16.4rem;
`

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
