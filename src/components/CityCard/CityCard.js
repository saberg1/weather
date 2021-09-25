import './CityCard.css';

const CityCard = ({ updateFavorite, cities, name, hiTemp, loTemp, icon, weather }) => {

  // const test = () => {

  //   console.log(cities, 'cities prop in CityCard');
  // }
  
  return(
    <article className='city-card'>
      <h1>{name}</h1>
      <h3>Hi:{hiTemp} | Lo:{loTemp}</h3>
      {/* <h3></h3> */}
      <img src={icon}/>
      <h3>{weather}</h3>
      <button className='favorite' 
        onClick={() => updateFavorite(cities)}>❤️</button>
    </article>
  )
};

export default CityCard;