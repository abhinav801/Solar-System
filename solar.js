// For solar System
 let submit = document.getElementById('submit')
 let weight = document.getElementById('weight')
 let planet = document.getElementById('Planet')
 let image = document.getElementById('img')
 let weightTag = document.getElementById('weightTag')
 let planetName = document.getElementById("planetName");

image.style.backgroundImage

console.log('hello world')

let selectedPlanet
let totWeight
 planet.addEventListener('click' , function(e){
    selectedPlanet = e.target.value
 })
 weight.addEventListener('input' , function(e){
    totWeight = e.target.value
 })

 submit.addEventListener('submit' , function(e){
    e.preventDefault();

    switch(selectedPlanet) {
        case 'earth':
          image.style.backgroundImage = 'url("./img/earth.png")'
          weightTag.innerHTML = totWeight
          planetName.innerHTML = selectedPlanet.toUpperCase()
          break;
        case 'jupiter':
          image.style.backgroundImage = 'url("./img/jupiter.png")'
          weightTag.innerHTML = totWeight * 2.5275 + "Kg"
          planetName.innerHTML = selectedPlanet.toUpperCase()
          break;
        case 'saturn':
          image.style.backgroundImage = 'url("./img/saturn.png")'
          weightTag.innerHTML = totWeight * 1.06375 + "Kg"
          planetName.innerHTML = selectedPlanet.toUpperCase()
        break;
        case 'mars':
          image.style.backgroundImage = 'url("./img/mars.png")'
          weightTag.innerHTML = totWeight * 0.37625 + "Kg"
          planetName.innerHTML = selectedPlanet.toUpperCase()
         break;
         case 'neptune':
          image.style.backgroundImage = 'url("./img/neptune.png")'
          weightTag.innerHTML = totWeight * 1.125 + "Kg"
          planetName.innerHTML = selectedPlanet.toUpperCase()
            break;
        case 'moon':
          image.style.backgroundImage = 'url("./img/moon.png")'
          weightTag.innerHTML = totWeight * 0.165 + "Kg"
          planetName.innerHTML = selectedPlanet.toUpperCase()
            break;
        case 'mercury':
          image.style.backgroundImage = 'url("./img/mercury.png")'
          weightTag.innerHTML = totWeight * 0.3775 + "Kg"
          planetName.innerHTML = selectedPlanet.toUpperCase() 
          break;
        case 'venus':
          image.style.backgroundImage = 'url("./img/venus.png")'
          weightTag.innerHTML = totWeight * 0.90625 + "Kg"
          planetName.innerHTML = selectedPlanet.toUpperCase()
            break;
        case 'uranus':
          image.style.backgroundImage = 'url("./img/uranus.png")'
          weightTag.innerHTML = totWeight * 0.88875 + "Kg"
          planetName.innerHTML = selectedPlanet.toUpperCase()
            break;
        case 'pluto':
          image.style.backgroundImage = 'url("./img/pluto.png")'
          weightTag.innerHTML = totWeight * 0.06625 + "Kg"
          planetName.innerHTML = selectedPlanet.toUpperCase()
            break; 
        default:
          weightTag.innerHTML = totWeight
          planetName.innerHTML = selectedPlanet.toUpperCase()
      }

 })
