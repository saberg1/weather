import { fetchData } from '../../apiCalls';
import { useEffect, useState } from 'react';
import SavedContainer from '../SavedContainer/SavedContainer';
import SearchBar from '../SearchBar/Search';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router';
import { cleanData } from '../../utils';
import CityContainer from '../CityContainer/CityContainer';
import PropTypes from 'prop-types';
import './App.css';

const App = () => {
  const [cities, setCities] = useState([]);
  const [favCities, setFavCities] = useState([]);
  const [error, setError] = useState('')
  
  const retrieveCity = async (city) => { 
    if(compareCitiesVsFetchCall(city)){
      exist(city)
    } else {
      try {
        await fetchCall(city);
        
      } catch (err) {
        setError(err)
      }
    }
  };
  
  const compareCitiesVsFetchCall = (city) => {
    const confirm = cities.find(ele => ele.name === city)
    const exist = confirm ? true : false
    return exist
  }

  const exist = city => {
    alert(`${city} is already added. Please select another city.`)
  }

  const fetchCall = async (city) => {
    const fetched = await fetchData(city);
    const cleanedData = await cleanData(fetched) ;
    addCity ( cleanedData );
  };

  const addCity = (city) => setCities([...cities, city]);
  
  const renderPage = () => {
    const filtered = cities.filter(city => city.isFavorited === true);
    setFavCities(filtered);
    retrieveLocStor(filtered);
  };

  const handleFavorite = data => data.isFavorited ? remFav(data) : addFav(data);

  const addFav = (data) => {
    data.isFavorited = true;
    setFavCities([...favCities, data]);
    saveLocStor(data);
  };

  const remFav = (data) => {
    data.isFavorited = false;
    const foundCity = cities.find(city => city.id === data.id);
    if(foundCity){foundCity.isFavorited = false};
    const removeFav = favCities.filter(city => city.id !== data.id);
    setFavCities(removeFav);
    remLocStor(data);
  };

  const remLocStor = obj => localStorage.removeItem(obj.id);

  const saveLocStor = obj => localStorage.setItem(obj.id, JSON.stringify(obj));

  const retrieveLocStor = () => {
    const keys = Object.keys(localStorage).map(ele => JSON.parse(localStorage.getItem(ele)))
    setFavCities(keys);
  }

  useEffect(() => {
    retrieveLocStor()
  }, []);
  
  return (
    <main className='main'>
      <Header>
        <SearchBar retrieveCity={retrieveCity} />
      </Header>
      {error ? 
        <Switch>
          <Route exact path='/' render={() => <CityContainer
            cities={cities}
            renderPage={renderPage} 
            handleFavorite={handleFavorite}
          />}/>
          <Route path='/saved' render={() => <SavedContainer 
            favorites={favCities}
            renderPage={renderPage} 
            handleFavorite={handleFavorite}
          /> } /> 
        </Switch>
      :
        <h1 className='error'>Sorry there is a problem with the servers. Please Try again later</h1>
      }
    </main>
    );
  };

  export default App;

  App.propTypes = {
    favCities: PropTypes.array,
    cities: PropTypes.array,
    retrieveCity: PropTypes.func,
    renderPage: PropTypes.func,
    handleFavorite: PropTypes.func
  };
  