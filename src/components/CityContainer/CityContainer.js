import CityCard from '../CityCard/CityCard';
import { useEffect, useState } from 'react';
import './CityContainer.css';

const CityContainer = ({ cities, handleFavorite }) => {
  const [favorites, setFavorites] = useState([])

//method to display between cities & favor

  const updateFavorite = (data) => {
    // const test = data.isFavorited ? true : false 
    // data.isFavorited = test
       if (data.isFavorited) {
        // data.isFavorited = false
        remFav(data)
      } else {
        // data.isFavorited = true
        addFav(data)
      }
    // console.log('data.isFavorited: ', data.isFavorited);
    //call next function to run depeneding on if favorted or unfavored
  }
  
  const remFav = (data) => {
    data.isFavorited = false
    // console.log(data.isFavorited, ' :isFavorite inside remFav App.js');
    const removeFav = favorites.filter(city => city.id !== data.id)
    setFavorites(removeFav)
    // console.log(data.isFavorited,` :${data.name} inside remFav CityContainer.js`);
    handleFavorite(data)
    remLocStor(data)
  }

  const addFav = (data) => {
    data.isFavorited = true
    // console.log(data.isFavorited, ' :isFavorite inside addFav App.js');
    setFavorites([...favorites, data])
    // console.log(data.isFavorited, ` :${data.name} inside addFav CityContainer.js`);
    handleFavorite(data)
    saveLocStor(data)
    // console.log('addFav invoked');
    // const updateData = data.isFavorited = true
    // // const updateFav = {...data, updateData } 
    // setFavorites({...data, updateData})
    // // console.log(updateFav, ' :updateFav variable <<<>>>');
    // console.log(data, ' :<<>><> data inside addFav CityContainer.js');
  }

  const remLocStor = (obj) => {
    localStorage.removeItem(obj.id)
    // console.log(localStorage, ' :remLocStor');
  }

  const saveLocStor = (obj) => {
    localStorage.setItem(obj.id, JSON.stringify(obj))
    // console.log(localStorage, ' :saveLocStor');
  }

    const cityCards = cities.map( ele => {
      return (
        <CityCard 
          key={ele.id}
          id={ele.id}
          name={ele.name}
          hiTemp={ele.main.temp_max}
          loTemp={ele.main.temp_min}
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