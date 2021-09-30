import './SavedCity.css';
import saved from '../../images/saved.png'
import unsaved from '../../images/unsaved.png'
import PropTypes from 'prop-types';

const SavedCity = ({ name,hiTemp, loTemp, fav, icon, weather, handleFavorite, city }) => {

  return(
    <article className='city-card'>
      <div className='card-header'>
        <h1>{name}</h1>
        <img alt='favorite' className='favorite' src={fav ? saved : unsaved} onClick={() => handleFavorite(city)} />
      </div>
      <h3>Hi:{hiTemp} | Lo:{loTemp}</h3>
      <img className='icon-img' alt='icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
      <h3>{weather}</h3>
    </article>
  )
};

export default SavedCity;


SavedCity.propTypes = {
  fav: PropTypes.bool,
  handleFavorite: PropTypes.func,
  city: PropTypes.object,
  name: PropTypes.string,
  hiTemp: PropTypes.number,
  loTemp: PropTypes.number,
  icon: PropTypes.string,
  weather: PropTypes.string
};