import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { Menu, MenuLabel, MenuList } from "bloomer";

// const HeaderMenu = ({ data }) => {
//   return (
//     <StaticQuery
//       query={graphql`
//         query {
//           allMarkdownRemark {
//             edges {
//               node {
//                 excerpt
//                 html
//               }
//             }
//           }
//         }
//       `}
//       render={data => {
//         const { html, excerpt } = data.allMarkdownRemark.edges["0"].node;
//         console.log("gql data in HeaderMenu: html:", html);
//         console.log("gql in headerMenu: excerpt", excerpt);
//         return (
//           <Menu>
//             <div
//               className="blogpost"
//               dangerouslySetInnerHTML={{
//                 __html: data.allMarkdownRemark.edges["0"].node.html,
//               }}
//             />
//             {/* {data.map((section, j) => {
//               console.log("section:", section, j);
//               return (
//                 <MenuList key={j}>
//                   {section.label ? (
//                     <>
//                       <MenuLabel>{section.label}</MenuLabel>
//                       {section.headings.map((subHeading, i) => (
//                         <li key={i}>
//                           <Link
//                             to={`/`}
//                             // className={
//                             //   activeNavbarItem === subHeading ? "is-active" : ""
//                             // }
//                             data-heading={subHeading}
//                           >
//                             {subHeading}
//                           </Link>
//                         </li>
//                       ))}
//                     </>
//                   ) : (
//                     <Link
//                       to={`/${section.heading.charAt(0).toLowerCase() +
//                         section.heading.slice(1).replace(/\s/g, "")}/`}
//                       // className={
//                       //   activeNavbarItem === section.heading ? "is-active" : ""
//                       // }
//                       data-heading={section.heading}
//                     >
//                       {section.heading}
//                     </Link>
//                   )}
//                 </MenuList>
//               );
//             })} */}
//           </Menu>
//         );
//       }}
//     />
//   );
// };

// export default HeaderMenu;
