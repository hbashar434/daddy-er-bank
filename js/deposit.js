// step 1: add event listener with deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //step 2: get the deposit input field access
  const depositField = document.getElementById("user-deposit");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  //validation
  if (isNaN(newDepositAmount)) {
    alert("Please provide your Amount");
    return;
  }
  if (newDepositAmount < 0) {
    alert("Please provide your Amount");
    return;
  }
  //step 3: get current deposit total
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositString);

  //step 4: add numbers to set total deposit
  const currentDepositTotal = newDepositAmount + previousDepositTotal;
  //set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  //step 5: get balance current total
  const balanceTotalElement = document.getElementById("total-balance");
  const balanceTotalElementString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalElementString);
  // step 6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  //set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // step 7: clear the deposit field
  depositField.value = "";
});
