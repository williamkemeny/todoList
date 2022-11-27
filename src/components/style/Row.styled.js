import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  word-break: keep-all;
  justify-content: center;
  text-align: left;
`;

export const Row1 = styled(Row)`
  margin-left: 9vw;
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: center;
  align-self: auto;
  flex-wrap: wrap;
`;

export const Row3 = styled(Row2)`
  margin-top: 20px;
`;
