import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SavedCity from '../SavedCity/SavedCity';
import './SavedContainer.css';

const Saved = ({ favorites, handleFavorite }) => {
  
  const savedCity = favorites.map( ele => {
    return (
      <SavedCity 
        key={ele.id}
        id={ele.id}
        name={ele.name}
        hiTemp={ele.main.temp_max}
        loTemp={ele.main.temp_min}
        fav={ele.isFavorited}
        icon={ele.weather[0].icon}
        weather={ele.weather[0].description}
        city={ele}
        handleFavorite={handleFavorite}
      />
    )
  })
return (
  <section className='city-container'>
      <span className='fav'>
        <Link to='/'> <button> Show All Cities </button> </Link>
      </span> 
    {savedCity}
  </section>
)
};

export default Saved;


Saved.propTypes = {
  favorites: PropTypes.array,
  handleFavorite: PropTypes.func
};