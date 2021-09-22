import { fetchData } from '../../apiCalls';
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/Search';
import Header from '../Header/Header';

const App = () => {
  const [city, setCity] = useState({})
  const fetchCall = () => {
    fetchData('indianapolis')
    .then(data => setCity(data))
  }

  useEffect(() => {
    fetchCall()
  }, [])

  return (
    <main>
      <Header>
      <SearchBar />
      </Header>
    </main>
  );
}

export default App;
