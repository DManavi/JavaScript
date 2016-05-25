
// images (loaded from web service or any source)
var images = [
    {
        id: "img1",
        extension: "jpg",
        isDefault: false,
        description: "Sunset",
        order: 5
    },
    {
        id: "img2",
        extension: "jpg",
        isDefault: false,
        description: "Sea",
        order: 10
    },
    {
        id: "img3",
        extension: "jpg",
        isDefault: true,
        description: "Jungle",
        order: 15
    },
    {
        id: "img4",
        extension: "jpg",
        isDefault: false,
        description: "Waterfall",
        order: 20
    }
];

function showImage(image){

    // if provided image is an array
    if(Array.isArray(image)) {

        // if image array is empty
        if(image.length==0) {

            // show empty template
            showEmptyTemplate();
        }
        else {

            // sort images by their order
            image = image.sort(function (a, b) {
                return (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0);
            });

            // iterate all images available in list
            for (var i = 0; i < image.length; i++) {

                // show all images
                showImage(image[i]);
            }

            // create placeholder div
            var imgPlaceHolder = document.createElement('img');

            // set placeholder id
            imgPlaceHolder.id = 'placeholder';

            // set class name
            imgPlaceHolder.className = 'big featured';

            // add clear div to thumbnails
            document.getElementsByClassName('container')[0].appendChild(imgPlaceHolder);

            // show default image
            showDefaultImage();
        }
    }
    else { // one image provided

        // validate image object
        if(isValid(image)){

            // set image attributes
            var img = document.createElement('img');

            // set image alt text
            img.alt = image.description;

            // set image
            img.id = image.id;

            // set image source
            img.src = thumbnailImage(image);

            // set thumbnail image class name
            img.className = 'thumb';

            img.onclick = onThumbnailClicked;

            // add generated div to the list of thumbnail items
            document.getElementsByClassName('container')[0].appendChild(img);
        }
    }
}

function isValid(image) {

    // create output variable
    var output = false;

    // if image is an object
    if(typeof image == "object"){

        output = image.id && image.extension;
    }

    // return validation result to the caller
    return output;
}

function thumbnailImage(image) {

    var output = null;

    var id = image.id.split('-')[0];

    // set output file name
    output = './content/img/' + id + '-tn' + '.' + image.extension;

    // return thumbnail image address to the caller
    return output;
}

function fullImage(image){

    var output = null;

    var id = image.id.split('-')[0];

    // set output file name
    output = './content/img/' + id + '-full' + '.' + image.extension;

    // return thumbnail image address to the caller
    return output;
}

function showDefaultImage(){

    // iterate all images
    for(var i = 0; i < images.length; i++){

        // match image by id
        if(images[i].isDefault) {

            onThumbnailClicked( {
               target: {
                   id: images[i].id
               }
            });

            // break the loop
            break;
        }
    }
}

function findImageById (id) {

    // create output variable
    var image = undefined;

    // iterate all images
    for(var i = 0; i < images.length; i++){

        // match image by id
        if(images[i].id == id) {

            // set i th image to output
            image = images[i];

            // break the loop
            break;
        }
    }

    // return found image to the caller
    return image;
}

function onThumbnailClicked(e) {

    // find placeholder
    var placeholder = document.getElementById('placeholder');

    // find image in collection by id
    var image = findImageById(e.target.id);

    // set placeholder image
    placeholder.src = fullImage(image);

    // set placeholder alt
    placeholder.alt = image.description;
}

function showEmptyTemplate() {

    // get thumbnails div
    var divThumbnails = document.getElementById('thumbnails');

    console.log(divThumbnails);

    var emptyText = document.createElement('h2');

    emptyText.innerText = 'هیچ عکسی وجود ندارد';

    divThumbnails.appendChild(emptyText);
}

// create image from images
showImage(images);