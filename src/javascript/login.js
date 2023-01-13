var input_text = document.querySelector("#input-text");
var input_pasword = document.querySelector("#input-pasword");
var error_msg = document.querySelector(".error_msg");

$("#submit").submit(function (e) {
  e.preventDefault();

  if (input_text.value.length < 1) {
    error_msg.style.display = "inline-block";
  }
});
