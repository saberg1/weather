import { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import PropTypes from 'prop-types';
import './Search.css';

const SearchBar = ({ retrieveCity }) => {
  const [city, setCity] = useState('')

  const handleClick = (city) => {
    const formatedCity = city.split(', ')[0]
    retrieveCity(formatedCity)
    setCity('')
  }

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value)
    setCity(result)
    handleClick(value)
  }

  return(
    <div className='search'>
      <PlacesAutocomplete 
        value={city} 
        onChange={setCity} 
        onSelect={handleSelect}
        searchOptions={ {types: ["(cities)"]} }
      >
        { ( { getInputProps, suggestions, getSuggestionItemProps, loading } ) => (
          
        <div>
          <input {...getInputProps({ placeholder: 'City' } )} />
          <div>
            {loading ? <div>...loading</div> : null}
            {suggestions.map(suggestion => {
              const style = {
                backgroundColor: suggestion.active ? '#000000' : '#fff',
                color: suggestion.active ? '#fff' : '#000000'
              }
              return ( 
                <div key={suggestion.placeId} 
                {...getSuggestionItemProps(suggestion, { style } ) }>
                  {suggestion.description} 
                </div>
              );
            })}
          </div>
        </div> ) }
      </PlacesAutocomplete>
    </div>
  )
}

export default SearchBar;

SearchBar.propTypes = {
  city: PropTypes.array,
  retrieveCity: PropTypes.func,
  getInputProps: PropTypes.object,
  suggestions: PropTypes.object,
  getSuggestionItemProps: PropTypes.object,
  loading: PropTypes.object
};
