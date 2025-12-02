function fakeLogin() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
}

function showLogin() {
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("login-screen").style.display = "block";
}

function openSlot() {
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("slot-screen").style.display = "block";
}

function backToMenu() {
  document.getElementById("slot-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
}

function spin() {
  const symbols = ['🐯','⭐','🍒','💎','7️⃣'];

  document.getElementById('r1').innerHTML = symbols[Math.floor(Math.random()*symbols.length)];
  document.getElementById('r2').innerHTML = symbols[Math.floor(Math.random()*symbols.length)];
  document.getElementById('r3').innerHTML = symbols[Math.floor(Math.random()*symbols.length)];
}
