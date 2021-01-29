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
    const caseCount = document.getElementById('caseCount');
    const phonePrice = document.getElementById('phonePrice')
    const casePrice = document.getElementById('casePrice')
    iphoneCount.value = CartData.iphone;
    caseCount.value = CartData.casing;
    phonePrice.innerText = (CartData.iphonePrice * CartData.iphone);
    casePrice.innerText = (CartData.casingPrice * CartData.casing);
    // 
}
function updatePhone(number) {
    console.log("Phone number is", number)
}
function updateCasing(number) {
    console.log("Casing number is", number)
}
// Minus count
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
// Case Minus count
let caseMinus = document.querySelector('.casing .minus');
caseMinus.addEventListener('click', function () {
    if (CartData.casing > 0) {
        CartData.casing -= 1;
        total();
        updateCart();
    }
    else {
        console.log('Quantity is already 0.');
    }
});
// Plus count
let iphonePlus = document.querySelector('.iphone .plus');
iphonePlus.addEventListener('click', function () {
    CartData.iphone += 1;
    total();
    updateCart();
});
// Case Plus count
let casePlus = document.querySelector('.casing .plus');
casePlus.addEventListener('click', function () {
    CartData.casing += 1;
    total();
    updateCart();
});


// Merging function for two button
function reduceItem(item) {
    if (CartData.item > 0) {
        CartData.item -= 1;
        total();
        updateCart();
    }
    else {
        console.log('Quantity is already 0.');
    }
}