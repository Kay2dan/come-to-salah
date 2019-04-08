import React from "react";
import { Link } from "gatsby";
import { Button, Container } from "bloomer";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/main.sass";
import "../styles/home.sass";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`salah`, `salaat`, `salat`, `prayer`]} />
    <Container className="has-text-centered">
      {/* svg title from Nida */}
    </Container>
    <Container className="btnContainer has-text-centered">
      <Button>
        <Link className="" to="/localSalahtime">
          Local Salah Time
        </Link>
      </Button>
    </Container>
    <Container className="btnContainer has-text-centered">
      <Button>
        <Link className="" to="/">
          Guide to Salah
        </Link>
      </Button>
    </Container>
  </Layout>
);

export default IndexPage;
