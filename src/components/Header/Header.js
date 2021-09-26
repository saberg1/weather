import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ renderPage, children }) => {
  return (
    <header className='header'>
      <Link to='/'> <h1>Weather App</h1> </Link>
       <Link to='/saved'> <button onClick={renderPage}> Show Favorites </button> </Link>
      <>
        {children} 
      </>
    </header>
  )
}

export default Header;