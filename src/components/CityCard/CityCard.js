import './CityCard.css';

const CityCard = ({name, hiTemp, loTemp, icon, weather}) => {

  // console.log(city, 'city prop in CityCard');
  return(
    <article className='city-card'>
      <h1>{name}</h1>
      <h3>Hi:{hiTemp} | Lo:{loTemp}</h3>
      {/* <h3></h3> */}
      <img src={icon}/>
      <h3>{weather}</h3>
    </article>
  )
};

export default CityCard;