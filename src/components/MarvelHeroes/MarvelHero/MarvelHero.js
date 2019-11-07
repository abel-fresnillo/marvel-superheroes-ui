import React from "react";

import classes from "./MarvelHero.module.css";

const MarvelHero = props => {
  return (
    <div className={classes.MarvelHero}>
      <div>{props.name}</div>
      <button onClick={props.viewHero}>View</button>
    </div>
  );
};

export default MarvelHero;
