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