import React from "react";

import heroLogo from "../../assets/images/super-hero-logo.png";
import classes from "./Logo.module.css";

const Logo = () => (
  <div className={classes.Logo}>
    <img src={heroLogo} alt="Super Hero App" />
  </div>
);

export default Logo;
