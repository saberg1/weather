import './Search.css';
import { useState } from 'react';

const SearchBar = () => {
  const [city, setCity] = useState('')

  return(
    <div className='search'>
      <input type='search' placeholder='Enter City'></input>
    </div>
  )
}

export default SearchBar