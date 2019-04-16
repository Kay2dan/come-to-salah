import React from "react";
import { Link } from "gatsby";
import { Button, Container } from "bloomer";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/main.sass";
import "../styles/home.sass";

const IndexPage = () => (
  <div className="pageHome">
    <Layout>
      <SEO title="Home" keywords={[`salah`, `salaat`, `salat`, `prayer`]} />
      <Container className="has-text-centered">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1"
          viewBox="0 0 118 40"
          height="152"
          width="448"
        >
          <g>
            <g transform="matrix(.26458 0 0 .26458 -73 -112)">
              <g>
                <path
                  d="M283 459c-6-4-7-10-7-15 0-4 1-10 6-15 4-3 9-5 17-5l7 1h5l1 1v8l-1 2v-1l-2-5c-2-2-6-3-11-3-4 0-7 1-10 3-4 3-5 8-5 13 0 13 10 19 17 19 4 0 7-1 9-3l2-4 1-1v1l-1 7-1 2-10 1c-7 0-13-2-18-6z"
                  fill="#0d324d"
                />
                <path
                  d="M319 447c0-7 5-17 19-17 11 0 18 6 18 16s-7 18-19 18c-13 1-19-9-19-17zm31 1c0-10-6-16-14-16-5 0-11 3-11 14 0 9 5 16 14 16 3 0 11-1 11-14z"
                  fill="#0d324d"
                />
                <path
                  d="M369 431l1-1 1 1 12 25 13-25 1-1 1 1 4 27c0 3 1 4 2 5h4l-2 1a379 379 0 0 1-10-1v-2l-2-19-10 19-2 3-2-2-5-10-5-10-2 17v2l1 2h3l-2 1h-9l-1-1h2c2 0 2-2 2-4z"
                  fill="#0d324d"
                />
                <path
                  d="M416 443v-9c0-1 0-2-2-2l-2-1h20l2-1 1 1-1 2v3l-1 1v-1-1c-1-1-1-2-3-2a164 164 0 0 0-8 0v11l1 1h8l2-1v-1l1 1-1 3v4h-1v-2l-2-2a155 155 0 0 0-8 1v10c0 3 2 3 6 3h5l2-4 1 1-1 5-2 1h-9l-5-1-3 1h-3l-1-1h1l1-1 2-2v-17z"
                  fill="#0d324d"
                />
                <path
                  d="M470 433h-6c-3 0-4 1-5 2l-1 1v1l-1-1 1-5 1-1 2 1h23l3-1h1l1 1v5l-1 1v-1c-1-1-2-3-6-3h-6v18l1 9 1 3h4l-1 1h-14l-1-1h3l1-3v-27z"
                  fill="#0d324d"
                />
                <path
                  d="M493 447c0-7 5-17 19-17 11 0 18 6 18 16s-7 18-19 18c-13 1-18-9-18-17zm31 1c0-10-6-16-13-16-6 0-12 3-12 14 0 9 6 16 14 16 3 0 11-1 11-14z"
                  fill="#0d324d"
                />
                <path
                  d="M557 463l-1-1v-7l1-2v1l1 3c1 4 4 5 7 5 5 0 7-3 7-6 0-2-1-5-5-8l-3-2c-5-4-7-8-7-12 0-6 5-10 12-10l7 1v8l-1-1-1-3c-1-1-3-3-6-3-4 0-6 3-6 6 0 2 1 4 5 7l2 1c6 5 8 9 8 14 0 3-1 6-5 9l-8 2-7-2z"
                  fill="#0d324d"
                />
                <path
                  d="M592 453h-1l-2 6-1 3 2 1h1v1h-11v-1h1l4-4 12-28 1-2 2 2 11 27 4 5h2l-2 1h-8l-2-1h1v-1l-3-9h-11zm10-3l-4-11-1-1v1l-4 11z"
                  fill="#0d324d"
                />
                <path
                  d="M630 451l1 9 6 1 5-1 1-2 1-1v6l-3 1h-15-6v-1h2l1-2 1-10v-8l-1-9c0-1 0-2-2-2l-1-1h-1 14l-2 1-1 2v17z"
                  fill="#0d324d"
                />
                <path
                  d="M657 453h-1l-2 6-1 3 2 1h1v1h-11v-1h1l4-4 12-28 1-2 2 2 11 27 4 5h2l-2 1h-8l-2-1h1v-1l-3-9h-11zm10-3l-5-11v-1 1l-4 11c-1 0 0 0 0 0z"
                  fill="#0d324d"
                />
                <path
                  d="M712 445h1v-1-10l-2-2-2-1h-1 14l-1 1c-1 0-2 0-2 2v27l2 2h2l1 1h-15v-1h2l2-2v-13h-18v12c0 2 1 3 2 3h2l1 1h-15l1-1h1l2-2v-18-9l-2-2-2-1h-1 14l-1 1c-2 0-2 0-2 2v11z"
                  fill="#0d324d"
                />
              </g>
              <g>
                <g>
                  <path
                    d="M373 536l-1 1-2 1-1-1-1-1 1-1 1-1 2 1v1zm-3 20v-4l1-5a12 12 0 0 1 6-6l4-2v4l-5 3c-2 1-2 3-2 6h9v-14l-1-1v-1l-1-1-1-1v-1h1l2-1 1-1 1-1 1-1h1v27zm8-20l-1 1-2 1-1-1-1-1 1-1 1-1 2 1v1zm10 2l2-1 3-2v1l-1 3-4 3z"
                    fill="#0d324d"
                  />
                  <path d="M414 503l-8 3h-2l8-3h1z" fill="#0d324d" />
                  <path
                    d="M393 547v-17-2l-1-1-1-1h-1l1-1 1-1h1l1-1 1-2h1v-1h1v29l2 2-2 1-2 1-2-3v-3zm14 0v-27l1 1h1v1l1 1 1 1h2v1l1 1h-1l-1 1-1 1v19l1 3 1 1 1 1h6l1 2-1 1-1 1h-4l-3-1-3-2-3 2-4 1h-2l-2 1-1 2v3l2 1 1 1 2 1 2-1 1-1 2-1v-2-2l-2-2h2l2-1 2 2v3l-1 3-2 3-3 2-3 1-3-1-3-2-3-3-1-3 1-3 2-3 3-2h4l2-1h1l1-2 1-2z"
                    fill="#0d324d"
                  />
                  <path
                    d="M431 514l1-1v3h2v-3l2-1v3h1v-3l2-1v3l-1 1-1 1-1 1h-1l-1 1h-3v-1z"
                    fill="#0d324d"
                  />
                  <path d="M440 514l-8 3h-1l-1-1 8-3h1z" fill="#0d324d" />
                  <path
                    d="M419 551v-7-1l-1-1-1-1h-1l1-1v-1h2l1-2 1-1 1-1h1v7l5-2h19l4-3h1v12c0 4-3 6-7 6h-32l-1-1 1-2h32c2 0 2-1 2-3v-6l-2 1h-17l-4 1-1 4v2h-4zm-2 11l1-2v-3h5l-1 2-1 1-1 2-2 1zm28-6v-4h15l1 2-1 1-2 1z"
                    fill="#0d324d"
                  />
                  <path
                    d="M458 552v-22-2l-1-1-1-1h-1l1-1v-1h2l1-1 1-1v-1h1v-1h1v36h-8l-2-1v-1-2h2z"
                    fill="#0d324d"
                  />
                  <path
                    d="M475 516l-1 2-2 1h-7l-1 2h-1v-2c0-1 0-2 2-2l7-3c2-1 3 0 3 2zm-8 33v-19-1l-1-2v-1h-2l1-1 1-1h1l1-1 1-1v-1h1l1-1v36l-2 4-2 3-2 3-1-1 1-3 1-4 1-4v-5zm6-33l-1-1-4 2h2l3-1z"
                    fill="#0d324d"
                  />
                  <path
                    d="M514 560l-1 4-3 2-4 2a19 19 0 0 1-13-2l-3-2-1-4 1-2a10 10 0 0 1 4-4l2-2 2-1 2-1 1-2v-6h4v7l-2 3-2 2-3 1-2 1-1 1-1 2-1 1 1 2 2 2 2 1a17 17 0 0 0 7 0l2-1 2-2v-2-2l-2-1a21 21 0 0 0-7-2l3-2 1-1c3 0 5 1 7 3 2 1 3 3 3 5zm2-11l1 2 2 1h5v3l-2 1h-4l-4-2c-2-1-2-3-2-5v-3l-1-2-1-1-2-1-2-1h-10v6l1 1 2 1-2 1-2 2-2-2-1-1v-2l-1-2v-8h15l3 1 4 2 2 3 1 4v2zm-15-13v-3-2-1l-1-1h-2l1-1 1-1h2v-1l1-2h1l1-1v13z"
                    fill="#0d324d"
                  />
                  <path d="M529 503l-8 3h-3l8-3h2z" fill="#0d324d" />
                  <path
                    d="M522 552v-22-2l-1-1-1-1h-1l1-1 1-1h1l1-1 1-1v-1h1l1-1v32h7l1 2-1 1-2 1h-13l-2-1v-1-2h6z"
                    fill="#0d324d"
                  />
                  <path d="M548 510l-8 3h-2l8-3h1z" fill="#0d324d" />
                  <path
                    d="M536 541c0 4 1 6 3 8 1 2 4 3 9 3h10c-1 2-3 4-5 4h-25l-2-1v-1-2h9l-2-2-1-3-1-4v-6h16v-1h-1v-1h-2l1-2h3v-2l1-1h1v-1h1v12h-15z"
                    fill="#0d324d"
                  />
                  <path
                    d="M584 505h1v3h1l1-1v-3h1v2h2v-3l2-1v3l-1 2-1 1h-2l-1 1h-2-1v-1z"
                    fill="#0d324d"
                  />
                  <path d="M593 506l-8 3h-2l7-3h2z" fill="#0d324d" />
                  <path
                    d="M598 560l-1 4-3 2-4 2a19 19 0 0 1-13-2l-3-2-1-4 1-2a10 10 0 0 1 3-4l3-2 2-1 1-1 2-2v-6h4v4l-1 3-1 3-3 2-2 1-2 1-1 1-2 2v1l1 2 1 2 3 1a17 17 0 0 0 6 0l3-1 2-2v-2l-1-2-2-1a21 21 0 0 0-6-2l2-2 2-1c3 0 5 1 7 3 2 1 3 3 3 5zm2-11v2l2 1h5l1 2-1 1-2 1h-3l-5-2-2-5v-3-2l-1-1-2-1-3-1h-10v5l1 1 1 1 2 1-2 1-2 2-2-2-1-1-1-2v-10h14l4 1 3 2 3 3v6zm-16 25v1l-2 1-1-1-1-1 1-1 1-1 2 1v1zm1-38v-3-2l-1-1v-1h-2l1-1 1-1h1l1-1 1-2h1v-1h1v13zm4 38v1l-2 1-1-1-1-1 1-1 1-1 2 1v1z"
                    fill="#0d324d"
                  />
                  <path d="M622 510l-8 3h-2l8-3h1z" fill="#0d324d" />
                  <path
                    d="M632 552l-1 1-1 1-1 1h-29l-1-1 1-2h12c-2-2-4-3-5-6l-2-9v-9l1 1h1v1l1 1 1 1h1l1 1 1 1h-2v1l-1 1v2l2 6 5 5 7 2 9 1z"
                    fill="#0d324d"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Container>
      <div className="buttonContainer">
        <Container className=" has-text-centered">
          <Button className="homeButton">
            <Link className="" to="/localSalahtime">
              Local Salah Time
            </Link>
          </Button>
        </Container>
        <Container className=" has-text-centered">
          <Button className="homeButton">
            <Link className="" to="/">
              Guide to Salah
            </Link>
          </Button>
        </Container>
      </div>
    </Layout>
  </div>
);

export default IndexPage;
