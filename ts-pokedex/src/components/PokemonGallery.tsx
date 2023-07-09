import { FC, memo, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { Pokemon } from "../types/pokemon-interface";
import { TYPE_COLOR, TypeKey } from "../utils/color-footer";
import { Loading } from './Loading';

export const PokemonGallery: FC<Props> = memo(({ pokemons, isLoading }) => {

  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState({
    index: 0,
    show: false
  });

  const onNavigate = (pokemon: Pokemon) => {
    const { name } = pokemon;

    navigate(`/pokemon/${name}`);
  }
  
  if (isLoading) {
    return <Loading />
  }

  return (
    <section className="gallery__container">
      {
        pokemons.map((pokemon, index) => {
          const type = pokemon.types[0].type.name as TypeKey;
          return (
            <div
              onMouseEnter={() => setShowInfo({
                show: true,
                index
              })}
              onMouseLeave={() => setShowInfo({
                show: false,
                index
              })}
              className="pokemon__card" 
              key={pokemon.id}
            >
              <figure>
                <img
                  src={pokemon.sprites.front_default}
                  alt={`${pokemon.name} image`}
                />
              </figure>
              <footer
                className='footer'
                style={{
                  backgroundColor: TYPE_COLOR[type]
                }}
              >
                <strong>{pokemon.name}</strong>
              </footer>
              {
                showInfo.show && showInfo.index === index && 
                (
                  <div className='pokemon__info'>
                    <button onClick={() => onNavigate(pokemon)}>show more</button>
                  </div>
                )
              }
            </div>
          )
        })
      }
    </section>
  );
});

type Props = {
  pokemons: Pokemon[];
  isLoading: boolean;
};
