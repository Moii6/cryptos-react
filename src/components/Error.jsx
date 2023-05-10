import styled from "@emotion/styled";
import React from "react";

const Alert = styled.div`
  background-color: #b7322c;
  color: #ffffff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`;

const Error = ({ children }) => {
  return <Alert>{children}</Alert>;
};

export default Error;
