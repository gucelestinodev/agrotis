import React from 'react';
import agrotisImage from '../../assets/agrotis.png';
import {HeaderContainer, HeaderImage} from './HeaderStyles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderImage src={agrotisImage} alt="Agrotis" />
    </HeaderContainer>
  );
};

export default Header;
