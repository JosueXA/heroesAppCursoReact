import React from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const { heroeId } = useParams();

  const hero = getHeroById( heroeId );

  if ( !hero ) {
    return <Redirect to="/" />;
  }

  const { 
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  console.log(hero);

  return (
    <div>
      <h1>HeroesScreen</h1>
    </div>
  )
}