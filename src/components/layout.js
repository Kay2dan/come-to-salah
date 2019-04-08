import React, { Component } from "react";
import { Columns, Column } from "bloomer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <main>{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

// class Layout extends Component {
//   constructor(props) {
//     super(props);
// this.state = {
//   menuVisibility: true,
//   activeNavbarItem: "",
// };
// }

// selectMenuItem = e =>
//   this.setState({
//     activeNavbarItem: e.target.getAttribute("data-heading"),
//   });

// toggleMenu = e =>
//   this.setState({
//     menuVisibility: !this.state.menuVisibility,
//   });

//   render() {
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
//             {/* <Header
//               menuVisibility={menuVisibility}
//               activeNavbarItem={activeNavbarItem}
//               menuToggleHandler={this.toggleMenu}
//               onClickHandler={this.selectMenuItem}
//             /> */}
//             <main>
//               <Columns>
//                 <Column>
//                   <SVG />
//                   <span>Placeholder vector image</span>
//                 </Column>
//                 <Column>
//                   {/* <SectionContent content={contentToDisplay} /> */}
//                 </Column>
//               </Columns>
//               {this.props.children}
//             </main>
//           </>
//         )}
//       />
//     );
//   }
// }
