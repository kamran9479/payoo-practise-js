document.getElementById('btn-add-money')
.addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputByID('addmoney-input');
    const addMoneyPin = getInputByID('addmoney-pin');


    if(isNaN(addMoney)){
        alert('Input should be a number')
        return;
    }


    if(addMoneyPin === 1234){
        const balance = getTextByNumber('balance');
        const newBalance = balance + addMoney;
        document.getElementById('balance').innerText = newBalance;



        const div = document.createElement('div');
        div.classList.add('border-2')
        div.innerHTML = `<h3 class="font-black text-sm">Add Money</h3>
                        <p>TK: ${addMoney} added   New Balance ${newBalance} TK`

         document.querySelector('.transaction-history').appendChild(div);

        
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


    if(isNaN(cashOut)){
        alert('Input should be a number')
        return;
    }

    

    if(cashOutPin === 1234){

        const balance = getTextByNumber('balance');

        if(cashOut > balance){
            alert('Not enought money')
            return;
        }
        
        const updateBalance = balance - cashOut ;

        document.getElementById('balance').innerText = updateBalance;

        const div = document.createElement('div');
        div.classList.add('border-2')
        div.innerHTML = `<h3 class="font-black text-sm">Cash Out</h3>
                        <p>TK: ${cashOut} Cashout   New Balance ${updateBalance} TK`

         document.querySelector('.transaction-history').appendChild(div);

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



