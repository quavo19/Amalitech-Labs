
function Clock(format = 24) {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
    this.format = format;
  }
  
  Clock.prototype.getFormattedTime = function() {
    let hours = this.hours;
    if (this.format === 12) {
      hours = this.hours % 12 || 12;
    }
    const minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    const seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    const period = this.hours >= 12 ? 'PM' : 'AM';
    return this.format === 12 ? `${hours}:${minutes}:${seconds} ${period}` : `${hours}:${minutes}:${seconds}`;
  };
  
  function updateClock() {
    const clock = new Clock();
    document.getElementById('clockDisplay').innerText = clock.getFormattedTime();
  }
  
  setInterval(updateClock, 1000);
  
  let alarmTime = null;
  
  function setAlarm() {
    alarmTime = document.getElementById("alarmTime").value;
    document.getElementById("alarmStatus").innerText = "Alarm set for " + alarmTime;
  }
  
  function checkAlarm() {
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTime = `${currentHours}:${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}`;
    
    if (alarmTime === currentTime) {
      alert("Alarm ringing!");
      document.getElementById("alarmStatus").innerText = "Alarm ringing!";
      alarmTime = null;
    }
  }
  
  setInterval(checkAlarm, 60000);
  