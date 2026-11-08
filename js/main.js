const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const wasOpen = item.classList.contains("open");

    // close everything first
    faqItems.forEach((other) => {
      other.classList.remove("open");
      other
        .querySelector(".faq-question")
        .setAttribute("aria-expanded", "false");
    });

   
    if (!wasOpen) {
      item.classList.add("open");
      question.setAttribute("aria-expanded", "true");
    }
  });
});
