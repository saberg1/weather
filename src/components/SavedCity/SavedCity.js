import './SavedCity.css';
import saved from '../../images/saved.png'
import unsaved from '../../images/unsaved.png'

const SavedCity = ({ name,hiTemp, loTemp, fav, icon, weather, handleFavorite, city }) => {

  return(
    <article className='city-card'>
      <div className='card-header'>
        <h1>{name}</h1>
        <img className='favorite' src={fav ? saved : unsaved} onClick={() => handleFavorite(city)} />
      </div>
      <h3>Hi:{hiTemp} | Lo:{loTemp}</h3>
      <img className='icon-img' alt='icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
      <h3>{weather}</h3>
    </article>
  )
};

export default SavedCity;