import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80%;
  margin: 24px;
  width: 100%;
  max-width: 480px;
  padding: 16px;
  background: #fcfdfd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
export const GridContent = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  text-align: center;
  width: 100%;
  height: auto;
`;
export const Title = styled.h2``;
export const Value = styled.h2``;

export const LoadingDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  span {
    margin-left: 10px;
  }
`;
