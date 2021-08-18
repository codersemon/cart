
function productHandlerCombine(product, isIncrease){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productCountFinal = productCount;
    if(isIncrease == true){
        productCountFinal += 1;
    }
    if(isIncrease == false && productCountFinal > 1){
        productCountFinal -= 1;
    }

    if(product == 'case'){
    productInput.value = productCountFinal;
    document.getElementById('case-price').innerText = productCountFinal * 59; 
    }
    if(product == 'phone'){
    productInput.value = productCountFinal;
   document.getElementById('phone-price').innerText = productCountFinal * 1219;
    }
    productTotal();
    
}


function productTotal(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);

    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const totalPrice = (caseCount * 59) + (phoneCount * 1219);
    document.getElementById('total-price').innerText = totalPrice;

    const taxAmount = totalPrice * 0.1
    document.getElementById('tax-amount').innerText = Math.floor(taxAmount);

    document.getElementById('grand-total').innerText = parseInt(totalPrice + taxAmount);
}

