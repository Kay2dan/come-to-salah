import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { Menu, MenuLabel, MenuList } from "bloomer";

const HeaderMenu = ({ activeNavbarItem }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allDataJson {
            nodes {
              id
              title
              menuSections {
                label
                headings
              }
            }
          }
        }
      `}
      render={data => {
        // console.log("staticQuery data in HeaderMenu: ", data);
        return (
          <Menu>
            {data.allDataJson.nodes[2].menuSections.map((collection, i) => {
              return (
                <MenuList key={i}>
                  <MenuLabel>{collection.label}</MenuLabel>
                  {collection.headings.map((heading, j) => {
                    let link = heading.replace(/[^\w]/g, "");
                    link = heading.charAt(0).toLowerCase() + link.slice(1);
                    {
                      /* console.log("s: ", link); */
                    }
                    return (
                      <Link
                        to={`/${link}`}
                        className="testHeading"
                        data-heading={heading}
                        key={j}
                      >
                        {heading}
                      </Link>
                    );
                  })}
                </MenuList>
              );
            })}
          </Menu>
        );
      }}
    />
  );
};

export default HeaderMenu;

/* {data.map((section, j) => {
              console.log("section:", section, j);
              return (
                <MenuList key={j}>
                  {section.label ? (
                    <>
                      <MenuLabel>{section.label}</MenuLabel>
                      {section.headings.map((subHeading, i) => (
                        <li key={i}>
                          <Link
                            to={`/`}
                            // className={
                            //   activeNavbarItem === subHeading ? "is-active" : ""
                            // }
                            data-heading={subHeading}
                          >
                            {subHeading}
                          </Link>
                        </li>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={`/${section.heading.charAt(0).toLowerCase() +
                        section.heading.slice(1).replace(/\s/g, "")}/`}
                      // className={
                      //   activeNavbarItem === section.heading ? "is-active" : ""
                      // }
                      data-heading={section.heading}
                    >
                      {section.heading}
                    </Link>
                  )}
                </MenuList>
              );
            })} */
