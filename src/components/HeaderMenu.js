import React from "react";
import PropTypes from "prop-types";
import { graphql, Link, StaticQuery } from "gatsby";
import { NavbarDropdown, NavbarItem } from "bloomer";

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
          // add class 'is-active' for enable/disable logic
          <>
            {data.allDataJson.nodes[0].menuSections.map((collection, i) => (
              <NavbarItem className="has-dropdown is-hoverable" key={i}>
                <a href="#" className="navbar-link">
                  {collection.label}
                </a>
                <NavbarDropdown isBoxed={false}>
                  {collection.headings.map((heading, j) => {
                    let link;
                    let navigateTo = "";
                    if (collection.label === "How To Pray Salah") {
                      link = "howToPraySalah";
                      navigateTo = heading;
                    } else {
                      // replace special chars (incl. space)
                      link = heading.replace(/[^\w]/g, "");
                      link = heading.charAt(0).toLowerCase() + link.slice(1);
                    }
                    return (
                      <NavbarItem key={j}>
                        <Link
                          to={`/${link}`}
                          state={{ navigateTo }}
                          className=""
                          activeClassName="activeLink"
                          data-heading={heading}
                          key={j}
                        >
                          {heading}
                        </Link>
                      </NavbarItem>
                    );
                  })}
                </NavbarDropdown>
              </NavbarItem>
            ))}
          </>
        );
      }}
    />
  );
};

HeaderMenu.propTypes = {
  activeNavbarItem: PropTypes.string,
};

export default HeaderMenu;
