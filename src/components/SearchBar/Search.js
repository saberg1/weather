import './Search.css';
import { useState } from 'react';

const SearchBar = () => {
  const [city, setCity] = useState('')

  // var input = document.getElementById('autocomplete');
  // var autocomplete = new google.maps.places.Autocomplete(input);

  const handleClick = () => {
    // console.log(city, ' :state inside search');
    setCity('')
  }

  const handleChange = event => {
    setCity(event.target.value);

  };

  return(
    <div className='search'>
      <input 
        type='text' 
        placeholder='Enter City'
        value={city}
        onChange={(event) => handleChange(event)}
      ></input>
      <button
        className='button'
        onClick={handleClick}>
      Search
      </button>
    </div>
  )
}

export default SearchBar;