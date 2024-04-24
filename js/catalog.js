function catalogOpen() {
  const dropdownButton = document.querySelector(".desktop-catalog__btn");

  dropdownButton.addEventListener("click", (evt) => {
    let currentBtn = evt.currentTarget;
    let drop = currentBtn
      .closest(".desktop-catalog")
      .querySelector(".desktop-catalog__list");

    if (dropdownButton !== currentBtn) {
      el.classList.remove("desktop-catalog__inner-btn--active");
    }

    drop.classList.toggle("desktop-catalog__list--active");
    currentBtn.classList.toggle("desktop-catalog__btn--active");

    document.addEventListener("click", (evt) => {
      if (!evt.target.closest(".desktop-catalog")) {
        drop.classList.remove("desktop-catalog__list--active");
      }
    });
  });
}

function catalogDropMenu() {
  /*
1. по клику на пункты верхнего меню открывается дропдаун
2. при повторном клике на эти пункты - закрывает дропдаун
3. по клику в любое место сайта, кроме меню - закрывает дропдаун
*/
  const dropdownButtons = document.querySelectorAll(
    ".desktop-catalog__inner-btn"
  );
  const drops = document.querySelectorAll(".catalog-dropdown");

  dropdownButtons.forEach((el) => {
    el.addEventListener("mouseover", (evt) => {
      let currentBtn = evt.currentTarget;
      let drop = currentBtn
        .closest(".desktop-catalog__item")
        .querySelector(".catalog-dropdown");

      dropdownButtons.forEach((el) => {
        if (el !== currentBtn) {
          el.classList.remove("desktop-catalog__inner-btn--active");
        }
      });

      drops.forEach((el) => {
        if (el !== drop) {
          el.classList.remove("catalog-dropdown--active");
        }
      });

      drop.classList.toggle("catalog-dropdown--active");
      currentBtn.classList.toggle("desktop-catalog__inner-btn--active");
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

export { catalogOpen, catalogDropMenu };
