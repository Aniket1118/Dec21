// to check if alphabet is vowel or not
var ani = prompt("enter the alphabet");
if (( ani == "a") || (ani == "A" )) {
alert("it is vowel");
}
else if (( ani == "e") || (ani == "E" )) {
alert("it is vowel");
}
else if (( ani == "i") || (ani == "I" )) {
alert("it is vowel");
}
else if (( ani == "o") || (ani == "O" )) {
alert("it is vowel");
}
else if (( ani == "u") || (ani == "U" )) {
alert("it is vowel");
}
else {
alert("it is constant") }

// to chek minimum of three numbers entered by the user

var pehli = parseInt(prompt("Entr the 1st num")); //we are taking 1st number from the user
var dusri = parseInt(prompt("Entr the 2nd num")); //we are taking 2nd number from the user
var tisri = parseInt(prompt("Entr the 3rd num")); //we are taking 3rd number from the user

if ((pehli < dusri) && (pehli < tisri)) { //if both conditions ae true then only
alert( pehli  + "is minimum")}
else if ((dusri < pehli) && (dusri < tisri)){//else if both conditions are true
alert(dusri + "is minimum")
}
else if((tisri < pehli) && (tisri < dusri)){ 
alert(tisri + "  is minimum")}
