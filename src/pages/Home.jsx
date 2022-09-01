import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Form />
        <List />
      </Layout>
      </>
  );
};

export default Home;

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: center;
  margin: auto 200px;
`;
