var showCurrentTime = function()
{
    let clock = document.getElementById('clock');
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let clockTime = `${hours > 12 ? hours - 12 : hours}:${minutes > 10 ? minutes : '0' + minutes}:${seconds > 10 ? seconds : '0' + seconds} ${hours > 12 ? 'PM' : 'AM'}`;
    clock.innerText = clockTime;
};
showCurrentTime();
setInterval(showCurrentTime, 1000);