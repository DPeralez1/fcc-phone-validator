//click and keypress instead of one or the other this time.

document
  .getElementById("check-btn")
  .addEventListener("click", validatePhoneNumber);
document.getElementById("clear-btn").addEventListener("click", clearResults);
document
  .getElementById("user-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      validatePhoneNumber();
    }
  });

function validatePhoneNumber() {
  const userInput = document.getElementById("user-input").value;
  const resultDiv = document.getElementById("results-div");

  if (userInput === "") {
    alert("Please provide a phone number");
    return;
  }

  const validUSNumberPattern =
    /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  const isValid = validUSNumberPattern.test(userInput);

  if (isValid) {
    resultDiv.textContent = `Valid US number: ${userInput}`;
  } else {
    resultDiv.textContent = `Invalid US number: ${userInput}`;
  }
}

//Clears the input and results on the page
function clearResults() {
  document.getElementById("user-input").value = "";
  document.getElementById("results-div").textContent = "";
}
