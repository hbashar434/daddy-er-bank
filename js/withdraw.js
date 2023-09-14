/* 
1. add event handlers with withdraw button
2. get the withdraw amount from withdraw input field
2.1. also make sure to convert the input value into number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4.1. set total withdraw amount 
5. get the previous balance total
6. calculate new balance total
6.1. set new balance total
7. clear the withdraw input field
*/

//step 1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("user-withdraw");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step 7
  withdrawField.value = "";
  //validation
  if (isNaN(newWithdrawAmount)) {
    alert("Please provide your Amount");
    return;
  }
  if (newWithdrawAmount < 0) {
    alert("Please provide your Amount");
    return;
  }
  //  step 3
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawString);

  // step 5
  const balanceTotalElement = document.getElementById("total-balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //validation amount level
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Baaper bank a eto tk nai");
    return;
  }

  //   step 4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  //   step 4.1
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //   step 6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
