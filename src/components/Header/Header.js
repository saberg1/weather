// import { useState } from 'react';
// import SearchBar from '../SearchBar/Search';
import './Header.css';

const Header = ({ children }) => {
  // const [display, setDisplay] = useState(false)

  return (
    <header className='header'>
      <h1>Weather App</h1>
      {children}
    </header>
  )
}

export default Header;