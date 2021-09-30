export const fetchData = (city) => {

  let apiKey = 'adb5990def9e15662c0b51eae2be289d'

  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(res => res.ok ? res.json() : console.log(res))
    .then(data => data)
}