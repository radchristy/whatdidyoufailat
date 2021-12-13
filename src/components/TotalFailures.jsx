import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CounterContainer = styled.div`
  text-align: center;

  p {
    margin: 0;
  }
`;

const BigCount = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const TotalFailures = () => {
  const failures = useSelector((state) => state.failures);
  const failureCount = failures.length;

  return (
    <CounterContainer className="counter">
      <p>Congrats! You've failed</p>
      <BigCount>{failureCount}</BigCount>
      <p>times</p>
    </CounterContainer>
  );
};

export default TotalFailures;
