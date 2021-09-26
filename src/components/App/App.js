import { fetchData } from '../../apiCalls';
import { useEffect, useState } from 'react';
import SavedContainer from '../SavedContainer/SavedContainer';
import SearchBar from '../SearchBar/Search';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router';
import { cleanData } from '../../utils';
import CityContainer from '../CityContainer/CityContainer';
import './App.css';

const App = () => {
  const [cities, setCities] = useState([])
  const [favCities, setFavCities] = useState([])
  
  const fetchCall = async (city) => {
    const fetched = await fetchData(city)
    const cleanedData = await cleanData(fetched) 
    addCity ( cleanedData )
  }

  const renderPage = async () => {
    const filtered = cities.filter(city => city.isFavorited === true) // list of 
    // const list = retrieveLocStor(filtered)
    // console.log(list, ' :list inside renderPage')
    setFavCities(filtered)
    await retrieveLocStor(filtered)
  }

  const retrieveCity = (data) => {
    fetchCall(data)
  }

  const addCity = (city) => {


    setCities( [...cities, city] )
  }

  const handleFavorite = (data) => {
    // console.log(data, ' :data logged inside handleFavorite');
    if(data.isFavorited) {
      remFav(data)
    } else {
      addFav(data)
    }
  }

    const addFav = (data) => {
    data.isFavorited = true
    setFavCities([...favCities, data])
    saveLocStor(data)
  }
  //take state holding all cities array (cities)
  // take cities[i].id === favCities[i].id 
  //update thier .isFavorite there

    const remFav = (data) => {
      data.isFavorited = false
      const foundCity = cities.find(city => city.id === data.id)
      foundCity.isFavorited = false
      console.log(foundCity, ' :FOUND CITY REMFAV APP.JS');
      // console.log(data, ' :data inside remFav app.js<<<<<<'); // here its false
      // console.log(cities, 'cities state inside remfav app.js'); //here its still true
      const removeFav = favCities.filter(city => city.id !== data.id)
      setFavCities(removeFav)

      remLocStor(data)
  }

    const remLocStor = (obj) => {
    localStorage.removeItem(obj.id)
  }

  const saveLocStor = (obj) => {
    localStorage.setItem(obj.id, JSON.stringify(obj))
  }

  const retrieveLocStor = () => {
    const keys = Object.keys(localStorage).map(element => {
      return JSON.parse(localStorage.getItem(element))
    })
    setFavCities(keys)
  }

  useEffect(() => { retrieveLocStor()}, [])
  
  return (
    <main className='main'>
      <Header renderPage={renderPage} >
        <SearchBar retrieveCity={retrieveCity} />
      </Header>
      <Switch>
        <Route exact path='/' render={() => <CityContainer
          cities={cities}
          handleFavorite={handleFavorite}
        />}/>
        <Route path='/saved' render={() => <SavedContainer 
          handleFavorite={handleFavorite}
          favorites={favCities}
        /> } />
      </Switch>
    </main>
    );
  }
  export default App;