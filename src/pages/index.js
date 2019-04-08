import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/main.sass";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`salah`, `salaat`, `salat`, `prayer`]} />
    <div className="btnContainerVertical">
      <Link className="btnStyle" to="/localSalahtime">
        Local Salah Time
      </Link>
      <Link className="btnStyle" to="/">
        Guide to Salah
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
