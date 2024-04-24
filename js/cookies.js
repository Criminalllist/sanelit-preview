import Cookies from "js-cookie";

//Cookies
const cookies = document.querySelector(".cookies");
const cookiesAcceptBtn = cookies.querySelector(".cookies__accept");

function acceptCookies() {
  if (!Cookies.get("hide-cookie")) {
    setTimeout(() => {
      cookies.style.display = "flex";
    }, 1000);
  }

  Cookies.set("hide-cookie", "true", {
    expires: 30,
  });
}

cookiesAcceptBtn.addEventListener("click", () => {
  cookies.style.display = "none";
});

export { acceptCookies };
