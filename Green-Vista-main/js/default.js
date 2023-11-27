
function stickyNav () {
    window.addEventListener('scroll', function(){
        var scrollPosition = this.scrollY;
        if(scrollPosition > 1500 || scrollPosition < 150) {
            this.document.querySelector('.navbar').classList.add('sticky-bar');
            this.document.querySelector('.navbar').classList.remove('fade');
            if(scrollPosition > 1500) {
                this.document.querySelector('.navbar').classList.add('sticky-bar-shadow');
            }
        }
        else {
            this.document.querySelector('.navbar').classList.remove('sticky-bar');
            this.document.querySelector('.navbar').classList.add('fade');
            this.document.querySelector('.navbar').classList.remove('sticky-bar-shadow');
        }
    })
}


function toggleMenu() {
    document.addEventListener('click', function(e) {
        if(e.target.classList.contains('menu-icon')) {
            var hMenu = document.querySelector('.menu-hamburger');
            if(hMenu.classList.contains('visible')) {
                hMenu.classList.remove('visible');
            }
            else{
                hMenu.classList.add('visible');
            }
        }
    })
}


document.addEventListener('DOMContentLoaded', function() {
    stickyNav();
    toggleMenu();
})
