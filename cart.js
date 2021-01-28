let CartData = {
    iphone: 1,
    iphonePrice: 1219,
    casing: 1,
    casingPrice: 59
}
let total = CartData.iphone * CartData.iphonePrice + CartData.casing * CartData.casingPrice
console.log(total);

function updateCart() {
    console.log('updating cart..');
    const iphoneCount = document.getElementById('iphoneCount');
    iphoneCount.value = CartData.iphone;
}
function updatePhone(number) {
    console.log("Phone number is", number)
}
function updateCasing(number) {
    console.log("Casing number is", number)
}

let iphoneReduce = document.querySelector('.iphone .minus');
iphoneReduce.addEventListener('click', function (event) {
    CartData.iphone -= 1;
    console.log(CartData.iphone)
});
let iphonePlus = document.querySelector('.iphone .plus');
iphonePlus.addEventListener('click', function (event) {
    CartData.iphone += 1;
    updateCart();
});
