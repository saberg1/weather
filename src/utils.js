export const cleanData = (data) => {
  
  data.weather[0].description = data.weather[0].description.split(" ").map((string) => { 
      return string[0].toUpperCase() + string.substring(1); 
  }).join(" ");

  data.main.temp_max = Math.round(((((data.main.temp_max) - 273.15) * 1.8)) + 32);
  data.main.temp_min = Math.round(((((data.main.temp_min) - 273.15) * 1.8)) + 32);
  data.isFavorited = false
  return data
}