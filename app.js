var images = document.querySelectorAll('.image img');
var pre = document.querySelector('.pre');
var right = document.querySelector('.right');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) {
        pre.classList.add('hide')
    } else {
        pre.classList.remove('hide')
    }

    if (currentIndex >= images.length - 1) {
        right.classList.add('hide');
    } else {
        right.classList.remove('hide');
    }


    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show');
}

images.forEach((item,index) => {
    item.addEventListener('click',function() {
        currentIndex = index;
        showGallery();
    })
})

close.addEventListener('click', function() {
    gallery.classList.remove('show')
})

document.addEventListener('keydown',function(e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})

right.addEventListener('click', function() {
    if (currentIndex <= images.length - 1) {
        currentIndex++;
    }    
    showGallery()
})

pre.addEventListener('click',function() {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})