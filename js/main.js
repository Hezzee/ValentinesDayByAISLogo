

// попап окно открытие 
$('.open_popup').click(function(){
    $('.popupbg').fadeIn(1000);
    $('.heart_body').fadeOut(1000);
    $('.massage').fadeOut(1000);
    $('.runer_element').fadeOut(500);
    $('.bubbly-button').fadeOut(600);
    heart();
});


// попап окно закрытие
$('.popupbg').click(function(){
    $('.popupbg').fadeOut(600);
    $('.heart_body').fadeIn(600);
    $('.massage').fadeIn(600);
    $('.runer_element').fadeIn(600);
    $('.bubbly-button').fadeIn(600);
    $('.popup_bg_heart').remove();
});


// попап окно (сердечки на задний фон)
function heart(){
    
    for (let i = 0; i < 100; i++) {
        
        div=$('<img class="popup_bg_heart" src="./img/free-icon-heart-smile.png" alt="">');
        div.appendTo('div#popupbgJS').css({left:Math.random()*100+'%',top:Math.random()*100+'%'} );
        div=$('<img class="popup_bg_heart" src="./img/free-icon-heart.png" alt="">');
        div.appendTo('div#popupbgJS').css({left:Math.random()*100+'%',top:Math.random()*100+'%',} );
    }
    
    popup = $('<div><img class="popup" src="./img/free-icon-teddy-bear-3769084.png" alt=""><img class="close_popup" src="./img/free-icon-cancel-181661.png" alt=""><p class="popup_text">Happy Valentines day!</p><p class="popup_text2">by <img class="logoAIS popup_text2" src="./img/aisLOGO.png" alt=""></p><p id="poshalka">wsg контора пидорасов </p></div>');
    popup.appendTo('div#popupbgJS');
    
}





//вывод купидончиков

let NumberOfCupids = 10;
if(window.innerWidth<540){
    NumberOfCupids = 3;
}else if(window.innerWidth<900){
    NumberOfCupids = 7;
}
for(let j = 0; j<NumberOfCupids;j++){
    div=$('<img class="runer_element" src="./img/free-icon-cupid-3939748.png" alt=""></img>');
    div.appendTo('body').css({left:Math.random()*100+'%',top:Math.random()*100+'%'} );
}





var elements = document.querySelectorAll('.runer_element');

elements.forEach(function(element) {
    setInterval(function() {moveElement(element);}, 1500); // интервал для замедления, по своему усмотрению
});

//функция для полётов 
function moveElement(element) {

    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;


    let range = 250; // расстояние от центра котрое елементы будут избегать 
    if(window.innerWidth<540){ //одоптация для купидонов
        range = 20;
    }
    
     
    
    var top = 0;
    var left = 0;
    // одоптация для полётов кпилона  
    if(window.innerWidth<540){
        do {
            top = Math.random() * ((window.innerHeight-50) - 100) + 100;
            left = Math.random() * ((window.innerWidth-50) - 100) + 100;
        } while (Math.abs(top - centerY) < range && Math.abs(left - centerX) < range);
    }else if(window.innerWidth < 900){
        do {
            top = Math.random() * ((window.innerHeight-100) - 100) + 100;
            left = Math.random() * ((window.innerWidth-100) - 100) + 100;
        } while (Math.abs(top - centerY) < range && Math.abs(left - centerX) < range);
    }else{
        do {
            top = Math.random() * window.innerHeight;
            left = Math.random() * window.innerWidth;
        } while (Math.abs(top - centerY) < range && Math.abs(left - centerX) < range);
    }
    

    element.style.top = top + 'px';
    element.style.left = left + 'px';

    
}

