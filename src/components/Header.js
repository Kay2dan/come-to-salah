import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import HeaderMenu from "./HeaderMenu";
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarMenu,
  NavbarItem,
  NavbarEnd,
} from "bloomer";
import "../styles/header.sass";

const Header = ({
  activeNavbarItem = "",
  menuToggleHandler,
  menuVisibility,
  // onClickHandler,
}) => {
  return (
    <Navbar>
      <NavbarBrand>
        <NavbarItem>
          <div className="borderCurve" />
          <Link to="/">
            <svg id="svgLogo" viewBox="0 0 140 102">
              <g>
                <g transform="matrix(.26458 0 0 .26458 -57 -84)">
                  <text transform="translate(474 437)">
                    <tspan
                      x="0"
                      y="0"
                      className=" st1 st2 st3"
                      fontSize="92"
                      fontFamily="TrajanPro-Bold"
                      letterSpacing="2"
                      fill="#0d324d"
                    >
                      Come
                    </tspan>
                    <tspan
                      x="0"
                      y="111"
                      className=" st1 st2 st3"
                      fontSize="92"
                      fontFamily="TrajanPro-Bold"
                      letterSpacing="2"
                      fill="#0d324d"
                    >
                      to
                    </tspan>
                    <tspan
                      x="0"
                      y="222"
                      className=" st1 st2 st3"
                      fontSize="92"
                      fontFamily="TrajanPro-Bold"
                      letterSpacing="2"
                      fill="#0d324d"
                    >
                      Salah
                    </tspan>
                  </text>
                  <g>
                    <path
                      className=""
                      d="M328 323l3-1v6h2l1-1v-6l3-1v5l2 1 1-1 1-1v-5l2-1v8l-2 2-3 2-2-1-2 2h-5l-1-2z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M346 326l-15 5h-3l-2-1 15-5a6 6 0 0 1 3 0z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M355 431l-2 7-5 5-8 4a35 35 0 0 1-26-4l-5-5a13 13 0 0 1-1-12l3-4 4-3 5-3 4-2a18 18 0 0 0 6-6v-12h8v8c1 2 0 4-1 6a21 21 0 0 1-7 8l-5 3-4 2-3 3-2 2-1 3 1 4 4 3 5 2a31 31 0 0 0 12 0l5-2 4-3 1-4-2-4-4-3-6-2-6-1a48 48 0 0 0 8-6c5 1 10 3 13 6 3 2 5 6 5 10zm4-21l1 3 4 2h6l4 1a4 4 0 0 1 0 5l-4 1h-6c-4 0-7-1-10-3-2-2-3-5-3-9v-6l-1-4-3-3-3-2-5-1h-20v7l1 2v3l2 2 4 2-4 2-4 2-3-3c-1-1-2-1-2-3l-1-3v-19h27a22 22 0 0 1 14 6 17 17 0 0 1 6 12zm-30 49l-1 2a4 4 0 0 1-6 0l-1-2 1-3a4 4 0 0 1 6 0zm1-74v-10l-1-2-1-2-3-1 1-2 2-1 3-1 2-2 1-2 1-1 1-1 1-1h1v25h-8zm9 74l-1 2a4 4 0 0 1-6 0l-1-2 1-3a4 4 0 0 1 6 0z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M403 334l-15 5-1 1h-1l-1-1-2-1 15-5a6 6 0 0 1 3 0z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M422 415l-1 3-2 2-2 2h-53l-4-1-1-3 1-2 4-1h20c-4-3-8-6-10-11-3-4-4-10-4-18v-17h1l1 1 1 1h1l2 3 1 2 3 1 2 1 1 2-3 1-1 2-1 2v2c0 5 1 10 4 13 2 4 5 6 9 9l14 4z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M306 545l-2 7-5 5-8 4a35 35 0 0 1-26-4l-5-5a13 13 0 0 1-1-12l3-4 4-3 5-3 4-2a18 18 0 0 0 5-6l1-4v-8h8v8l-1 6a21 21 0 0 1-8 8l-4 3-4 2-3 3-2 2-1 3 1 4 4 3 5 2a31 31 0 0 0 12 0l5-2 4-3 1-4-2-4-4-3-6-2-6-1a48 48 0 0 0 8-6c5 1 9 3 13 6 3 2 5 6 5 10zm4-21l1 3 4 2h6l4 1a4 4 0 0 1 0 5l-4 1h-6c-4 0-8-1-10-3s-3-5-3-9v-6l-1-4-3-3-3-2-5-1h-20v7l1 2v2l2 3 3 2-3 2-4 2-3-3-2-3-1-3-1-5v-14h28a22 22 0 0 1 14 6 17 17 0 0 1 6 12zm-29-25v-10l-1-2-1-2-3-1 1-2 2-1 3-1 1-2 2-2 1-1 1-1 1-1h1v25h-8z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M335 434l-15 6h-3l-2-1v-1l15-5a6 6 0 0 1 3 0z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M322 529v-44l-1-2v-2l-2-2-3-1 2-2 1-1h4l1-3 2-2v-1l2-1h1v-1h1v62h10l4 1 2 2-2 3-4 1h-25l-4-1-1-3 1-2 4-1z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M373 448l-15 6h-3l-2-1v-1l15-5a6 6 0 0 1 3 0z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M349 508c0 7 2 12 6 16 3 3 9 5 17 5h20c-2 5-5 7-9 7h-49l-3-1-2-3 2-2 3-1h14a24 24 0 0 1-6-11l-2-7v-11h31v-2l-1-2-2-1h-2l1-2 2-2h3l1-3 2-2 1-1h1l1-1h1v24z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M224 612l-2 3a4 4 0 0 1-5 0l-2-3 2-3a4 4 0 0 1 5 0zm-6 38v-6l2-11a22 22 0 0 1 12-12l9-3v8c-5 1-9 3-11 5-3 3-4 7-4 12h17v-29l-1-3-2-1-3-1 2-2 2-1 3-1 1-3 2-2h1l1-1 1-1h1v52zm15-38l-1 3a4 4 0 0 1-6 0l-1-3 1-3a4 4 0 0 1 6 0zm20 3l6-1 4-3 1 1c0 3-1 5-3 7l-8 4z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M304 548l-15 6h-2l-2-1 15-6a6 6 0 0 1 2 0z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M263 634v-39l-2-2-3-1a6 6 0 0 1 3-3h4l1-3 2-2v-1l1-1h1l1-1h1v57l4 3-5 2-3 2-4-5zm28 0v-53h1v1h1l2 1v1l2 2 1 3h4l1 1 2 2-3 1-2 2v2l-1 2v35l1 4 2 3 3 1 2 1h6l4 1 1 2-1 3-4 1h-6l-7-1-5-5-6 4-8 2a10 10 0 0 0-7 3l-2 3-1 3 2 3 2 3 3 2 3 1 3-1a18 18 0 0 0 6-5l1-3-1-4-3-3 4-2 3-2c2 1 4 3 4 5l1 6-1 6-5 5-6 3-6 3-6-3-6-3-4-5-2-6a15 15 0 0 1 5-12l6-3 7-1a10 10 0 0 0 9-6z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M338 569l2-1v5l1 1h1l2-2v-6l3-1v5c0 1 0 2 2 1l1-1v-6l3-1v6l-1 3-2 2-2 1-3-1-1 2-3 1-2-1-1-2z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M355 569l-15 5h-2l-3-1 16-5a6 6 0 0 1 2 0z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M314 641v-13l-1-2v-2l-2-2-3-1 2-2 1-1 4-1 1-2 2-2v-1l2-1 1-1h1v13c3-2 6-3 10-3h26l11-1 8-4h1v23c0 8-4 12-13 12h-58l-4-1-1-3 1-2 4-1h58c3 0 5-2 5-5v-12l-5 1-7 1h-26c-3 0-6 0-8 2s-2 4-2 7v4zm-4 22l2-5 1-6h8l-1 4-2 3-2 3-4 2zm55-13v-7h25l4 1 1 3-1 2-4 1z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M390 643v-46l-1-2-2-2h-3l2-3 2-1h3l1-3 2-2 1-1 1-1h1v-1h1v69h-14l-4-1-2-3 2-2 4-1z"
                      fill="#0d324d"
                    />
                    <path
                      className=""
                      d="M423 573l-1 4-4 2h-14c-1 0-2 1-2 4h-1l-1-4c0-3 1-4 4-4h1c6-5 10-7 13-7s5 2 5 5zm-15 65v-41l-1-2-2-2h-3l2-2 2-2h3l1-3 2-2 1-1h1l1-1v-1h1v57l-1 12-2 9-4 6-5 6-2-2a51 51 0 0 0 6-21zm11-65l-2-1-7 3h5c3 0 4 0 4-2z"
                      fill="#0d324d"
                    />
                  </g>
                  <g>
                    <path
                      className=""
                      d="M448 366v15l1 38v177a7042 7042 0 0 1-1 92v15l-1-15a2806 2806 0 0 1 0-38l-1-54V444l1-25v-38z"
                      fill="#0d324d"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Link>
        </NavbarItem>
        <NavbarBurger className="" />
      </NavbarBrand>
      <NavbarMenu>
        <NavbarEnd>
          <HeaderMenu activeNavbarItem={activeNavbarItem} />
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  );
};

Header.propTypes = {
  activeNavbarItem: PropTypes.string,
  // onClickHandler: PropTypes.func.isRequired,
};

export default Header;
