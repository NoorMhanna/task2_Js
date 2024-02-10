// var value = e.value;
// var text = e.options[e.selectedIndex].text;
var reultLable = document.querySelector(".result");
var buttonConvert = document.querySelector(".butConvert");

// console.log(number);

buttonConvert.onclick=convert ; 

function convert(e) {
    e.preventDefault();
    var targetChange = document.querySelector(".exchange").value;
    var number= document.querySelector(".number").value;

    // console.log(targetChange == "dollar");
    
  if (targetChange == "dollar") convertDoular(number);
  else if (targetChange == "dinar") convertDinar(number);
  else convertNis(number);
}

function convertDoular(number) {
    var x = number*3.67
    reultLable.textContent=x + " Doular";
}

function convertDinar(number) {
    var x = number*5
    reultLable.textContent= x + " Dinar";
}

function convertNis(number) {
    reultLable.textContent=number + " Nis";
}
