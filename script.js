const product = {
    plainBurger:{
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 500,
        amount: 0,
        get summ(){
            return this.price * this.amount;
        },
        get kl(){
            return this.kcall * this.amount;
        }
    },
    freshBurger:{
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 700,
        amount: 0,
        get summ(){
            return this.price * this.amount;
        },
        get kl(){
            return this.kcall * this.amount;
        }
    },
    freshCombo:{
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 1000,
        amount: 0,
        get summ(){
            return this.price * this.amount;
        },
        get kl(){
            return this.kcall * this.amount;
        }
    }
}

const extraProduct = {
    doubleMayonnaise:{
        name: 'Двойной майонез',
        price: 1000,
        kcall: 100
    },
    lettuce:{
        name: 'Салатный лист',
        price: 500,
        kcall: 50
    },
    cheese:{
        name: 'Сыр',
        price: 5000,
        kcall: 500
    },
    
}

const btnPluseOrMinuse = document.querySelectorAll('.main__product-btn');
const checkExtraProduct = document.querySelectorAll('.main__product-checkbox');
const addCart = document.querySelector('.addCart');
const mainProductNum = document.querySelectorAll('.main__product-num');

for(let i = 0; i < btnPluseOrMinuse.length; i++){
    btnPluseOrMinuse[i].addEventListener('click', function() {
        pluseOrMinus(this);
    })
}


/// + i -
function pluseOrMinus(element) {
    console.log(element);
    // closest()
    
    let parentId = element.closest('.main__product').getAttribute('id');
    let out = element.closest('.main__product').querySelector('.main__product-num');
    let price = element.closest('.main__product').querySelector('.main__product-price span');
    let kcall = element.closest('.main__product').querySelector('.main__product-call span');
    
    if(element.getAttribute('data-symbol') == '+' && product[parentId].amount < 50){
        product[parentId].amount++;
    }
    
    else if(element.getAttribute('data-symbol') == '-' && product[parentId].amount > 0){
        product[parentId].amount--;
    }
    
    
    out.innerHTML = product[parentId].amount;
    price.innerHTML = product[parentId].summ;
    kcall.innerHTML = product[parentId].kl;
}
for (let i = 0; i < checkExtraProduct.length; i++) {
    checkExtraProduct[i].addEventListener('click', function () {
        // console.log( checkExtraProduct[i]);
        addExtraProduct(checkExtraProduct[i]);
    })
}
function addExtraProduct(el) {
    // console.log(el);
    
    const parent = el.closest('.main__product');
    const parentId = parent.getAttribute('id');
    product[parentId][el.getAttribute('data-extra')] = el.checked;
    // console.log(product[parentId][el.get.getAttribute('data-1')]);
    
    const kcall = parent.querySelector('.main__product-call span ');
    const price = parent.querySelector('.main__product-price span');
    const elDataInfo = el.getAttribute('data-extra');
    
    console.log(product[parentId][elDataInfo]);
    
    if(product[parentId][elDataInfo] == true ){
        product[parentId].kcall += extraProduct[elDataInfo].kcall;
        product[parentId].price += extraProduct[elDataInfo].price;
    }
    
    else{
        product[parentId].kcall -= extraProduct[elDataInfo].kcall;
        product[parentId].price -= extraProduct[elDataInfo].price;
    }
    
    
    
    kcall.innerHTML = product[parentId].kl;
    price.innerHTML = product[parentId].summ; 
}

addCart.addEventListener('click', function () {
    
   const receipt = document.querySelector('.receipt');
   const raceiptWindow = document.querySelector('.receipt__window');
   
   
   receipt.style.display = 'flex';

   
   setTimeout(function () {
    receipt.style.opacity = '1';
    raceiptWindow.style.top = '20%';
   }, 200)
   
   
   
   
})



const receiptWindowBtn = document.querySelector('.receipt__window-btn');

receiptWindowBtn.addEventListener('click', function() {
    
    const receipt = document.querySelector('.receipt');
    const receiptWindow = document.querySelector('.receipt__window');
    
    setTimeout(function() {
         receipt.style.opacity = '0';
         receiptWindow.style.top = '-100%';
    }, 200);
    
    setTimeout(function() {
         receipt.style.display = 'none';
    },300)
    
})


