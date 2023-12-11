
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

const leftSlidebserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('showlefthidden');
        }
        else{
            entry.target.classList.remove('showlefthidden');
        }
    });
});

const leftsideElements = document.querySelectorAll('.fromlefthidden');
leftsideElements.forEach((el) => leftSlidebserver.observe(el))