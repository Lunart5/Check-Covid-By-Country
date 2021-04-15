import { Layout } from "antd";
import React, { FunctionComponent } from "react";

const FooterComponent: FunctionComponent = () => {
  const { Footer } = Layout;

  return (
    <Footer style={{ textAlign: "center" }}>
      Lunart5 © {new Date().getFullYear()}
    </Footer>
  );
};
export default FooterComponent;
