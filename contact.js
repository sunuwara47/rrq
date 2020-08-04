var myForm = document.forms["contact_form"];
var fullname = document.querySelector("#fullname");
var email = document.querySelector("#email");
var message = document.querySelector("#message");

myForm.addEventListener("submit", (event) => {
  let msg = {
    Name: fullname.value,
    "E-mail": email.value,
    Message: message.value,
  };

  fetch("http://localhost:9696/message", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(msg),
  }).catch(() => alert("OOPS! Something's wrong"));

  event.preventDefault();
});
