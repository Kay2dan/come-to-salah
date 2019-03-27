/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import { Footer, Container, Content, Columns, Column } from "bloomer";
// import "./layout.css"

const Layout = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <Footer id="footer">
            <Container>
              <Content>
                <Columns>
                  <Column isFull>
                    <p>
                        This was made as a team through the efforts of:
                    </p>
                      <ul>
                      <li>Nathif Jama Adam (original text author & researcher)</li>
                      <li>Placeholder (graphics & design)</li>
                      <li>Khalil Zreid (editor)</li>
                      <li>Salman Khan (dev)</li>
                      </ul>
                  </Column>
                </Columns>
              </Content>
            </Container>
          </Footer>
          {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
