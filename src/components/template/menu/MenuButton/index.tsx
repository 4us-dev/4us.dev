import React from "react";
import { FaBars } from "react-icons/fa";
import { Button } from "./styles";

const MenuButton: React.FC = () => {
  return (
    <Button type="button">
      <FaBars size="15" />
    </Button>
  );
};

export default MenuButton;
