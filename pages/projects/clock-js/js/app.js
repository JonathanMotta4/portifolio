alert('Esse é um dos projetos temporários, assim que os mais complexos ficarem prontos ele será substituído.')
let interval = setInterval(digital_clock, 1000);

function digital_clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let clock = document.querySelector("h1#clock");
  clock.innerHTML = hours + " : " + minutes + " : " + seconds;

  let body = document.querySelector("body");
  if (hours > 0 && hours < 6) {
    body.style.background = "#181818";
  } else if (hours >= 12 && hours < 18) {
    body.style.background = "#b47629";
  } else {
    body.style.background = "#1b093d";
  }
}
