const showMoreFAQ = document.querySelector(".faq__show-more");
const hideList = document.querySelector(".faq__list--more");

function addMoreFAQ() {
  showMoreFAQ.addEventListener("click", () => {
    console.log(hideList);
    if (hideList.classList.contains("faq__list--more")) {
      hideList.classList.remove("faq__list--more");
      hideList.classList.add("faq__list--open");
      showMoreFAQ.innerHTML = "Скрыть вопросы";
    } else {
      hideList.classList.add("faq__list--more");
      hideList.classList.remove("faq__list--open");
      showMoreFAQ.innerHTML = "Показать еще вопросы";
    }
  });
}

export { addMoreFAQ };
