
function updateProductNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + "-number");
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }

    //update casetotal
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(product + "-total");
    caseTotal.innerText = caseNumber * price;

}

//handle phone in de 

document.getElementById("phone-plus").addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById("phone-minus").addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

//handle case increase decrease event

document.getElementById("case-plus").addEventListener('click', function () {
    updateProductNumber('case', 59, true);


})

document.getElementById("case-minus").addEventListener('click', function () {
    updateProductNumber('case', 59, false);


});

function getInputValue(product) {
    const phoneNumber = document.getElementById(product + "-number").value;
    return;
}


function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
}
