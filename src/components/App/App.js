import { fetchData } from '../../apiCalls';
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/Search';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router';
// import CityCard from '../CityCard/CityCard';
import CityContainer from '../CityContainer/CityContainer';
import './App.css';

const App = () => {
  const [city, setCity] = useState([])
  const [afterDisplay, setafterDisplay] = useState(false)
  
  const fetchCall = async (city) => {
    const fetched = await fetchData(city)
    setCity([fetched])
  }

  const retrieveCity = (city) => {
    fetchCall(city)
  }
  
  useEffect(() => {
  }, [])
  
  return (
    <main className='main'>
      {/* <Switch> */}
        <div className='header-controller'>
          <Header />
          <SearchBar retrieveCity={retrieveCity} />
        </div>
        <CityContainer city={city}/>
        {/* {city && } */}
      {/* </Switch> */}
    </main>
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