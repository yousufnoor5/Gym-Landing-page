
let a = 0;

let menubtn = document.getElementById('menubtn');
let menuview = document.getElementById('menuview');


menubtn.addEventListener('click', function () {

    if (a === 0) {
        menuview.classList.remove('navbarclose2');

        menuview.classList.add('navbaropen');
        menuview.classList.remove('navbarclose');
        
        a = 1;
       //console.log('open');
    }
    else {
        menuview.classList.add('navbarclose');
        
        a = 0;
        
       // console.log('close');

        setTimeout(timer, 300)

        function timer() {
            menuview.classList.add('navbarclose2');
    
        }

    }




})

