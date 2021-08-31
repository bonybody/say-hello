import React from 'react';
import HBGbutton from '../../atoms/HamburgerButton/HamburgerButton';
import classes from './HeaderDesign.module.scss';

const Header: React.FC = () => (
  <div className={classes.header}>
    <HBGbutton />
  </div>
);

export default Header;
