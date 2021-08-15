var billAmount = document.querySelector("#bill-amount__box");
var nextButton = document.querySelector("#next-button");



function billAmountHandler() {
    if (bill.value > 0) {
        console.log("you have entered an valid bill amount");
    } else {
        console.log("enter a valid amount");
    }

}
nextButton.addEventListener("click", billAmountHandler)