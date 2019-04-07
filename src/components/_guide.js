// import React, { Component } from "react";
// // import PropTypes from "prop-types";
// import { StaticQuery, graphql } from "gatsby";
// import Header from "./header";
// import Footer from "./footer";
// import headingContent from "../data/headingContent";
// import { Columns, Column } from "bloomer";
// import SVG from "./svg";
// import SectionContent from "./sectionContent";
// // import "../styles/layout.css"

// class Guide extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menuVisibility: true,
//       activeNavbarItem: "",
//     };
//   }

//   selectMenuItem = e =>
//     this.setState({
//       activeNavbarItem: e.target.getAttribute("data-heading"),
//     });

//   toggleMenu = e =>
//     this.setState({
//       menuVisibility: !this.state.menuVisibility,
//     });

//   render() {
//     const { menuVisibility, activeNavbarItem } = this.state;
//     const contentToDisplay =
//       (activeNavbarItem.length &&
//         headingContent.filter(
//           content => activeNavbarItem === content.heading && content.body
//         )[0].body) ||
//       "";
//     return (
//       <StaticQuery
//         query={graphql`
//           query SiteTitleQuery {
//             site {
//               siteMetadata {
//                 title
//               }
//             }
//           }
//         `}
//         render={data => (
//           <>
//             {/* {this.props.children} */}
//             <Header
//               siteTitle={data.site.siteMetadata.title}
//               menuVisibility={menuVisibility}
//               activeNavbarItem={activeNavbarItem}
//               menuToggleHandler={this.toggleMenu}
//               onClickHandler={this.selectMenuItem}
//             />
//             <main>
//               <Columns>
//                 <Column>
//                   <SVG />
//                   <span>Placeholder vector image</span>
//                 </Column>
//                 <Column>
//                   <SectionContent content={contentToDisplay} />
//                 </Column>
//               </Columns>
//             </main>
//             <Footer />
//           </>
//         )}
//       />
//     );
//   }
// }

// // Guide.propTypes = {
// //   children: PropTypes.node.isRequired,
// // };

// export default Guide;
