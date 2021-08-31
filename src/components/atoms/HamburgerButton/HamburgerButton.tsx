import React from 'react';
import classes from './ButtonDesign.module.scss';

const HBGbutton: React.FC = () => (
  <div className={classes.toggleBtn}>
    <button type="button" className={classes.MenuTrigger}>
      <span />
      <span />
      <span />
    </button>
  </div>
);

export default HBGbutton;
