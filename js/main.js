let arrSelected = [];

// button functionalities
const handleButton1 = (e) => {
  e.target.disabled = true;
  arrSelected.push(title1.innerText);
  if (arrSelected.length < 5) {
    player1();
  } else {
    alert("can't add more than 5");
  }
};

const handleButton2 = (e) => {
  e.target.disabled = true;
  arrSelected.push(title2.innerText);
  if (arrSelected.length < 5) {
    player2();
  } else {
    alert("can't add more than 5");
  }
  console.log(arrSelected.length);
};

// getting button data
let button1 = document.getElementById("buttonData1");
let button2 = document.getElementById("buttonData2");

// getting title data
let title1 = document.getElementById("titleData1");
let title2 = document.getElementById("titleData2");
let listParent = document.getElementById("selectedParent");

// button event listener
button1.addEventListener("click", handleButton1);
button2.addEventListener("click", handleButton2);

// setting title to cart
const player1 = () => {
  const list = document.createElement("li");
  list.innerHTML = `${title1.innerText}`;
  listParent.appendChild(list);
};

const player2 = () => {
  const list = document.createElement("li");
  list.innerHTML = `${title2.innerText}`;
  listParent.appendChild(list);
};

// ------------------ calculator ------------------

const handleCalculate = () => {
  const playerCost = perPlayer.value * arrSelected.length;
  playerExpense.innerText = playerCost;
};

const handleCalculateTotal = () => {
  const playerCost = perPlayer.value * arrSelected.length;
  handleCalculate();
  const total =
    playerCost + parseInt(managerCost.value) + parseInt(coachCost.value);
  finalTotal.innerText = total;
};

// getting input data
let perPlayer = document.getElementById("perPlayer");
let playerExpense = document.getElementById("playerExpense");
let managerCost = document.getElementById("managerCost");
let coachCost = document.getElementById("coachCost");
let finalTotal = document.getElementById("finalTotal");

// getting button data
let calculateButton = document.getElementById("calculateButton");
let calculateTotal = document.getElementById("calculateTotal");

// button event listener
calculateButton.addEventListener("click", handleCalculate);
calculateTotal.addEventListener("click", handleCalculateTotal);
