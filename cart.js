let CartData = {
    iphone: 1,
    iphonePrice: 1219,
    casing: 1,
    casingPrice: 59,
    total: 1278
}
function total() {
    let total = CartData.iphone * CartData.iphonePrice + CartData.casing * CartData.casingPrice
    CartData.total = total;
};
// console.log(total);

function updateCart() {
    // Update Phone count
    const iphoneCount = document.getElementById('iphoneCount');
    const phonePrice = document.getElementById('phonePrice')
    iphoneCount.value = CartData.iphone;
    phonePrice.innerText = (CartData.iphonePrice * CartData.iphone);
    console.log(CartData.iphonePrice)
    // 
}
function updatePhone(number) {
    console.log("Phone number is", number)
}
function updateCasing(number) {
    console.log("Casing number is", number)
}

let iphoneReduce = document.querySelector('.iphone .minus');
iphoneReduce.addEventListener('click', function () {
    if (CartData.iphone > 0) {
        CartData.iphone -= 1;
        total();
        updateCart();
    }
    else {
        console.log('Quantity is already 0.');
    }
});
let iphonePlus = document.querySelector('.iphone .plus');
iphonePlus.addEventListener('click', function () {
    CartData.iphone += 1;
    total();
    updateCart();
});
