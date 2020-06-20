import React from "react";
import styled from "styled-components";

// interface로 작성을 해도 가능하다.

const Container = styled.span<{ isBlue: boolean }>`
  background-color: ${(props) =>
    props.isBlue ? props.theme.colors.main : "white"};
  font-size: 20px;
`;

interface INumberProps {
  count: any;
}

const Number: React.FunctionComponent<INumberProps> = ({ count }) => (
  <Container isBlue={count > 10}>{count}</Container>
);

export default Number;
