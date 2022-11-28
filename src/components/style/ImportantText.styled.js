import styled from "styled-components";
export const ImportantText = styled.p`
  margin: 35px 0px 20px 0px;
  font-size: 2em;
  font-weight: bold;
`;

export const ImportantText1 = styled(ImportantText)`
  font-size: 25px;
  margin: 0px;
`;

export const ImportantText2 = styled(ImportantText1)`
  font-size: 8px;
  text-align: right;
`;
