import React from "react";
import PropTypes from "prop-types";
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
                    let navigateTo = "";
                    if (collection.label === "Salah Walkthrough") {
                      link = "salahWalkthrough";
                      navigateTo = heading;
                    } else {
                      // replace special chars (incl. space)
                      link = heading.replace(/[^\w]/g, "");
                      link = heading.charAt(0).toLowerCase() + link.slice(1);
                    }
                    return (
                      <Link
                        to={`/${link}`}
                        state={{ navigateTo }}
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

HeaderMenu.propTypes = {
  activeNavbarItem: PropTypes.string,
};

export default HeaderMenu;
