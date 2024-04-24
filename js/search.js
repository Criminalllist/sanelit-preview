const searchBtn = document.querySelector(".search-form__input");
const searchResult = document.querySelector(".suggest");
const results = document.querySelectorAll(".suggest__result");

function showResult() {
  searchBtn.addEventListener("click", () => {
    searchResult.style.display = "block";
  });

  document.addEventListener("click", (evt) => {
    if (!evt.target.closest(".search-form")) {
      searchResult.style.display = "none";
    }
  });
}

function addResult() {
  results.forEach((result) => {
    result.addEventListener("click", () => {
      searchBtn.value = result.textContent;
    });
  });
}

export { showResult, addResult };
