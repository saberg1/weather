import { Link } from 'react-router-dom';
import CityCard from '../CityCard/CityCard';
import './CityContainer.css';

const CityContainer = ({ cities, handleFavorite, renderPage }) => {

    const cityCards = cities.map( ele => {
      return (
        <CityCard 
          key={ele.id}
          id={ele.id}
          name={ele.name}
          hiTemp={ele.main.temp_max}
          loTemp={ele.main.temp_min}
          fav={ele.isFavorited}
          icon={ele.weather[0].icon}
          weather={ele.weather[0].description}
          cities={ele}
          handleFavorite={handleFavorite}
        />
      )
    })
  return (
    <section className='city-container'>
      <span className='fav'>
        <Link to='/saved'> <button className='fav-btn' onClick={renderPage}> Show Favorites </button> </Link>
      </span> 
      {cityCards}
    </section>
  )
};

export default CityContainer;