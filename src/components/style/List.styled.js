import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const List = styled.li`
  animation: ${fade} 3s;
  margin: 12px 0px 12px 0px;
  overflow-wrap: break-word;
`;
