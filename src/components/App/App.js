import { fetchData } from '../../apiCalls';
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/Search';
import Header from '../Header/Header';

const App = () => {
  const [city, setCity] = useState({})


  const fetchCall = (city) => {
    fetchData(city)
    .then(data => setCity(data))
  }

  const retrieveCity = (city) => {
    fetchCall(city)
  }
  
  useEffect(() => {
  }, [])
  
  return (
    <main>
      <Header>
      <SearchBar retrieveCity={retrieveCity}/>
      </Header>
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