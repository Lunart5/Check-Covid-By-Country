import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80%;
  max-width: 480px;
  width: 100%;
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
