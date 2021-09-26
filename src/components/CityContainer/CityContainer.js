import CityCard from '../CityCard/CityCard';
import { useState } from 'react';
import './CityContainer.css';

const CityContainer = ({ cities, handleFavorite }) => {
  // console.log(cities, ' :cities inside CityContainer.js')
    const cityCards = cities.map( ele => {
      return (
        <CityCard 
          key={ele.id}
          id={ele.id}
          name={ele.name}
          hiTemp={ele.main.temp_max}
          loTemp={ele.main.temp_min}
          fav={ele.isFavorited}
          // icon={ele.weather[0].icon}
          weather={ele.weather[0].description}
          cities={ele}
          handleFavorite={handleFavorite}
        />
      )
    })
  return (
    <section className='city-container'>
      {cityCards}
    </section>
  )
};

export default CityContainer;