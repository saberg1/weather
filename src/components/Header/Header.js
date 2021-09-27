import { Link } from 'react-router-dom';
import './Header.css';
import hero from '../../images/hero.jpg'

const Header = ({ renderPage, children }) => {
  return (
    <header className='header'>
      <img src={hero} className='hero' alt='hero' />
      <span className='headerh1'>
        <Link to='/' style={{ textDecoration: 'none' }} > <h1>Weather App</h1> </Link>
      </span>
      <span className='search-input'>
        {children}
      </span>
    </header>
  )
}

export default Header;