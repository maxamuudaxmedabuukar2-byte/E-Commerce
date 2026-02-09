//DOM MANIPULATION ELEMENT
const form = document.getElementById("orderForm");
const error = document.getElementById("error");
const summary = document.getElementById("orderSummary");


// ARRAY
let orders = [];

//Event Handling
form.addEventListener("submit", function (e) {
  e.preventDefault();


  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const quantity = Number(document.getElementById("quantity").value);

  // INPUT VALIDATION
  if (name === "" || email === "" || quantity === "") {
    showError("All fields are required.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    showError("Please enter a valid email.");
    return;
  }

  if (quantity <= 0) {
    showError("Quantity must be greater than zero.");
    return;
  }

  error.classList.add("hidden");

  // OBJECT
  const order = {
    customerName: name,
    customerEmail: email,
    quantity: quantity
    
  };

  // ARRAY PUSH
  orders.push(order);

  updateSummary();
  form.reset();
});

// DOM MANIPULATION FUNCTION
function updateSummary() {
  if (orders.length === 0) {
    summary.textContent = "No orders yet.";
  } else {
    summary.innerHTML = `
      <p><strong>Total Orders:</strong> ${orders.length}</p>
      <p><strong>Last Customer:</strong> ${orders[orders.length - 1].customerName}</p>
    `;
  }
}

function showError(message) {
  error.textContent = message;
  error.classList.remove("hidden");
}
