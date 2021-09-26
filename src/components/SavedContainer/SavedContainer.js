import './SavedContainer.css';
import SavedCity from '../SavedCity/SavedCity';

const Saved = ({ favorites, handleFavorite }) => {
  // console.log(favorites.isFavorited, 'favorites');
  // const test = () => {
  //   favorites.forEach(ele => console.log(ele.isFavorited, ' ', ele.name, ' :isFavorited status'))
  // }

  // test()
  const savedCity = favorites.map( ele => {
    return (
      <SavedCity 
        key={ele.id}
        id={ele.id}
        name={ele.name}
        hiTemp={ele.main.temp_max}
        loTemp={ele.main.temp_min}
        fav={ele.isFavorited}
        // icon={ele.weather[0].icon}
        weather={ele.weather[0].description}
        city={ele}
        handleFavorite={handleFavorite}
      />
    )
  })
return (
  <section className='city-container'>
    {/* <p>hello</p> */}
    {/* <SavedCity /> */}
    {savedCity}
  </section>
)
};

export default Saved;