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
  margin: 0px;
  overflow-wrap: break-word;

  &:hover {
    background-color: rgb(113, 189, 233, 0.15);
    border-radius: 6px;
  }
`;
