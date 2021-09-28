// import { cleanData } from '../../utils';
// import { cleanData } from "./utils"

// export const fetchData = async (city, coordinates) => {

//   const apiKey = 'adb5990def9e15662c0b51eae2be289d'

//   const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  
//   return [data]
  // return cleanData(data)
  // console.log('success to fetchData invoked apicalls');
  // return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  // return fetch(`api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&APPID=${apiKey}`)
    // .then(res => res.ok ? res.json() : console.log(res))
    // .then(data => console.log(data))
    // .then(data => data)
// }

//const icon =  http://openweathermap.org/img/wn/${icon}@2x.png -- data.weather[0].icon

export const fetchData = (city) => {

  let apiKey = 'adb5990def9e15662c0b51eae2be289d'

  
  // console.log('success to fetchData invoked apicalls');
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  // return fetch(`api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&APPID=${apiKey}`)
    .then(res => res.ok ? res.json() : console.log(res))
    // .then(data => console.log(data))
    .then(data => data)
}