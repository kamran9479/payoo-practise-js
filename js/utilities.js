function getInputByID(id){
    const InputValue = document.getElementById(id).value;
    const InputNumber = parseFloat(InputValue);

    return InputNumber;
}


function getTextByNumber(id){

    const textfield = document.getElementById(id).innerText;
    const textNumber = parseFloat(textfield);
    return textNumber;

}



function showSection(id){

    document.getElementById('addmoney-section').classList.add('hidden');
    document.getElementById('cashout-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');


}