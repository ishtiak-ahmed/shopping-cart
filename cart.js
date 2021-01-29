let CartData = {
    iphone: 1,
    iphonePrice: 1219,
    casing: 1,
    casingPrice: 59,
    subTotal:
        function () {
            return this.iphone * this.iphonePrice + this.casing * this.casingPrice;
        },
    tax: function () {
        return Math.round(this.subTotal() * .1);
    },
    phoneCount: function (isIncrease) {
        if (isIncrease) {
            this.iphone += 1;
        } else {
            if (this.iphone > 0) this.iphone -= 1;
        }
    },
    caseCount: function (isIncrease) {
        if (isIncrease) {
            this.casing += 1;
        } else {
            if (this.casing > 0) this.casing -= 1;
        }
    }
}

function updateCart() {
    // Update Phone count
    const iphoneCount = document.getElementById('iphoneCount');
    const caseCount = document.getElementById('caseCount');
    const phonePrice = document.getElementById('phonePrice')
    const casePrice = document.getElementById('casePrice');
    const subTotal = document.getElementById('subTotal');
    const total = document.getElementById('total');
    const tax = document.getElementById('tax');

    iphoneCount.value = CartData.iphone;
    caseCount.value = CartData.casing;
    phonePrice.innerText = (CartData.iphonePrice * CartData.iphone);
    casePrice.innerText = (CartData.casingPrice * CartData.casing);
    subTotal.innerText = CartData.subTotal();
    tax.innerText = CartData.tax();
    total.innerText = (CartData.subTotal() + CartData.tax());
}

// Phone Minus count
function updatePhoneCount(isIncrease) {
    CartData.phoneCount(isIncrease);
    updateCart();
};

// Counting Casing
function updateCaseCount(isIncrease) {
    CartData.caseCount(isIncrease);
    updateCart();
}