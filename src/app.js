function setDate() {
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');
  const digitalClock = document.getElementById('digital-time');
  const date = new Date();

  const seconds = date.getSeconds();
  const secondsDegrees = seconds / 60 * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = date.getMinutes();
  const minutesDegrees = minutes / 60 * 360 + seconds / 60 * 6 + 90;
  console.log(minutesDegrees);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = date.getHours();
  const hoursDegrees = hours / 12 * 360 + minutes / 60 * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(setDate, 1000);

setDate();
