function processValidation() {

    let testNumber = document.getElementById('number').value;
    document.getElementById('status').innerHTML = `Status: ${validate(testNumber) ? 'valid' : 'invalid'}.`;
}

function validate(number) {

    number = number.replace(/\s/g, '');

    if (number.length != 10) {
        return false;
    }

    let factorCount = 0;
    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] == 0) {
            continue;
        }
        else {
            factorCount += number[i] * (10 - i);
        }
    }

    let remainder = factorCount % 11;
    if ((11 - remainder) == parseInt(number[number.length - 1])) {
        return true;
    }
   
    return false; 
}

function generate() {

    let sample;
    let max = 7777777777;
    let min = 4000000000;

    for (let i = 0; i < 999; i++) {
        sample = Math.floor(Math.random() * (max - min + 1) + min);
        if (validate(sample.toString())) {
            break;
        }
    }

    document.getElementById('newNumber').innerHTML = `NHS Number: ${sample}.`;
}
