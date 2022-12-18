const button = document.querySelector('.container button');
const textJokes = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getJoke);

button.addEventListener('click', getJoke);

function getJoke() {
  fetch("https://icanhazdadjoke.com/",{
    headers:{
      'Accept': "application/json"
    }
  }).then(data=> data.json())
    .then(obj=> textJokes.innerHTML = obj.joke)
}