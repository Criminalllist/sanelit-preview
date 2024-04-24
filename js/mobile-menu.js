const pageMenu = document.querySelector(".menu");
const catalog = document.querySelector(".catalog");
const menuOpenBtn = document.querySelector(".burger-menu");
const menuCloseBtn = document.querySelector(".menu__close-button");

const catalogOpenBtn = document.querySelector(".menu__catalog");
const catalogBackBtn = document.querySelector(".catalog__button-back");
const catalogCloseBtn = document.querySelector(".catalog__close-button");

function mobileMenuToggle() {
  menuOpenBtn.addEventListener("click", () => {
    pageMenu.classList.add("menu-open");
    if (pageMenu.classList.contains("menu-open")) {
      document.body.classList.add("disable-scroll");

      menuCloseBtn.addEventListener("click", () => {
        pageMenu.classList.remove("menu-open");
        document.body.classList.remove("disable-scroll");
      });
      //Открытие каталога
      catalogOpenBtn.addEventListener("click", () => {
        catalog.classList.add("catalog-open");
        //Кнопка назад
        catalogBackBtn.addEventListener("click", () => {
          catalog.classList.remove("catalog-open");
        });
        //Кнопка закрыть каталог
        catalogCloseBtn.addEventListener("click", () => {
          catalog.classList.remove("catalog-open");
        });
      });
    } else {
      document.body.classList.remove("disable-scroll");
    }
  });
}

export { mobileMenuToggle };
