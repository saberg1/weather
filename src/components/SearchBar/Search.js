import { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import './Search.css';

const SearchBar = ({ retrieveCity }) => {
  const [city, setCity] = useState('')
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  })

  const handleClick = (city) => {
    // console.log(retrieveCity, ' :props on handleClick');
    const formatedCity = city.split(' ')[0]
    retrieveCity(formatedCity)
    // console.log(value.split(' ')[0], ' :state on handleClick ');
  }

  const handleSelect = async (value) => {
    // console.log('handleSelect invoked');
    const result = await geocodeByAddress(value)
    const latLng = await getLatLng(result[0])
    setCoordinates(latLng)
    setCity(value)
    handleClick(value)
  }

  return(
    <div className='search'>
      <PlacesAutocomplete value={city} onChange={setCity} onSelect={handleSelect}>
        { ( { getInputProps, suggestions, getSuggestionItemProps, loading } ) => (
        <div>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
          <input {...getInputProps({ placeholder: 'City' } )} />

          <div>
            {loading ? <div>...loading</div> : null}
            {suggestions.map(suggestion => {
              const style = {
                backgroundColor: suggestion.active ? '#000000' : '#fff',
                color: suggestion.active ? '#fff' : '#000000'
              }
              return ( 
                <div {...getSuggestionItemProps(suggestion, { style } ) }>
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