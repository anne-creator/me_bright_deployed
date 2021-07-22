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
