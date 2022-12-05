let money = 100;
document.getElementById("money").innerHTML = money;

function roll() {
  let count = Math.random();
  if (count < 0.49) {return "Rot";}
  else if (count > 0.52) {return "Schwarz";}
  else {return "Gruen";}
}

function getWager() {
  if (money >= document.getElementById("wager").value && document.getElementById("wager").value > 0) {
    return document.getElementById("wager").value;
  }
  else {
    alert("Einsatz muss positiv, aber kleiner oder gleich Geld sein!");
    return 0;
  }
}

function getBet() {
  if (document.getElementById("colorRed").checked) {
    return "Rot";
  }
  else {
    return "Schwarz";
  }
}

function updateBackground(result) {
  if (result === "Rot") {
    document.getElementById("result").style = "color: red;"
  }
  if (result === "Schwarz") {
    document.getElementById("result").style = "color: grey;"
  }
  if (result === "Gruen") {
    document.getElementById("result").style = "color: green;"
  }
}

function gamble() {
  if (money === 0) {
    alert ("Zum Spielen braucht man Geld!")
    return;
  }
  let wager = getWager();
  let bet = getBet();
  let result = roll();
  updateBackground(result);
  document.getElementById("result").innerHTML = "Ergebnis: " + result + "!"
  if (bet === result) {
    money += wager*2;
    document.getElementById("result").innerHTML += " Sie haben gewonnen!"
  }
  else {
    money -= wager;
    document.getElementById("result").innerHTML += " Sie haben verloren!"
  }
  document.getElementById("money").innerHTML = money;
  if (money === 0) {
    alert("Rien ne va plus!");
    document.getElementById("result").innerHTML = "<img src='https://thumbs.dreamstime.com/b/poor-beggar-22831970.jpg' width='300'>"
  }
}
