import styled from "styled-components";

export const Button1 = styled.button`
  margin-right: 3px;
  background-image: linear-gradient(
    rgba(167, 176, 255, 0.644),
    rgba(124, 207, 255, 0.589)
  );
  border-color: #adb1b8 #a2a6ac #8d9096b9;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.6) 0 1px 0 inset;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember", Arial, sans-serif;
  font-size: 14px;
  height: 29px;
  font-size: 13px;
  outline: 0;
  overflow: hidden;
  padding: 0 11px;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  margin-top: 10px;

  &:active {
    border-bottom-color: #a2a6ac;
  }

  &:active:hover {
    border-bottom-color: #a2a6ac;
  }

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset,
      rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;
    transform: scale(1.05);
  }
`;
