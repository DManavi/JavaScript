
var sliderPointer = 0;

var images = [
    {
        "alt": "Sunset",
        "src": "./content/img/img1.jpg"
    },
    {
        "alt": "Sea",
        "src": "./content/img/img2.jpg"
    },
    {
        "alt": "Jungle",
        "src": "./content/img/img3.jpg"
    },
    {
        "alt": "Waterfall",
        "src": "./content/img/img4.jpg"
    }
];

function prev(){
    if(sliderPointer==0) {
        sliderPointer = images.length - 1;
    }
    else {
        sliderPointer--;
    }

    showImage(sliderPointer);
}

function next(){
    if(sliderPointer == images.length - 1) {

        sliderPointer = 0;
    }
    else {
        sliderPointer++;
    }

    showImage(sliderPointer);
}

function getImage(i) {
    return images[i];
}

function showImage(i) {
    var image = getImage(i);

    updateSlider(image.src, image.alt);
}

function updateSlider(src, alt) {

    var img = document.getElementById('imageSlider');

    console.log(img);

    img.src = src;

    img.alt = alt;
}

function changeBackgroundColor() {

    var div = document.getElementById('container');

    var color = document.getElementById('lstColors').value;

    div.style.backgroundColor = color;
}

var showBorder = false;

function toggleBorder() {

    var div = document.getElementById('container');

    if(showBorder) {
        div.style.borderStyle = 'none';
    }
    else {

        div.style.borderStyle = 'dashed';

        div.style.borderColor = 'red';

        div.style.borderWidth = '2px';
    }


    showBorder = !showBorder;
}

function changeWindowSize() {

    window.resizeTo(500, 500);

}

showImage(sliderPointer);