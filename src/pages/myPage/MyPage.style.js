import styled from "styled-components";
export const MyRebangList = styled.section`
  /* background-color: red; */
  padding: 2rem;
  height: 50rem;
  position: relative;
  top: 18rem;
`;

export const MyRebangItem = styled.div`
  width: 35rem;
  height: 7.8rem;
  border-radius: 2rem;
  border: 1px solid #e1e1e8;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  position: relative;
`;
export const MyRebangStatus = styled.div`
  display: flex;
  align-items: center;
`;
export const MyRebangStatusCircle = styled.div`
  width: 1.2rem;
  height: 1.2rem;

  border-radius: 50%;
  background-color: ${(props) =>
    props.status === "BEFORE" ? "#E1E1E8" : "#ffc000"};
  margin: 0 1.5rem;
`;
export const MyRebangStatusText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.status === "BEFORE" ? "#FFC000" : "white")};
  background-color: ${(props) =>
    props.status === "BEFORE" ? "#FFFFFF" : "#FFC000"};
  border: 1px solid #ffc000;
  font-weight: 500;
  font-size: 1.4rem;
  align-items: center;
  border-radius: 2rem;
  padding: 0 1.5rem;
  width: 10.065rem;
  height: 4rem;
  box-sizing: border-box;
`;
export const MyRebangItemName = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  position: absolute;
  right: 2rem;
`;
