let button = document.querySelector('#button')
let name = document.querySelector('#name')
let population = document.querySelector('#population')
let climate = document.querySelector('#climate')
let terrain = document.querySelector('#terrain')





function getInfo() {
  let randomNumber = Math.floor((Math.random() * 88) + 1)
  let apiUrl = 'https://swapi.co/api/planets/' + randomNumber

  axios.get(apiUrl).then(response => {
    updateInfo(response.data)
  }).catch(e => {
    console.log('there was an error')
  })

}

function updateInfo(data) {
  name.innerText = data.name
  population.innerText = `População: ${data.population}`
  climate.innerText = `Clima: ${data.climate}`
  terrain.innerText = `Terreno: ${data.terrain}`
}


button.addEventListener('click', getInfo)

