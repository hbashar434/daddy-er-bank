document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
      1. get the element by id
      2. get the value from the element
      3. convert string value to a number
  */
  const newDepositAmount = getInputFieldValueById("user-deposit");

  /* 
      1. get previous total by id
  */
  const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  //set deposit total
  setTextElementValueById("deposit-total", newDepositTotal);

  //get previous balance by using function with calling id
  const previousBalanceTotal = getTextElementValueById("total-balance");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("total-balance", newBalanceTotal);
});
