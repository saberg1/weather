// import { useState } from 'react';
// import SearchBar from '../SearchBar/Search';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ renderPage, children }) => {
  // const [display, setDisplay] = useState(false)
  // console.log(children, ' :props in Header.js');
  return (
    <header className='header'>
      <Link to='/'> <h1>Weather App</h1> </Link>
       <Link to='/saved'> <button onClick={renderPage}> Show Favorites </button> </Link>
       {/* <Link to='/'> <button> Home </button> </Link> */}
      <>
        {children} 
      </>
    </header>
  )
}

export default Header;