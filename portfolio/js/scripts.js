// Everything OK?
console.log('OK');

// Output Current Year
$('.currentYear').text( (new Date).getFullYear() );


// lightGallery
$('#lightgallery').lightGallery({
    thumbnail: false,
    fullScreen: true,
    animateThumb: false,
    showThumbByDefault: false,
    zoom: false,
    download: false,
    mode: 'lg-zoom-in-big',
    scale: 1
});