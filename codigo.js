let bill = 0;
let numberP = 1;
let percent = 0;
let tip = 0;
let total = 0;
const icon$ = '<img src="images/icon-dollar.svg">';

calc = (bill, percent, numberP) => {
    bill = parseInt(bill);
    total = (bill * percent + bill) /numberP;
    tip = bill * percent / numberP;
    document.getElementById("showTotal").innerHTML =  icon$ + total.toFixed(2);
    document.getElementById("showTip").innerHTML = icon$ + tip.toFixed(2);
    return total
}

number = (x) =>{
    if(x == 1){
        x = document.getElementById("custom").value;
    }
    percent = x/100;
    calc(bill,percent, numberP);
}

billFunction = () =>{
    bill = document.getElementById("bill").value;
    calc(bill, percent, numberP);
}

numberPeople = () =>{
    numberP = document.getElementById("number-people").value;
    calc(bill,percent, numberP);
}

resetButtom = () =>{
    // document.getElementsById("bill").value = '0';
    // document.getElementsById("custom").value = 'Custom';
    // document.getElementsByName("number-people").value = '1';
    // bill = 0;
    // numberP = 1;
    // percent = 0;
    // tip = 0;
    // total = 0;
    window.location.reload();

}


