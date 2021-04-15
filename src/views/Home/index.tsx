import React, { FunctionComponent } from "react";
import LayoutComponent from "../layout";
import { Container } from "./styles";
import Head from "next/head";
import { Select } from "antd";

const HomeView: FunctionComponent = () => {
  const selectOptions = {
    maxWidth: "90%",
    width: "100%",
    borderRadius: "8px",
    background: "#FCFDFD",
    boxShadow: "0px 0px 8px #D2D9D6",
    //si hay error, sombra roja
  };
  const selectChange = (name: string) => {
    console.log(`${name}`);
  };
  return (
    <LayoutComponent>
      <Head>
        <title>Covid App 1.0</title>
      </Head>
      <Container>
        <h1>Select Your Country</h1>
        <Select
          showSearch
          placeholder="Pick or search a Country"
          optionFilterProp="children"
          onChange={selectChange}
          bordered={false}
          style={selectOptions}
        >
          <Select.Option value="Jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="tom">Tom</Select.Option>
        </Select>
      </Container>
    </LayoutComponent>
  );
};
export default HomeView;
