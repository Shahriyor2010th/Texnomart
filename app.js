

let body = document.querySelector("body");
let locate = document.querySelector(".location");
let citiesList = document.querySelector(".cities-list");
let citiesListM1 = document.querySelector(".cities-listM1");
let citiesListM2 = document.querySelector(".cities-listM2");
let locationM1 = document.querySelector(".locationM1");
let locationM2 = document.querySelector(".locationM2");

locate.onclick = function () {
  citiesList.classList.toggle("display__off");
};
locationM1.onclick = function () {
  citiesListM1.classList.toggle("display__off");
};
locationM2.onclick = function () {
  citiesListM2.classList.toggle("display__off");
};
citiesList.onclick = function () {
  citiesList.classList.add("display__off");
};
citiesListM1.onclick = function () {
  citiesListM1.classList.add("display__off");
};
citiesListM2.onclick = function () {
  citiesListM2.classList.add("display__off");
};

let loginBG = document.querySelector(".login__bg");
let headerLogin = document.querySelector(".header__login-btn");
let loginClose = document.querySelector(".close__login");
let loginPhone = document.querySelector(".login__phone");
let loginName = document.querySelector(".login__name");
let logOrigin = document.querySelector(".header__login-origin");

headerLogin.onclick = function () {
  loginBG.classList.toggle("display__off");
};

logOrigin.onclick = function () {
  loginBG.classList.toggle("display__off");
};

loginClose.onclick = function () {
  loginBG.classList.toggle("display__off");
  loginPhone.value = "+998 ";
  loginName.classList.add("display__off");
};

let loginType = document.querySelector(".login__type");
let loginBTN = document.querySelector(".login__btn");
let loginTitle = document.querySelector(".login__title");
let loginLogin = document.querySelector(".login__login");
let loginType2 = document.querySelector(".login__type2");

loginType.onclick = function () {
  // loginPhone.placeholder.color = "yellow"
  loginName.classList.remove("display__off");
  loginName.placeholder = "Parol*";
  loginName.value = "";
  loginBTN.textContent = "Login orqali kirish";
  loginTitle.textContent = "Login orqali kirish";
  loginPhone.classList.add("display__off");
  loginLogin.classList.remove("display__off");
  loginType2.classList.remove("display__off");
  loginType.classList.add("display__off");
};

loginType2.onclick = function () {
  loginName.classList.add("display__off");
  loginName.placeholder = "Ism";
  loginBTN.textContent = "Kodni yuborish";
  loginTitle.textContent = "Kirish yoki ro'yxatdan o'tish";
  loginPhone.classList.remove("display__off");
  loginLogin.classList.add("display__off");
  loginType2.classList.add("display__off");
  loginType.classList.remove("display__off");
};

loginPhone.oninput = function () {
  if (!loginPhone.value.startsWith("+998 ")) {
    loginPhone.value = "+998 ";
  }
  if (loginPhone.value.length >= 14) {
    loginName.classList.remove("display__off");
    loginPhone.value = loginPhone.value.slice(0, 14);
  }
};

let shoppingCart = document.querySelector(".header__cart");
let cartBG = document.querySelector(".cart__bg");
let cartClose = document.querySelector(".cart__close");

shoppingCart.onclick = () => {
  cartBG.classList.remove("display__off");
};

cartClose.onclick = () => {
  cartBG.classList.add("display__off");
};

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 1.2,
  loop: true,
  mousewheel: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper (".catalogue", {
  slidesPerGroup: 1,
  slidesPerView: 3,
  mousewheel:true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

var swiper = new Swiper(".populars", {
  slidesPerView:9,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})