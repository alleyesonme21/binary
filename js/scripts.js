//Business logic
function binary(number) {
  let numberArray = number.split('');
  numberArray.reverse();
  let decimal = 0;
  let x = 1;
  for(let index = 0; index < numberArray.length; index++) {
    if(parseInt(numberArray[index]) === 1) {
      decimal += x;
    }
    x *= 2;
  }
  return decimal;
}

$(document).ready(function () {

$('#formOne').submit(function () {
event.preventDefault();
let temp = $('#number').val();
$('#output').text(binary(temp));
});

});
