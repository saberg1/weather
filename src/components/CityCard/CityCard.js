import './CityCard.css';
import saved from '../../images/saved.png';
import PropTypes from 'prop-types';
import unsaved from '../../images/unsaved.png';

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


CityCard.propTypes = {
  fav: PropTypes.bool,
  handleFavorite: PropTypes.func,
  cities: PropTypes.object,
  name: PropTypes.string,
  hiTemp: PropTypes.number,
  loTemp: PropTypes.number,
  icon: PropTypes.string,
  weather: PropTypes.string
};