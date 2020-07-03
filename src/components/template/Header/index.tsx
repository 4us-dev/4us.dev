import React from "react";
import { Container, MenuPlace, HeaderPlace, Title } from "./styles";
import MenuButton from "../menu/MenuButton";

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderPlace>
        <Title>4US DEV</Title>
      </HeaderPlace>
      <MenuPlace className='menu-toogle'>
        <MenuButton />
      </MenuPlace>
    </Container>
  );
};

export default Header;
