//step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step-2: get the email address inside the input field
  // always remember to use .value to get text from the input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //step-3: get the password inside the input field
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  //step-4: verify password in a wrong way
  if (email === "sontan@baap.com" && password === "secretbank") {
    window.location.href = "bank.html";
  } else {
    alert("invalid user");
  }
});
