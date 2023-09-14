//1. add withdraw button event handler
//2. get withdraw amount by using getInputFieldValueById
//3. get previous withdraw amount by using getTextElementValueById
//4 calculate new withdraw total
//4.2 set new withdraw total by using setTextElementValueId
//5. get previous withdraw amount by using getTextElementValueById
//6. calculate new balance total
//7. set new balance total by using setTextElementValueId

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("user-withdraw");

  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const previousBalanceTotal = getTextElementValueById("total-balance");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  const textE = setTextElementValueById("total-balance", newBalanceTotal);
});
