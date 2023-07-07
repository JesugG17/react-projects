
const pokemones = ['pikachu', 'pikachu', 'pikachu','pikachu', 'pikachu','pikachu','pikachu','pikachu'];

export const PokemonGallery = () => {
  return (
    <section className="gallery__container">
      {
        pokemones.map((pokemon, index) => (
        <div className="pokemon__card" key={index}>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="pikachu" />
            <footer>
              <strong>{ pokemon }</strong>
            </footer>
        </div>
        ))
      }
    </section>
  )
}
