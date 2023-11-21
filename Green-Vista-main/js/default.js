
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


document.addEventListener('DOMContentLoaded', function() {
    stickyNav();
})