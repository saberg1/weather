// import { useState } from 'react';
// import SearchBar from '../SearchBar/Search';
import './Header.css';

const Header = ({ renderPage }) => {
  // const [display, setDisplay] = useState(false)

  return (
    <header className='header'>
      <h1>Weather App</h1>
      <button onClick={renderPage}> Show Favorites </button>
    </header>
  )
}

export default Header;