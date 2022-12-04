const initialPrice = document.querySelector("#initial-price");
const stockQty = document.querySelector("#stock-qty");
const currentPrice = document.querySelector("#current-price");
const outputBox = document.querySelector("#output-container")
const submitBtn = document.querySelector("#submit-btn");



submitBtn.addEventListener("click", submitHandler);


function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stockQty.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

// Ex-05
function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`OK you may try again!`);
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}