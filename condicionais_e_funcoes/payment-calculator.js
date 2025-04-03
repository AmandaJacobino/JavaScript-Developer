/*Develop an algorithm that calculates the amount to be paid for a product, considering the normal price on the tag and the chosen payment method.
Use the codes in the table below to determine the selected payment condition and apply the correct calculation:

Payment Condition Codes:

- Debit Payment: 10% discount
- Cash or PIX Payment: 15% discount
- Two Installments: Normal price, no interest
- More than Two Installments: Normal price + 10% interest*/

function calculateDebitPayment (finalPrice) {
    return (finalPrice * 0.90) // 10% discount
}

function calculateCashOrPixPayment (finalPrice) {
    return (finalPrice * 0.85); // 15% discount
}

function calculateCreditPayment (finalPrice, installments) {

    if (installments <= 2) {
        return finalPrice // No interest for two installments
    } else {
        return (finalPrice * 1.10); // 10% interest for more than two installments
    }
}

// Main function to test differents payment methods
(function () {
    let finalPrice = 100; // Example price

    console.log("Debit Payment:", calculateDebitPayment(finalPrice)); //10% discount
    console.log("Cash or PIX Payment:", calculateCashOrPixPayment(finalPrice)); //15% discount
    //no installment:
    console.log("Credit Payment (2 installments):", calculateCreditPayment(finalPrice, 2).toFixed(2)); 
    // with installment:
    console.log("Credit Payment (3 installments):", calculateCreditPayment(finalPrice, 3).toFixed(2)); 
    

})();