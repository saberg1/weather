import CityCard from '../CityCard/CityCard';
import './CityContainer.css';

const CityContainer = ({ cities }) => {

    const cityCards = cities.map( ele => {
      return (
        <CityCard 
          key={ele.id}
          id={ele.id}
          name={ele.name}
          hiTemp={ele.main.temp_max}
          loTemp={ele.main.temp_min}
          // icon={ele.weather[0].icon}
          weather={ele.weather[0].description}
        />
      )
    })
  return (
    <section className='city-container'>
      {/* <p>hello</p> */}
      {cityCards}
    </section>
  )
};

export default CityContainer;