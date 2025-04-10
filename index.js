
const buttons = document.querySelectorAll(".next");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faqContent = button.closest(".faq-item").querySelector(".faqcontent");
    faqContent.classList.toggle("show");
  });
});
