import { useLocation } from 'react-router-dom'

export const Pokemon = () => {

    const location = useLocation();
    console.log(location);

  return (
    <div>Pokemon</div>
  )
}
