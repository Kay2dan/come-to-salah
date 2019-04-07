import React from "react";
import PropTypes from "prop-types";
import HeaderMenu from "./headerMenu";
import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarItem,
  NavbarEnd,
} from "bloomer";

const Header = ({
  siteTitle,
  menuVisibility,
  activeNavbarItem = "",
  menuToggleHandler,
  onClickHandler,
}) => {
  console.log(
    "props within Header:",
    "siteTitle: ",
    siteTitle,
    "menuVisibility: ",
    menuVisibility,
    "activeNavbarItem: ",
    activeNavbarItem,
    "menuToggleHandler: ",
    menuToggleHandler,
    "onClickHandler: ",
    onClickHandler
  );
  return (
    <Navbar>
      <NavbarBrand>
        <NavbarItem>
          <svg
            version="1.1"
            viewBox="0 0 62.395058 96.28801"
            className="mosque"
          >
            <g id="layer1">
              <g transform="translate(-5.2916669)" id="g4324">
                <path
                  id="path3775"
                  style={{
                    fill: "#244b7a",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none",
                    strokeWidth: "0.08466666",
                  }}
                  d="m 37.041709,16.879485 v 0 c -2.84141,5.68198 -7.48284,10.2633 -13.20292,13.0302 l -10.94063,5.29167 c -7.8342004,3.78883 -9.4894404,14.22654 -3.2114004,20.25311 l 1.0430904,1.00076 h 26.31186 26.3127 l 1.04056,-1.00076 c 6.27972,-6.02657 4.62534,-16.46428 -3.20971,-20.25311 l -10.94148,-5.29167 c -5.71923,-2.7669 -10.36066,-7.34822 -13.20207,-13.0302 v 0"
                />
                <path
                  id="path3777"
                  style={{
                    fill: "#72d1f5",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none",
                    strokeWidth: "0.08466666",
                  }}
                  d="M 68.061029,96.435675 H 6.0223786 v -34.75567 c 0,-3.00059 2.43248,-5.43221 5.4322204,-5.43221 h 51.17337 c 3.00228,0 5.43306,2.43162 5.43306,5.43221 v 34.75567"
                />
                <path
                  id="path3779"
                  style={{
                    fill: "#3a3a3c",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none",
                    strokeWidth: "0.08466666",
                  }}
                  d="m 48.662209,96.435675 v -22.82106 c 0,-6.107 -11.6205,-9.84588 -11.6205,-9.84588 0,0 -11.62135,3.73888 -11.62135,9.84588 v 22.82106 h 23.24185"
                />
                <path
                  id="path3781"
                  style={{
                    fill: "#3a3a3c",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    " stroke": "none",
                    strokeWidth: "0.08466666",
                  }}
                  d="m 63.026749,74.096375 c 0,-1.82796 -4.58977,-5.24934 -4.58977,-5.24934 0,0 -4.5864,3.42138 -4.5864,5.24934 v 13.66604 h 9.17617 v -13.66604"
                />
                <path
                  id="path3783"
                  style={{
                    fill: "#3a3a3c",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    strokeWidth: "0.08466666",
                  }}
                  d="m 20.232839,74.096375 c 0,-1.82796 -4.58809,-5.24934 -4.58809,-5.24934 0,0 -4.58724,3.42138 -4.58724,5.24934 v 13.66604 h 9.17533 v -13.66604"
                />
                <path
                  id="path3785"
                  style={{
                    fill: "#244b7a",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    strokeWidth: "0.08466666",
                  }}
                  d="m 45.430479,15.478255 c -0.97451,0.36237 -2.02692,0.56303 -3.12758,0.56303 -4.95385,0 -8.96874,-4.01574 -8.96874,-8.9687398 0,-2.78892 1.27254,-5.27981 3.26813,-6.92487996 -0.0745,0.0102 -0.14817,0.0237 -0.22183,0.0356 -4.56353,0.72474 -8.05434,4.67443996 -8.05434,9.44201996 0,5.2831998 4.28329,9.5664898 9.56734,9.5664898 3.0844,0 5.82591,-1.4605 7.57512,-3.72703 -0.0127,0.005 -0.0263,0.009 -0.0381,0.0136"
                />
                <path
                  id="path3787"
                  style={{
                    fill: "#244b7a",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    strokeWidth: "0.08466666",
                  }}
                  d="m 40.676449,2.7968852 1.21497,3.36634 3.57716,0.1143 -2.82786,2.19541 0.99737,3.4383098 -2.96164,-2.0108298 -2.96164,2.0108298 0.99737,-3.4383098 -2.82702,-2.19541 3.57717,-0.1143 1.21412,-3.36634"
                />
              </g>
            </g>
          </svg>
          <h1>{siteTitle}</h1>
          <h1 className="arabicTxt"> حَيَّ عَلَى ٱلصَّلَاة</h1>
        </NavbarItem>
      </NavbarBrand>
      <NavbarMenu>
        <NavbarEnd>
          <a
            className={menuVisibility ? "close_icon" : "menu_icon"}
            onClick={menuToggleHandler}
          />
          {menuVisibility && <HeaderMenu activeNavbarItem={activeNavbarItem} />}
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  activeNavbarItem: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired,
};

export default Header;
