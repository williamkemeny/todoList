import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;

  label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
  }

  input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid black;
    outline: 0;
    font-size: 1.2rem;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ label {
      font-size: 1rem;
      cursor: text;
      top: 23px;
    }
  }

  input:focus {
    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(
      to right,
      rgb(158, 166, 238),
      rgb(113, 189, 233)
    );
    border-image-slice: 1;
  }

  input {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }
`;
