document.getElementById('btn-add-money')
.addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputByID('addmoney-input');
    const addMoneyPin = getInputByID('addmoney-pin');

    if(addMoneyPin === 1234){
        const balance = getTextByNumber('balance');
        const newBalance = balance + addMoney;
        document.getElementById('balance').innerText = newBalance;

        
    }
    else{
        alert('failed add money')
    }


})




document.getElementById('btn-cashout')
.addEventListener('click', function (event){
    event.preventDefault();


    const cashOut = getInputByID('cashout-input');
    const cashOutPin = getInputByID('Cash-Out-pin');

    if(cashOutPin === 1234){

        const balance = getTextByNumber('balance');
        const updateBalance = balance - cashOut ;

        document.getElementById('balance').innerText = updateBalance;

    }
    else{
        alert('Cash-out failed')
    }

})




document.getElementById('show-addmoney')
.addEventListener('click', function(){

    showSection('addmoney-section');
});
document.getElementById('show-cashout')
.addEventListener('click', function(){

    showSection('cashout-section');
});
document.getElementById('show-transaction')
.addEventListener('click', function(){

    showSection('transaction-section');
});