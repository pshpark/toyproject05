function init(){
    const btnCart = document.querySelector(".cart_area");
    const cartBox = document.querySelector(".cart_box");

    btnCart.addEventListener("click",function(){
        showEffect(cartBox,btnCart);
    });

    function showEffect(a,b){
        if( a.classList.contains("active") ){
            a.classList.remove("active");
            b.classList.remove("active");
        } else {
            a.classList.add("active");
            b.classList.add("active");
        }
    };
};
window.onload = init;