import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroeList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher );

  return (
    <div className="row row-cols-1 row-cols-md-3 g-1">
        {
          heroes.map( hero => (
            <HeroCard 
              key={ hero.id }
              { ...hero }
            />
          ) )
        }
    </div>
  )
}