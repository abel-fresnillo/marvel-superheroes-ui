import React from "react";

import MarvelHero from "./MarvelHero/MarvelHero";

const MarvelHeroes = () => {
  <div>
    {props.heores.map(hero => (
      <Hero
        key={hero.id}
        label={hero.name}
        added={() => props.ingredientAdded(ctrl.type)}
      />
    ))}
  </div>;
};

export default MarvelHeroes;
