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

const DropDownContainer = ({
  data,
  btnTxt,
  stateProps,
  onClickHandlerForDropDown,
  onClickHandlerForDropDownItem,
}) => {
  const { toggleMenu, selected } = stateProps;
  return (
    <Dropdown className="pushUp" isActive={toggleMenu}>
      <DropdownTrigger>
        <Button
          className="has-text-centered lowerCaseFont"
          onClick={onClickHandlerForDropDown}
          isOutlined
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>{selected || `Select ${btnTxt}:`}</span>
          <Icon icon="angle-down" isSize="small" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownContent>
          {data.map((entry, i) => (
            <DropdownItem
              isActive={entry === selected}
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
};

export default DropDownContainer;
