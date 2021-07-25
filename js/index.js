const payment = document.querySelector('.payment')

//click pay Now button in price section 
// will open the payment popup window
const btns = document.querySelectorAll('.price-card__pay-btn');
        for (var i = 0; i < btns.length; i++) {
            btns[i].onclick = function() {
                payment.style.display = 'block';
            }
        }

//click close button in the popup window payment
//will close popup payment windowconst payment = document.querySelector('.payment')
const close = document.querySelector('.payment__close');
close.onclick = function() {
        payment.style.display = 'none';
}


var animateButton = function(e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
