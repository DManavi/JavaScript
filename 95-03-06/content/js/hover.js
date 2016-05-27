
var googleWindow = undefined;

function changeWindowSize(){

    var width = document.getElementById('winWidth').value;

    var height = document.getElementById('winHeight').value;

    window.resizeTo(width, height);
}

function goGoogle(){

    window.open('http://google.com');
}

function goFullScreen() {

    window.moveTo(0,0);

    window.resizeTo(window.screen.availWidth , window.screen.availWidth);
}

function onEnter(e) {

    e.target.classList.add('large');
}

function onLeave(e) {

    e.target.classList.remove('large');
}

var thumbnails = document.getElementsByClassName('thumb');

for(var i = 0; i < thumbnails.length; i++) {

    var thumbnail = thumbnails[i];

    thumbnail.onmouseleave = onLeave;

    thumbnail.onmouseenter = onEnter;
}

var browserInfo = "URL:" + window.location;

browserInfo += '\r\n' + "Protocol:" + window.location.protocol;

browserInfo += '\r\n' + "Port:" + window.location.port;

browserInfo += '\r\n' + "Path:" + window.location.pathname;

document.getElementById('txtUrlInfo').innerText = browserInfo;