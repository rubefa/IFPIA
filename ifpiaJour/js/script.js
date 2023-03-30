
var x = "c'est";
var y = "Vadiny";
var z = x+" "+y;

function testTime() {
let time = parseInt(document.getElementById("nom").value)
 if (time < 10 || time<12) {
  document.getElementById("affichage").innerHTML = "L'heure est inferieur a 10";
 } else {
  document.getElementById("affichage").innerHTML = "L'heure est superieur a 10";
 }
}



function multiplication() {
  let x = parseInt(document.getElementById("nom").value)
  for (let i=0; i<13; i++) {
    document.getElementById("affichage").innerHTML += x+"*"+i+"="+x*i+"<br/>";
  }

  // document.getElementById("affichage").innerHTML = "L'heure est superieur a 10";
  // document.getElementById("test").innerHTML = 10*x;
}