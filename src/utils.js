export const cleanData = (data) => {

  data.weather[0].description = data.weather[0].description.split(" ").map((string) => { 
      return string[0].toUpperCase() + string.substring(1); 
  }).join(" "); //Capitolizes first letter of each word in daily description.
  
  data.main.temp_max = Math.round(((((data.main.temp_max) - 273.15) * 1.8)) + 32);

  data.main.temp_min = Math.round(((((data.main.temp_min) - 273.15) * 1.8)) + 32);

  data.isFavorited = false

  console.log(data, ' :data logged in utils.js');
  return data
}