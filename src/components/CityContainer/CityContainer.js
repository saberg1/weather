import CityCard from '../CityCard/CityCard';
import './CityContainer.css';

const CityContainer = ({ cities, handleFavorite }) => {



  const updateFavorite = (data) => {
    // const test = data.isFavorited ? true : false 
    // data.isFavorited = test
       if (data.isFavorited) {
        data.isFavorited = false
        // removeFromFavorites(data)
      } else {
        data.isFavorited = true
        // addToFavorites(data)
      }
    console.log('data.isFavorited: ', data.isFavorited);
  }

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
          cities={ele}
          updateFavorite={updateFavorite}
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