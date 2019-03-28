import React from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout";
// import Image from "../components/image"
import SEO from "../components/seo";
import "../styles/main.sass";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`salah`, `salat`, `prayer`]} />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
);

export default IndexPage;
