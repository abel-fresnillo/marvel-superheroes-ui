import React from "react";

import classes from "./SearchHero.module.css";

const SearchHero = () => {
  return (
    <div>
      Search: <input className={classes.SearchHero} type="text" />
    </div>
  );
};

export default SearchHero;
