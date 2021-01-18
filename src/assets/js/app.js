document.addEventListener("DOMContentLoaded", function(event) { 
    let badgePurchase = document.querySelectorAll('.product-item__badge-purchase');
    
    //add class .active  for class .product-item__badge-purchase
    badgePurchase.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    let radioButton = document.querySelectorAll('radio-buttons-item');
    
    radioButton.forEach(function(e)  {
        e.addEventListener('change',  function () {
            if ( this.checked ) {
                this.removeAttribute('disabled');
        }else {
            this.setAttribute('disabled', 'true');
        }
    })});


//Dropdown menu

document.querySelectorAll('.toggler').forEach(item => {
    item.addEventListener('click',  function (event) {  
        this.classList.add('active');          
        if(event.target.classList.contains('active')) {
        event.preventDefault();   
        let drop = event.target.querySelectorAll('.dropdown-list');     
        drop.forEach(function(e) { 
            if (!e.classList.contains('visible')) {
                e.classList.add('visible');
                e.style.height = 'auto'; 
                let height = e.clientHeight + 'px';
                e.style.height = '0px';     
                setTimeout(function () {
                    e.style.height = height;
                }, 0);
            } else {
                event.target.classList.remove('active');          
                e.style.height = '0px';   
                e.addEventListener('transitionend', 
                    function () {
                        e.classList.remove('visible');                   
                    }, {
                        once: true
                });          
            }
          });

        }
    }
)});
        
// Count

        let dec = document.querySelectorAll('.product-item__button-decrease');
        let inc = document.querySelectorAll('.product-item__button-increase');
        let countInput = document.querySelectorAll('.product-item__count-input');

        dec.forEach((elem) => { 
            elem.addEventListener('click', function(e) {
                countInput.forEach((item) => {
                    if ( item.value <= 1 ) {
                        item.value = 1;
                        } else {  
                    --e.target.parentElement.querySelector('.product-item__count-input').value;
                        }
                });
            });             
        });

        inc.forEach(elem => { 
            elem.addEventListener('click', function(e) {    
                ++e.target.parentElement.querySelector('.product-item__count-input').value;            
            });
        });

     
        

        
    
  });
