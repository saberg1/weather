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
  //filter through cities, find the ones with isFavorited propery and add them to array -- should be state?
  // ormake array inside function

  const renderPage = () => {
    // console.log('renderPage invoked');
    // const arr = [ ]

    const filtered = cities.filter(city => city.isFavorited === true)

    // filtered.forEach(city => console.log(city.name, 'cities inside isFavorited array App.js'))
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

  }
  
  useEffect(() => {
    
  }, [])
  
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
  // {
  //   <CityContainer 
  //   handleFavorite={handleFavorite} 
  //   cities={cities}
  //   />} 
  
  {/* <main className='main'>
  <CityContainer handleFavorite={handleFavorite} cities={cities}/>  <<<<< the render line code
<Header renderPage={renderPage} >
  <SearchBar retrieveCity={retrieveCity} />
</Header>
<Switch>
<div className='header-controller'> 
   </div> 
  <Route exact path='/' render={() => {
    <CityContainer 
      handleFavorite={handleFavorite} 
      cities={cities}
    />
  }}/>
  <Route path='/saved' component={Saved} />
  <CityContainer handleFavorite={handleFavorite} cities={cities}/> 
  <Saved /> 
</Switch>
</main>  */}
  

// export default App;

// const indy = {
//   coord: {
//     lon:-86.158,
//     lat:39.7684
//   },
//     weather:[{
//         id:803,
//         main:'Clouds',
//         description:'broken clouds',
//         icon:'04d'
//     }],
//     base:'stations',
//     main: {
//       temp:287.52,
//       feels_like:286.94,
//       temp_min:284.57,
//       temp_max:289.33,
//       pressure:1015,
//       humidity:74
//     },
//     visibility:10000,
//     wind:{
//       speed:7.2,
//       deg:300
//     },
//     clouds: {all:75},
//     dt: 1632410079,
//     sys:{
//       type:2,
//       id:2037844,
//       country: 'US',
//       sunrise:1632396804,
//       sunset:1632440425
//     },
//     timezone:-14400,
//     id:4259418,
//     name:'Indianapolis',
//     cod:200
// }