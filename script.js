var myForm = document.forms["contact_form"];
var fullname = document.querySelector("#fullname");
var email = document.querySelector("#email");
var message = document.querySelector("#message");

myForm.addEventListener("submit", (e) => {
  let msg = {
    Name: fullname.value,
    "E-mail": email.value,
    Message: message.value,
  };

  let stored;

  if (localStorage.getItem("Message") === null) {
    stored = [];
  } else {
    stored = JSON.parse(localStorage.getItem("Message"));
  }
  stored.push(msg);

  localStorage.setItem("Message", JSON.stringify(stored));

  alert("Your info has been saved  into local storage.");

  fullname.value = "";
  email.value = "";
  message.value = "";

  e.preventDefault();
});
