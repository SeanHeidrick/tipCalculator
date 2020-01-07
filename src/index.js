function calculateTip() {
let billAmount = document.getElementById('bill').value;
let service = document.getElementById('service').value;
let people = document.getElementById('people').value;

if (billAmount === '' || billAmount === 0) {
    alert('please enter values');
}

if (people === "" || people < 2) {
    people = '1';
    document.getElementById('each').style.display = 'none';
} else {
    document.getElementById('each').style.display = 'block';
}

var total = (billAmount*service)/people;
total = Math.round(total * 100)/100;
total = total.toFixed(2);

document.getElementById('total-tip').style.display = 'block';
document.getElementById('tip').innerHTML = total;
}

document.getElementById('total-tip').style.display = 'none';

document.getElementById('calculate-button').onclick = function() {
    calculateTip();
}
