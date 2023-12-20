function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

            const hourElement = document.getElementById('hour');
            const minuteElement = document.getElementById('minute');
            const secondElement = document.getElementById('second');

            const hourRotation = (hours + minutes / 60) * 360 / 12;
            const minuteRotation = (minutes + seconds / 60) * 360 / 60;
            const secondRotation = seconds * 360 / 60;

    hourElement.style.transform = `rotate(${hourRotation}deg)`;
    minuteElement.style.transform = `rotate(${minuteRotation}deg)`;
    secondElement.style.transform = `rotate(${secondRotation}deg)`;
     }

  setInterval(updateClock, 1000);
  updateClock(); 

  function updateCurrentTime() {  
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;


    document.getElementById('currentTime').innerText = 'Current Time: ' + timeString;
  }

        setInterval(updateCurrentTime, 1000);


        updateCurrentTime();

