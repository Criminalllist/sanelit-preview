const locationOpenBtn = document.querySelector(".header__link-location");
const locationModal = document.querySelector(".location");
const modalClose = locationModal.querySelector(".modal-close-btn");
const trueLocation = locationModal.querySelector(".location__true");
function isTrueLocation() {
  locationOpenBtn.addEventListener("click", () => {
    locationModal.classList.toggle("location--active");
  });

  modalClose.addEventListener("click", () => {
    locationModal.classList.remove("location--active");
  });

  trueLocation.addEventListener("click", () => {
    locationModal.style.display = "none";
  });
}

//Лист избранных товаров
const favoriteList = document.querySelector(".favorite");
const favoriteBtn = document.querySelector(".header__link--favorite");

function showFavoriteList() {
  const favoriteClose = favoriteList.querySelector(".modal-close-btn");

  favoriteBtn.addEventListener("click", () => {
    favoriteList.classList.toggle("modal--active");
  });

  favoriteClose.addEventListener("click", () => {
    favoriteList.classList.remove("modal--active");
  });
}

//Лист товаров для сравнения
const compareList = document.querySelector(".compare");
const compareBtn = document.querySelector(".header__link--compare");

function showCompareList() {
  const compareClose = compareList.querySelector(".modal-close-btn");

  compareBtn.addEventListener("click", () => {
    compareList.classList.toggle("modal--active");
  });

  compareClose.addEventListener("click", () => {
    compareList.classList.remove("modal--active");
  });
}

//Подробная карточка товара
const openFullCard = document.querySelectorAll(".full-image");
const fullCard = document.querySelector(".full-card");
const overlay = document.querySelector(".overlay");

function openFullProductCard() {
  openFullCard.forEach((card) => {
    const closeCard = fullCard.querySelector(".modal-close-btn");
    card.addEventListener("click", (evt) => {
      fullCard.classList.add("full-card--active");
      document.body.classList.add("disable-scroll");
      overlay.classList.add("overlay--active");
    });
    closeCard.addEventListener("click", () => {
      fullCard.classList.remove("full-card--active");
      document.body.classList.remove("disable-scroll");
      overlay.classList.remove("overlay--active");
    });
  });

  overlay.addEventListener("click", () => {
    fullCard.classList.remove("full-card--active");
    document.body.classList.remove("disable-scroll");
    overlay.classList.remove("overlay--active");
  });
}
export {
  isTrueLocation,
  showFavoriteList,
  showCompareList,
  openFullProductCard,
};
