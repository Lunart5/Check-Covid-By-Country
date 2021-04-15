import React, { FunctionComponent, useEffect, useState } from "react";
import LayoutComponent from "../layout";
import { Container, GridContent, Title, Value, LoadingDiv } from "./styles";
import Head from "next/head";
import { Select, Modal, Card, Button, Spin } from "antd";
import covidService from "../api/services/covidService";
import countryService from "../api/services/countriesService";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { LoadingOutlined } from "@ant-design/icons";
const HomeView: FunctionComponent = () => {
  type covidDataType = {
    capital_city: string;
    confirmed: number;
    country: string;
    recovered: number;
    deaths: number;
    updated: string;
  };
  type vaccinesType = {
    administered: number;
    people_partially_vaccinated: number;
    people_vaccinated: number;
  };
  const selectOptions = {
    maxWidth: "90%",
    width: "100%",
    borderRadius: "8px",
    background: "#FCFDFD",
    boxShadow: "0px 0px 8px #D2D9D6",
    //si hay error, sombra roja
  };

  const [countries, setCountries] = useState([]);
  const [isLoadingCovid, setIsLoadingCovid] = useState(false);

  const [covidData, setCovidData] = useState<covidDataType>();
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [Img, setImg] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [vaccines, setCaccines] = useState<vaccinesType>();

  const selectChange = async (name: string, options: any) => {
    setCovidData(undefined);
    setIsLoadingCovid(true);
    setIsLoadingData(true);
    try {
      const res = await covidService.get(name);
      setImg(options.children[0].props.src);
      setCovidData(res.data.All);
      const resVa = await covidService.getVac(options.key);
      setCaccines(resVa.data.All);
      setIsLoadingData(false);
      setIsLoadingCovid(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await countryService.get();
        setCountries(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCountries().catch(null);
  }, []);
  const handleModalShow = () => {
    setIsModalVisible(!isModalVisible);
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
          placeholder="Pick or Search a Country"
          optionFilterProp="children"
          onChange={selectChange}
          bordered={false}
          style={selectOptions}
          loading={isLoadingCovid}
          disabled={isLoadingCovid || isLoadingData}
        >
          {countries?.map(({ name, flag, alpha2Code, nativeName }) => (
            <Select.Option value={alpha2Code} key={nativeName}>
              <img src={flag} style={{ width: "20px", marginRight: "8px" }} />
              {name}
            </Select.Option>
          ))}
        </Select>
        {isLoadingData ? (
          <LoadingDiv>
            Loading Data...{" "}
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            />
          </LoadingDiv>
        ) : (
          <>
            {covidData && (
              <Card
                style={{
                  borderRadius: "8px",
                  marginTop: "16px",
                  maxWidth: "90%",
                }}
                title={
                  <h2 style={{ textAlign: "center" }}>{covidData.country}</h2>
                }
                cover={
                  <img
                    src={Img}
                    style={{ width: "25%", margin: "10px auto" }}
                  />
                }
              >
                <GridContent>
                  <Title className="title">Cases Confirmed</Title>
                  <Value className="value">
                    {covidData.confirmed.toLocaleString()}
                  </Value>
                  <Title className="title">Cases Recovered</Title>
                  <Value className="value">
                    {covidData.recovered.toLocaleString()}
                  </Value>
                  <Title className="title">Death</Title>
                  <Value className="value">
                    {covidData.deaths.toLocaleString()}
                  </Value>
                </GridContent>
                <div style={{ textAlign: "center" }}>
                  <Button
                    size="large"
                    style={{ borderRadius: "8px" }}
                    icon={<InfoCircleTwoTone twoToneColor="#c4c11a" />}
                    onClick={handleModalShow}
                  >
                    See More
                  </Button>
                </div>
              </Card>
            )}
            <Modal
              title="Vaccines Data"
              visible={isModalVisible}
              onCancel={handleModalShow}
              width={"350px"}
              footer={[
                <Button
                  style={{ borderRadius: "8px" }}
                  onClick={handleModalShow}
                >
                  Close
                </Button>,
              ]}
            >
              {vaccines && (
                <GridContent>
                  <Title className="title">Vaccines Administred</Title>
                  <Value className="value">
                    {vaccines.administered.toLocaleString()}
                  </Value>
                  <Title className="title">Vaccines Partially Applied</Title>
                  <Value className="value">
                    {vaccines.people_partially_vaccinated.toLocaleString()}
                  </Value>
                  <Title className="title">People Vaccinated</Title>
                  <Value className="value">
                    {vaccines.people_vaccinated.toLocaleString()}
                  </Value>
                </GridContent>
              )}
            </Modal>
          </>
        )}
      </Container>
    </LayoutComponent>
  );
};
export default HomeView;
