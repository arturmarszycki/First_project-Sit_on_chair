document.addEventListener("DOMContentLoaded", function() {

    var agree = document.querySelector('.agree-img')
    var agreeImg = document.querySelector('.agree-img img');
    agree.addEventListener('click', function() {
        if(agreeImg.style.display === "none") {
            agreeImg.style.display = "block";
        } else {
            agreeImg.style.display = "none";
        }
    });

    var navMenu = document.querySelector('.nav-menu').firstElementChild;
    navMenu.addEventListener('mouseover', function() {
        var dropMenu = this.querySelector('.drop-down-menu');
        if (dropMenu) {
            dropMenu.style.display = "block";
        }
    });

    navMenu.addEventListener('mouseout', function() {
        var dropMenu = this.querySelector('.drop-down-menu');
        if (dropMenu) {
            dropMenu.style.display = "none";
        }
    });

})