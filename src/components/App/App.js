import { fetchData } from '../../apiCalls';
import { useEffect, useState } from 'react';
import Saved from '../Saved/Saved';
import SearchBar from '../SearchBar/Search';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router';
import { cleanData } from '../../utils';
import CityContainer from '../CityContainer/CityContainer';
import './App.css';

const App = () => {
  const [cities, setCities] = useState([])
  
  const fetchCall = async (city) => {
    const fetched = await fetchData(city)
    const cleanedData = await cleanData(fetched) 
    addCity ( cleanedData )
  }

  const retrieveCity = (data) => {
    fetchCall(data)
  }

  const addCity = (city) => {
    setCities( [...cities, city] )
  }

  const handleFavorite = () => {
    console.log('handleFavorite invoked in App.js');
  }
  
  useEffect(() => {
    
  }, [])
  
  return (
    <main className='main'>
        <div className='header-controller'>
          <Header />
          <SearchBar retrieveCity={retrieveCity} />
        </div>
        <CityContainer handleFavorite={handleFavorite} cities={cities}/>
    </main>
  //   <main className='main'>
  //   <Switch>
  //     <Route exact path='/home' render={() => {
  //       <div className='main-container'>
  //         <div className='header-controller'>
  //           <Header />
  //           <SearchBar retrieveCity={retrieveCity} />
  //         </div>
  //         <CityContainer city={city}/>
  //       </div>
  //     }} />
  //     <Route exact path='/saved' render={() => {
  //       <Saved />
  //     }} />
  //   </Switch>
  // </main>
  );
}

export default App;

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