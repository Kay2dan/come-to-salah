import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  Icon,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
} from "bloomer";
import PropTypes from "prop-types";

const DropDownContainer = ({
  data,
  btnTxt,
  stateProps,
  onClickHandlerForDropDown,
  onClickHandlerForDropDownItem,
}) => (
  <Dropdown
    className="level-item pushUp is-justify-content-flex-end"
    isActive={stateProps.toggleMenu}
  >
    <DropdownTrigger>
      <Button
        className="has-text-centered lowerCaseFont"
        onClick={onClickHandlerForDropDown}
        isOutlined
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <span>{stateProps.selected || `Select ${btnTxt}:`}</span>
        <Icon icon="angle-down" isSize="small" />
      </Button>
    </DropdownTrigger>
    <DropdownMenu>
      <DropdownContent>
        {data.map((entry, i) => (
          <DropdownItem
            isActive={entry === stateProps.selected}
            onClick={onClickHandlerForDropDownItem}
            key={i}
          >
            {entry}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownMenu>
  </Dropdown>
);

DropDownContainer.propsTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  btnTxt: PropTypes.string,
  stateProps: PropTypes.object.isRequired,
  onClickHandlerForDropDown: PropTypes.func.isRequired,
  onClickHandlerForDropDownItem: PropTypes.func.isRequired,
};

export default DropDownContainer;
