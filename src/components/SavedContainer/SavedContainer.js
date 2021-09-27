import './SavedContainer.css';
import { Link } from 'react-router-dom';
import SavedCity from '../SavedCity/SavedCity';

const Saved = ({ favorites, handleFavorite, renderPage }) => {
  
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
        <Link to='/saved'> <button className='fav-btn' onClick={renderPage}> Show Favorites </button> </Link>
      </span> 
    {savedCity}
  </section>
)
};

export default Saved;