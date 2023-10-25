const newsletter = document.querySelector(".newsletter") as HTMLElement;
const successMessage = document.querySelector(".message") as HTMLElement;
const dismissButton = document.querySelector('input[type="submit"]');
const emailInput = document.querySelector(
  'input[type="text"]'
) as HTMLInputElement;
const userEmailspan = document.getElementById("user_email") as HTMLElement;
const subscriptionBtn = document.querySelector("#submit");
subscriptionBtn?.addEventListener("click", (e) => {
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
  dismissButton.addEventListener("click", () => {
    successMessage.style.display = "none";
    newsletter.style.display = "block";
  });
}
