import './CityCard.css';
import saved from '../../images/saved.png'
import unsaved from '../../images/unsaved.png'

const CityCard = ({ fav, handleFavorite, cities, name, hiTemp, loTemp, icon, weather }) => {

  return(
    <article className='city-card'>
      <h1>{name}</h1>
      <h3>Hi:{hiTemp} | Lo:{loTemp}</h3>
      {/* <h3></h3> */}
      {/* <img src={icon}/> */}

      <h3>{weather}</h3>
      <img className='favorite' 
        src={fav ? saved : unsaved}
        onClick={() => handleFavorite(cities)} />
    </article>
  )
};

export default CityCard;