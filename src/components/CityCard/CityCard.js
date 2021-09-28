import './CityCard.css';
import saved from '../../images/saved.png'
import unsaved from '../../images/unsaved.png'

const CityCard = ({ fav, handleFavorite, cities, name, hiTemp, loTemp, icon, weather }) => {

  return(
    <article className='city-card'>
      <div className='card-header'>
        <h1>{name}</h1>
        <img alt='favorite' className='favorite-icon' src={fav ? saved : unsaved} onClick={() => handleFavorite(cities)} />
      </div>
      <h3>Hi:{hiTemp} | Lo:{loTemp}</h3>
      <img className='icon-img' alt='icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
      <h3>{weather}</h3>
    </article>
  )
};

export default CityCard;