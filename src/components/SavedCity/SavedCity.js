import './SavedCity.css';
import saved from '../../images/saved.png'
import unsaved from '../../images/unsaved.png'

const SavedCity = ({ name, weather, handleFavorite, city }) => {

  // const test = () => {

  //   console.log(cities, 'cities prop in SavedCity');
  // }
  // const toggleImage = () => {
  //   const image = fav ? '❤️' : '♡'
  // }

  // console.log(props, 'test');
  return(
    <article className='city-card'>
      <h1>{name}</h1>
      {/* <h3>Hi:{hiTemp} | Lo:{loTemp}</h3> */}
      {/* <h3></h3> */}
      {/* <img src={icon}/> */}

      <h3>{weather}</h3>
      {/* <img className='favorite' 
        src={fav ? saved : unsaved}
        onClick={() => updateFavorite(cities)} /> */}
        <button onClick={() => handleFavorite(city)}>favBtn</button>
    </article>
  )
};

export default SavedCity;