import React, { Component } from "react";
import { Columns, Column } from "bloomer";
// import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import SEO from "./seo";
import SVG from "./svg";
import SectionContent from "./sectionContent";
// import headingContent from "../data/headingContent";
// import "../styles/layout.css"

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisibility: true,
      activeNavbarItem: "",
    };
  }

  selectMenuItem = e =>
    this.setState({
      activeNavbarItem: e.target.getAttribute("data-heading"),
    });

  toggleMenu = e =>
    this.setState({
      menuVisibility: !this.state.menuVisibility,
    });

  render() {
    // const { mainContent } = this.props;
    const { menuVisibility, activeNavbarItem } = this.state;
    console.log("___", activeNavbarItem, this.state);
    // const contentToDisplay =
    //   (activeNavbarItem.length &&
    //     headingContent.filter(
    //       content => activeNavbarItem === content.heading && content.body
    //     )[0].body) ||
    //   "";
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
            <SEO
              title="Home"
              keywords={[`salah`, `salaat`, `salat`, `prayer`]}
            />
            <Header
              siteTitle={data.site.siteMetadata.title}
              menuVisibility={menuVisibility}
              activeNavbarItem={activeNavbarItem}
              menuToggleHandler={this.toggleMenu}
              onClickHandler={this.selectMenuItem}
            />
            <main>
              <Columns>
                <Column>
                  <SVG />
                  <span>Placeholder vector image</span>
                </Column>
                <Column>
                  {/* <SectionContent content={contentToDisplay} /> */}
                </Column>
              </Columns>
            </main>
            <Footer />
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
