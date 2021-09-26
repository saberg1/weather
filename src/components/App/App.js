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

  const renderPage = () => {
    const filtered = cities.filter(city => city.isFavorited === true)
    setFavCities(filtered)
  }

  const retrieveCity = (data) => {
    fetchCall(data)
  }

  const addCity = (city) => {
    setCities( [...cities, city] )
  }

  const handleFavorite = (data) => {
    // const filtered = cities.filter(city => city.isFavorited === true)
    if(data.isFavorited) {
      remFav(data)
    } else {
      addFav(data)
    }
    console.log(data, 'data inside handle favorite');
  }

    const addFav = (data) => {
    // console.log(data, ' :addFav(data) invoked App.js');
    data.isFavorited = true
    setFavCities([...favCities, data])
    // handleFavorite(data)
    saveLocStor(data)
  }

    const remFav = (data) => {
    // console.log(data, ' :remFav(data) invoked App.js');
    data.isFavorited = false
    const removeFav = favCities.filter(city => city.id !== data.id)
    setFavCities(removeFav)
    // handleFavorite(data)
    remLocStor(data)
  }

    const remLocStor = (obj) => {
    localStorage.removeItem(obj.id)
  }

  const saveLocStor = (obj) => {
    localStorage.setItem(obj.id, JSON.stringify(obj))
  }


  
  useEffect(() => { }, [])
  
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
          favorites={favCities}
        /> } />
      </Switch>
    </main>
    );
  }
  export default App;