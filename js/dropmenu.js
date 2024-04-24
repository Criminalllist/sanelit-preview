function dropDownOpen() {
  /*
1. по клику на пункты верхнего меню открывается дропдаун
2. при повторном клике на эти пункты - закрывает дропдаун
3. по клику в любое место сайта, кроме меню - закрывает дропдаун
*/
  const dropdownButtons = document.querySelectorAll(".navigation__btn--more");
  const drops = document.querySelectorAll(".dropdown");

  dropdownButtons.forEach((el) => {
    el.addEventListener("click", (evt) => {
      let currentBtn = evt.currentTarget;
      let drop = currentBtn
        .closest(".navigation__item")
        .querySelector(".dropdown");

      dropdownButtons.forEach((el) => {
        if (el !== currentBtn) {
          el.classList.remove("navigation__btn--active");
        }
      });

      drops.forEach((el) => {
        if (el !== drop) {
          el.classList.remove("dropdown--active");
        }
      });

      drop.classList.toggle("dropdown--active");
      currentBtn.classList.toggle("navigation__btn--active");
    });
  });

  document.addEventListener("click", (evt) => {
    if (!evt.target.closest(".navigation__list")) {
      dropdownButtons.forEach((el) => {
        el.classList.remove("navigation__btn--active");
      });

      drops.forEach((el) => {
        el.classList.remove("dropdown--active");
      });
    }
  });
}

function popularDropdown() {
  const dropdownButtons = document.querySelectorAll(".popular__btn");
  const drops = document.querySelectorAll(".popular-dropdown");

  dropdownButtons.forEach((el) => {
    el.addEventListener("click", (evt) => {
      let currentBtn = evt.currentTarget;
      let drop = currentBtn
        .closest(".popular-slider__slide")
        .querySelector(".popular-dropdown");

      dropdownButtons.forEach((el) => {
        if (el !== currentBtn) {
          el.classList.remove("popular__btn--active");
        }
      });

      drops.forEach((el) => {
        if (el !== drop) {
          el.classList.remove("popular-dropdown--active");
        }
      });

      drop.classList.toggle("popular-dropdown--active");
      currentBtn.classList.toggle("popular__btn--active");
    });
  });

  document.addEventListener("click", (evt) => {
    if (!evt.target.closest(".popular-slider__slide")) {
      dropdownButtons.forEach((el) => {
        el.classList.remove("popular__btn--active");
      });

      drops.forEach((el) => {
        el.classList.remove("popular-dropdown--active");
      });
    }
  });
}
export { dropDownOpen, popularDropdown };
