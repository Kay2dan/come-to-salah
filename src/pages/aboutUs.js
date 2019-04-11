import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Columns, Column, Container } from "bloomer/lib/grid/Columns";

const AboutUs = () => (
  <Layout>
    <SEO title="aboutUs" keywords={[`salah`, `salaat`, `salat`, `prayer`]} />
    <Container>
      <Columns>
        <Column isSize="1/2" />
      </Columns>
    </Container>
  </Layout>
);

export default AboutUs;
