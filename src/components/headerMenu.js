import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { Menu, MenuLabel, MenuList } from "bloomer";

const HeaderMenu = ({ activeNavbarItem }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allDataJson(
            filter: { menuSections: { elemMatch: { label: { ne: null } } } }
          ) {
            nodes {
              menuSections {
                label
                headings
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Menu>
            {data.allDataJson.nodes[0].menuSections.map((collection, i) => {
              return (
                <MenuList key={i}>
                  <MenuLabel>{collection.label}</MenuLabel>
                  {collection.headings.map((heading, j) => {
                    let link;
                    const linkState = {};
                    if (collection.label === "Salah Walkthrough") {
                      link = "salahWalkthrough";
                      linkState.guideTo = heading;
                    } else {
                      // replace special chars (incl. space)
                      link = heading.replace(/[^\w]/g, "");
                      link = heading.charAt(0).toLowerCase() + link.slice(1);
                    }
                    return (
                      <Link
                        to={`/${link}`}
                        state={linkState.guideTo ? { guideTo: heading } : false}
                        className="testHeading"
                        activeClassName="activeLink"
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
