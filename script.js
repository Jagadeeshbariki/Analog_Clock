function setClock() {
    // Function to get current Indian Standard Time (IST)
    function getCurrentIST() {
      let date = new Date();
      let currentUTCTime = date.getTime();
      let ISTOffset = 5.5 * 60 * 60 * 1000;
      let ISTTime = new Date(currentUTCTime + ISTOffset);
    
      // Format the IST time as HH:MM:SS
      let hours = ISTTime.getHours()+1;
      let minutes = ISTTime.getMinutes().toString().padStart(2, '0');
      let sec = ISTTime.getSeconds().toString().padStart(2, '0');;
      
      return [hours, minutes, sec];
    }
    const timeParts = getCurrentIST();
    const hours = (timeParts[0]);
    const minutes = (timeParts[1]);
    const seconds = (timeParts[2]);

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

    

  const hourDegrees = (hours % 12) * 30 + minutes * 0.5; // Each hour is 30 degrees, each minute is 0.5 degree
  const minuteDegrees = (minutes / 60) * 360; // Each minute is 6 degrees
  const secondDegrees = (seconds / 60) * 360; // Each second is 6 degrees

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  document.getElementById("dTime").innerHTML= `${timeParts.join(":")}`
}

setInterval(setClock, 1000); // Update every second

setClock();