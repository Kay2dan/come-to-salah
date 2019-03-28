import React, { Component } from "react";
// import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Columns, Column } from "bloomer";
import Header from "./header";
import Footer from "./footer";
import SVG from "./svg";
import SectionContent from "./sectionContent";
import headingContent from "../data/headingContent";
// import "../styles/layout.css"

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavbarItem: "",
    };
  }

  selectMenuItem = ev => {
    const evTarget = ev.target;
    console.log(
      "%c evTarget:",
      "color: green",
      evTarget.getAttribute("data-heading")
    );
    this.setState({
      activeNavbarItem: evTarget.getAttribute("data-heading"),
    });
  };

  render() {
    const { activeNavbarItem } = this.state;
    const contentToDisplay =
      (activeNavbarItem.length &&
        headingContent.filter(
          content => activeNavbarItem === content.heading && content.body
        )[0].body) ||
      "";
    console.log("%c contentToDisplay: ", "color: blue", contentToDisplay);
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header
              siteTitle={data.site.siteMetadata.title}
              activeNavbarItem={activeNavbarItem}
              onClickHandler={this.selectMenuItem}
            />
            {/* <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            > */}
            {/* <main>{this.props.children}</main> */}
            <main>
              <Columns>
                <Column>
                  <SVG />
                  <span>Placeholder vector image</span>
                </Column>
                <Column>
                  <SectionContent content={contentToDisplay} />
                </Column>
              </Columns>
            </main>
            <Footer />
            {/* </div> */}
          </>
        )}
      />
    );
  }
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
