const titles = document.querySelectorAll(".accordeon__title");
const contents = document.querySelectorAll(".accordeon__content");

//Аккродион навигации
function openMenuAccordion() {
  titles.forEach((item) =>
    item.addEventListener("click", () => {
      const activeContent = document.querySelector("#" + item.dataset.tab);

      if (activeContent.classList.contains("active")) {
        activeContent.classList.remove("active");
        item.classList.remove("active");
        activeContent.style.maxHeight = 0;
      } else {
        contents.forEach((element) => {
          element.classList.remove("active");
          element.style.maxHeight = 0;
        });

        titles.forEach((element) => element.classList.remove("active"));

        item.classList.add("active");
        activeContent.classList.add("active");
        activeContent.style.maxHeight = activeContent.scrollHeight + "px";
      }
    })
  );
}
//~ разная реализация

//FAQ аккордеон
function openFAQ() {
  const questions = document.querySelectorAll(".question");
  questions.forEach((el) => {
    el.addEventListener("click", (evt) => {
      const self = evt.currentTarget;
      const control = self.querySelector(".question__control");
      const text = self.querySelector(".question__text");

      self.classList.toggle("open");

      if (self.classList.contains("open")) {
        control.setAttribute("aria-expanded", true);
        text.setAttribute("aria-hidden", false);
        text.style.maxHeight = text.scrollHeight + "px";
      } else {
        control.setAttribute("aria-expanded", false);
        text.setAttribute("aria-hidden", true);
        text.style.maxHeight = null;
      }
    });
  });
}

export { openMenuAccordion, openFAQ };
