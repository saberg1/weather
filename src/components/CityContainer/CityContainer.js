import CityCard from '../CityCard/CityCard';
import { useState } from 'react';
import './CityContainer.css';

const CityContainer = ({ cities, handleFavorite }) => {
  const [favorites, setFavorites] = useState([])

  const updateFavorite = (data) => {
       if (data.isFavorited) {
        remFav(data)
      } else {
        addFav(data)
      }
  }
  
  const remFav = (data) => {
    data.isFavorited = false
    const removeFav = favorites.filter(city => city.id !== data.id)
    setFavorites(removeFav)
    handleFavorite(data)
    remLocStor(data)
  }

  const addFav = (data) => {
    data.isFavorited = true
    setFavorites([...favorites, data])
    handleFavorite(data)
    saveLocStor(data)
  }

  const remLocStor = (obj) => {
    localStorage.removeItem(obj.id)
  }

  const saveLocStor = (obj) => {
    localStorage.setItem(obj.id, JSON.stringify(obj))
  }

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
          updateFavorite={updateFavorite}
        />
      )
    })
  return (
    <section className='city-container'>
      {/* <p>hello</p> */}
      {cityCards}
    </section>
  )
};

export default CityContainer;