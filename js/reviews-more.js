const reviewsButton = document.querySelectorAll(".reviews-slide__btn");

function showMoreText() {
  reviewsButton.forEach((button) => {
    button.addEventListener("click", (evt) => {
      const current = evt.currentTarget;
      const reviewsSlide = current.closest(".reviews-slide");
      const text = reviewsSlide.querySelector(".reviews-slide__text");

      if (reviewsSlide.classList.contains("open")) {
        reviewsSlide.classList.remove("open");
        text.classList.remove("open");
        button.innerHTML = "Читать больше";
      } else {
        reviewsSlide.classList.add("open");
        text.classList.add("open");
        button.innerHTML = "Скрыть";
      }
    });
  });
}

export { showMoreText };
