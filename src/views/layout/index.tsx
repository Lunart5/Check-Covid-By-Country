import React, { FunctionComponent } from "react";
import { Container } from "./styles";

const LayoutComponent: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};
export default LayoutComponent;
