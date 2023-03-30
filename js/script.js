function change() {
  let x, a, b, message, meSsage;
  (x = 20), (a = 2.0), (b = "bonjour c'est moi vadiny");
  console.log(a + " " + b);
  a <= b;
  a = a - 1;
  let c = add(a, x);
}

function add(x, y) {
  let z = x + y;
  return z;
}

function multiplication() {
  for (let n = 2; n < 5; n++) {
    for (let cp = 1; cp <= 5; cp++) {
      alert(n + " * " + cp + " = " + n * cp);
    }
  }
}

function regex(valeur) {
  let pattern = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/
  let message = ""
  if (pattern.test(valeur)) {
    message = "L'adresse mail est correct"
    document.getElementById('message').setAttribute('class', 'success')
    document.getElementById('message').innerHTML = message
  } else {
    message = "L'adresse mail est incorrect"
    document.getElementById('message').setAttribute('class', 'error')
    document.getElementById('message').innerHTML = message
  }
}

alert(new Date().getMonth())
