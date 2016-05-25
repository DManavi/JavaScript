
function displayDateInfo(){

    var date = new Date();

    document.getElementById('lblCurrentDate').innerText = date.toDateString();

    var array = [ 10,5,70,94,23,67,193,20,4,70 ];

    document.getElementById('lblArray').innerText = array.join(', ');

    array.sort(function (a, b) {
        return (a > b) ? 1 : ((b > a) ? -1 : 0);
    });

    document.getElementById('lblSortedArray').innerText = array.join(', ');

    array.reverse();

    document.getElementById('lblReverseSortedArray').innerText = array.join(', ');

    var random = Math.random();

    document.getElementById('lblRandomNumber').innerText = random;

    var randomElementPosition = 0 + (random * array.length);

    var randomElement = array[Math.floor(randomElementPosition)];

    document.getElementById('lblRandomArrayItem').innerText = randomElement;
}

var showCollon = false;

function updateCurrentTime() {

    var date = new Date();

    var separator = showCollon ? ":" : ' ';

    var time = (date.getHours() < 10 ? '0' : '') + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + separator + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    document.getElementById('lblCurrentTime').innerText = time;

    time = (date.getUTCHours() < 10 ? '0' : '') + date.getUTCHours() + ":" + (date.getUTCMinutes() < 10 ? '0' : '') + date.getUTCMinutes() + separator + (date.getUTCSeconds() < 10 ? '0' : '') + date.getUTCSeconds();

    document.getElementById('lblUtcTime').innerText = time;

    showCollon = !showCollon;
}

displayDateInfo();

setInterval(updateCurrentTime, 500);