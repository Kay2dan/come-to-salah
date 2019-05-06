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

const DropDownContainer = ({ data, btnTxt, onClickHandler }) => {
  return (
    <Dropdown className="pushUp">
      <DropdownTrigger>
        <Button
          className="has-text-centered lowerCaseFont"
          isOutlined
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>{btnTxt}</span>
          <Icon icon="angle-down" isSize="small" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownContent>
          <DropdownItem href="#" />
          <DropdownItem href="#" isActive>
            Second item
          </DropdownItem>
          <DropdownItem href="#">Third item</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownContainer;
