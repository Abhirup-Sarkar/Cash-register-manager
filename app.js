var billAmount = document.querySelector("#bill-amount");
var btnReturnChange = document.querySelector("#btn-return-change");
var cashGiven = document.querySelector("#cash-given");
var errorMessage = document.querySelector("#error-message");

var denominationOfNotes = [2000,500,100,20,10,5,1];

function billAmountHandler() {
    errorMessage.style.display = "none";
    if (billAmount.value > 0) {
        
        if(cashGiven.value >= billAmount.value){
            var returnChangeAmount = (cashGiven.value - billAmount.value);
            console.log(returnChangeAmount);
        }
        else{
            showMessage("You have paid less cash than the bill amount.\n DO YOU WANNA WASH PLATES???");
        }   
    } 
    else {
        showMessage("Please enter a valid amount");
    }
    
}
function calculateChange(){}
function showMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}
btnReturnChange.addEventListener("click", billAmountHandler)