import React, { FunctionComponent } from "react";
//import { Layout } from "antd";

//import FooterComponent from "../layout/components/footer";
//import SidebarComponent from "../layout/components/sidebar";
import { Container } from "./styles";

const LayoutComponent: FunctionComponent = ({ children }) => {
  //const { Header, Content } = Layout;

  return (
    <Container>
      {/* <Layout style={{ minHeight: "100vh" }}> */}
      {/* <SidebarComponent /> */}
      {/* <Layout> */}
      {/* <Header style={{ padding: 0 }} /> */}
      {/* <Content> */}
      {/* <Container>{children}</Container> */}
      {children}
      {/* </Content> */}
      {/* <FooterComponent /> */}
      {/* </Layout> */}
      {/*  </Layout>  */}
    </Container>
  );
};
export default LayoutComponent;
