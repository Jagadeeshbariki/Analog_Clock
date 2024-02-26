function setClock() {
    

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Convert hours to 12-hour format
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // If hours is 0, set it to 12
  

  const hourDegrees = (hours % 12) * 30 + minutes * 0.5; // Each hour is 30 degrees, each minute is 0.5 degree
  const minuteDegrees = (minutes / 60) * 360; // Each minute is 6 degrees
  const secondDegrees = (seconds / 60) * 360; // Each second is 6 degrees

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  document.getElementById("dTime").innerHTML= `${hours}:${minutes}:${seconds} ${ampm}`
}

setInterval(setClock, 1000); // Update every second

setClock();