var newsletter = document.querySelector(".newsletter");
var successMessage = document.querySelector(".message");
var dismissButton = document.querySelector('input[type="submit"]');
var emailInput = document.querySelector('input[type="text"]');
var userEmailspan = document.getElementById("user_email");
var subscriptionBtn = document.querySelector("#submit");
subscriptionBtn === null || subscriptionBtn === void 0 ? void 0 : subscriptionBtn.addEventListener("click", function (e) {
    e.preventDefault();
    showSuccessMessage();
});
// show success message hide newsletter
function showSuccessMessage() {
    newsletter.style.display = "none";
    successMessage.style.display = "block";
    userEmailspan.innerText = emailInput.value;
}
if (dismissButton) {
    dismissButton.addEventListener("click", function () {
        successMessage.style.display = "none";
        newsletter.style.display = "block";
    });
}
