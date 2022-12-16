import styled from "styled-components";

export const homeBack = styled.div`
  position: absolute;
  width: 39rem;
  height: 62.5rem;
  // left: ;
  top: 17.6rem;

  /* back color */

  background: #faf9f9;
  box-shadow: 0px -0.4rem 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

export const walkButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.4rem 1.7rem;
  gap: 1rem;

  position: absolute;
  left: 2rem;
  top: 19.3rem;

  /* sub color */

  background: #ffc000;
  border-radius: 2rem;

  height: 2.7rem;
  width: 8rem;
  border-radius: 1.5rem;

  padding: 0.4rem 1.7rem 0.4rem 1.7rem;

  font-family: Noto Sans;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.9rem;
  text-align: left;
  color: #ffffff;
  border: 1px solid #faf9f9;
`;

export const busButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.4rem 1.7rem;
  gap: 1rem;

  position: absolute;
  left: 10.5rem;
  top: 19.3rem;

  /* sub color */

  background: #ffc000;

  height: 2.7rem;
  width: 8rem;
  border-radius: 1.5rem;
  padding: 0.4rem 1.7rem 0.4rem 1.7rem;

  font-family: Noto Sans;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.9rem;
  text-align: left;
  color: #ffffff;
  border: 1px solid #faf9f9;
`;

export const carButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.4rem 1.7rem;
  gap: 1rem;

  position: absolute;
  left: 19rem;
  top: 19.3rem;

  /* sub color */

  background-color: #ffc000;
  border-radius: 2rem;

  height: 2.7rem;
  width: 8rem;
  border-radius: 1.5rem;

  /* padding: 0.4rem 1.7rem 0.4rem 1.7rem; */

  font-family: Noto Sans;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.9rem;
  text-align: left;
  color: #ffffff;
  border: 1px solid #faf9f9;
`;

export const lebangText = styled.text`
  height: 4rem;
  width: 35.9rem;
  position: absolute;
  left: 2.1rem;
  top: 22.7rem;
  //styleName: Mediam/body1 M 16px;
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.3rem;
  text-align: left;

  /* Mediam/body1 M 16px */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  display: flex;
  align-items: center;

  color: #000000;
`;
export const lebangText2 = styled.text`
  height: 4rem;
  width: 35.9rem;
  position: absolute;
  left: 2.1rem;
  top: 54rem;
  //styleName: Mediam/body1 M 16px;
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.3rem;
  text-align: left;

  /* Mediam/body1 M 16px */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  display: flex;
  align-items: center;

  color: #000000;
`;

export const itemButton = styled.button`
  position: relative;
  height: 24.4rem;
  width: 16.7rem;
  // left: 2.2rem;
  // top: 26.7rem;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border: none;
  // display:flex;
  // overflow:hidden;
  padding: 0;
  // margin-left:1.5rem;
  // margin:rem;
  // display:block;
`;

export const itemImg = styled.img`
  height: 17.9rem;
  width: 16.7rem;
  border-radius: 20px 20px 0px 0px;
  object-fit:cover;
`;

export const itemText = styled.text`
  //styleName: regular/text 12px;
  font-family: Noto Sans KR;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.7rem;
  letter-spacing: 0em;
  text-align: center;
  color: #3e404c;
  height: 1.5rem;
  width: 16.7rem;
  left: 1.9rem;
  top: 18.6rem;
  margin-top: 0.7rem;
`;

export const iconContainer = styled.div`
  display: flex;
  width: 16.7rem;
  /border: 1px solid #000000;
  margin-top: 0.8rem;
  height: 2.3rem;
  justify-content: space-between;
`;

export const category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.2rem 1.7rem;
  gap: 1rem;

  /* sub color */

  background: #78a484;
  border-radius: 1rem;

  //styleName: regular/text 12px;
  font-family: Noto Sans KR;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.7rem;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;

  border: 1px solid transparent;
  margin-right: 1.25rem;
`;

export const sameButton = styled.button`
  margin-left: 3.3rem;
  width: 1.8rem;
  height: 1.8rem;

  background: white;
  border: 5px;
  margin-top: 0.25rem;
`;
export const sameImg = styled.img`
  height: 1.8rem;
  width: 1.8rem;
`;

export const itemsContainer = styled.div`
  display: flex;
  width: 37rem;
  overflow-x: scroll;
  position: absolute;
  top: 26.7rem;
  // left:1.2rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
`;

export const placeBox = styled.div`
  background: #ffffff;
  /* gray scale/gray1 */

  border: 0.1rem solid #e1e1e8;
  border-radius: 1rem;
  width: 35rem;
  height: 6.7rem;
  margin-left: 2rem;
  margin-bottom: 0.8rem;
  display: flex;
  overflow: auto;
`;

export const placeName = styled.text`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.3rem;
  display: flex;
  align-items: center;
  margin-left: 1.6rem;
  margin-top: 1.3rem;
`;

export const addrText = styled.text`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  width: 25rem;

  /* gray scale/gray2 */

  color: #cdced6;
  margin-left: 1.6rem;
  margin-top: 0.1rem;
`;

export const styledLi = styled.button`
  border: 1px solid transparent;
  background: transparent;
`;

export const placeIcon = styled.img`
  width: 1.458rem;
  height: 2.083rem;
  margin-left: 1.936rem;
  margin-top: 2.3rem;
`;

export const resHolder = styled.div`
  position: absolute;
  top: 58.4rem;
  width: 39rem;
  height: 20.1rem;
  overflow-y: scroll;
`;