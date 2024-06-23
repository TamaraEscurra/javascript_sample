/*const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const price = priceElement.value;
  const number = numberElement.value;
  let purchase = {
    price: parseInt(price),
    number: parseInt(number),
  };

  let newPurchase = true; //--1

  purchases.forEach((item) => {  //--2
    if(item.price === purchase.price) {
      newPurchase = false;
    }
  })

  if(purchases.length < 1 || newPurchase) { //--3
    purchases.push(purchase);
  } else {
    for(let i = 0; i < purchases.length; i++) {
      if(purchases[i].price === purchase.price) {
        purchases[i].number += purchase.number;
      }
    }
  }

  window.alert(`${display()}\nsubtotal${subtotal()}círculo`);
  priceElement.value = "";
  numberElement.value = "";
}

function display() {
  return purchases.map(purchase => {
    return `${purchase.price}círculoPero${purchase.number}punto`
  }).join("\n");
};

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.price * purchase.number 
  }, 0);
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`subtotalEs${sum}círculo、Los gastos de envío son.${postage}círculoes。El total es${sum + postage}círculoes`);
  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
}*/

const products = [
  {
    id: 1,
    name: "Mezcla original 200 g",
    price: 500,
  },
  {
    id: 2,
    name: "Mezcla original 500 g",
    price: 900,
  },
  {
    id: 3,
    name: "Mezcla especial 200 g",
    price: 700,
  },
  {
    id: 4,
    name: "Mezcla especial 500 g",
    price: 1200,
  }
]
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];
function add() {
  const targetId  = parseInt(priceElement.value);
  const product = products.find(item => item.id == targetId);
  const number = numberElement.value;

  let purchase = {
    product: product,
    number: parseInt(number),
  };

  const newPurchase = purchases.findIndex((item) => item.product.id === purchase.product.id)
  if(purchases.length < 1 || newPurchase === -1) {
    purchases.push(purchase)
  } else {
    purchases[newPurchase].number += purchase.number
  }

  window.alert(`${display()}\nSubtotal ${subtotal()} yenes`);
  priceElement.value = "";
  numberElement.value = "";
}

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.product.price * purchase.number;
  }, 0)
}

function display() {
  return purchases.map(purchase => {
    return `${purchase.product.name} ${purchase.product.price} yenes: ${purchase.number} items\n`;
  }).join("")
};

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0
  } else if (sum < 2000){
    return 500
  } else {
    return 250
  }
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${display()}\nEl importe subtotal es: ${sum} Los gastos de envío son: ${postage}\nEl importe total es: ${sum + postage} yenes`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}

