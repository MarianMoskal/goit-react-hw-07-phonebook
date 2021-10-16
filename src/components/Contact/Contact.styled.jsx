import styled from "@emotion/styled";

const Button = styled.input`
  font-weight: 500;
  margin-top: 10px;
  border-radius: 6px;
  border: none;
  background-color: orange;
`;

const Item = styled.span`
  display: inline-block;
  min-width: 400px;
  margin-right: 20px;
`;

const Name = styled.span`
  display: inline-block;
  min-width: 200px;
  margin-right: 20px;
`;

export { Item, Button, Name };
