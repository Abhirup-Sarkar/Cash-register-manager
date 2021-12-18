var billAmount = document.querySelector("#bill-amount");
var btnReturnChange = document.querySelector("#btn-return-change");
var cashGiven = document.querySelector("#cash-given")



function billAmountHandler() {
    if (billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value){
            var returnChangeAmount = (cashGiven.value - billAmount.value);
            console.log(returnChangeAmount);
        }
        else{
            console.log("You have paid less cash than the bill amount");
        }   
    } 
    else {
        console.log("Please enter a valid amount");
    }
    
}
btnReturnChange.addEventListener("click", billAmountHandler)