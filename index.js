let currentSlide = 0;

function goPrev (){
    currentSlide --;
    if( currentSlide < 0){
        currentSlide = 2;
    }
    updateMargin()
}

function goNext (){
    currentSlide ++;
    if( currentSlide > 2){
        currentSlide = 0;
    }
    updateMargin()
}

function updateMargin(){
    let slideWidth = document.querySelector('.slide').clientWidth;
    let newMargin = (currentSlide * slideWidth);
    document.querySelector('.slide-width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 3000);


