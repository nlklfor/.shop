const cart = function(){
    const cartBtn = document.querySelector('.button-cart')
const cart = document.getElementById('modal-cart')
const cartCls = document.querySelector('.modal-close')


cartBtn.addEventListener('click', function(){
    cart.style.display="flex";
    body.style.overflow="hidden"; 

})

cartCls.addEventListener('click' , function(){
    cart.style.display='none';
    body.style.overflow='visible';
})
}

cart();