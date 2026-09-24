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

var swiper = new Swiper(".catalogue", {
  mousewheel: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1026: {
      slidesPerView: 6.3,
    },
    769: {
      slidesPerView: 5.2,
    },
    341: {
      slidesPerView: 3.9,
    },
    1: {
      slidesPerView: 1.9,
    },
  },
});

var swiper = new Swiper(".populars", {
  slidesPerView: 9,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1026: {
      slidesPerView: 9.2,
    },
    769: {
      slidesPerView: 7.3,
    },
    341: {
      slidesPerView: 5.5,
    },
    1: {
      slidesPerView: 2.38,
    },
  },
});

let cardWrapper = document.querySelector(".card__wrap");

import { phones } from "./datas.js";

function addPhone() {
  cardWrapper.replaceChildren();
  phones.forEach((item, index) => {
    let box = document.createElement("div");

    let rating = "";
    if (item.review == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.review} ta sharq`;
    }

    box.innerHTML = `
      <img src="./images/card__img${index}.webp" width="220" height="230">
      <div class="card__info">
        <h2 class="card__title">${item.name}</h2>
        <p class="card__rating">${rating}</p>
        <p class="card__credit">${item.installment}</p>
        <div class="card__bottom">
          <span>${item.price}</span>
          <button>🛒</button>
        </div>

      </div>

    `;

    console.log(box.getHTML());

    box.classList.add("swiper-slide");
    box.classList.add("card");
    cardWrapper.append(box);
  });
  var phones__wrapper = new Swiper(".card__wrapper", {
    slidesPerView: 4.2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

addPhone();

let smartphones = document.querySelector(".smartphones");
smartphones.onclick = addPhone

// let cardWrap = document.querySelector(".card__wrap");

// import { products } from "./datas.js";

// products.forEach((item, index) => {
//   // let ind = index

//   let card = document.createElement("div");
//   let rating = "";
//   if (item.review == 0) {
//     rating += `🩶 Sharq yo'q`;
//   } else {
//     rating += `❤️ ${item.review} ta sharq`;
//   }
//   card.innerHTML = `
//     <img src="./images/card__img${index}.webp" alt="" class="card__img">
//     <div class="card__info">
//     <h3 class="card__name">${item.name}</h3>
//     <span class="star">${rating}</span>
//     <p class="step__pay">${item.installment}</p>
//     <div class="card__bottom">
//       <span>${item.price}</span>
//       <button class="add__to-cart">🛒</button>
//     </div>
//     </div>
//   `;
//   card.classList.add("card");
//   card.classList.add("swiper-slide");
//   cardWrap.append(card);
// });

// var swiper__cards = new Swiper(".card__wrapper", {
//   slidesPerView: 4.3,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     1026: {
//       slidesPerView: 4.3,
//     },
//     769: {
//       slidesPerView: 3.4,
//     },
//     341: {
//       slidesPerView: 2.5,
//     },
//     1: {
//       slidesPerView: 1.55,
//     },
//   },
// });

// let chat = document.querySelector(".chat");
// let chatBox = document.querySelector(".chat__box");
// let supportUL = document.querySelector(".support__ul");

// chat.onclick = () => {
//   chatBox.classList.toggle("chat__box2");
//   supportUL.classList.toggle("display__off");
// };

// let addCart = document.querySelectorAll(".add__to-cart");

// let TVsIn = document.querySelector(".TVs");

// import { TVs } from "./datas.js";

// let smartphones = document.querySelector(".smartphones");

// TVsIn.onclick = TVprods;

// function TVprods() {
//   cardWrap.innerHTML = "";
//   smartphones.classList.remove("selected");
//   TVsIn.classList.add("selected");

//   TVs.forEach((item, index) => {
//     let card = document.createElement("div");
//     let rating = "";
//     if (item.review == 0 || item.reviews !== undefined) {
//       rating += `🩶 Sharq yo'q`;
//     } else {
//       rating += `❤️ ${item.review} ta sharq`;
//     }
//     card.innerHTML = `
//     <img src="./images/card_img${item.id}.webp" alt="" class="card__img card__TV"></img>
//     <div class="card__info">
//     <h3 class="card__name">${item.name}</h3>
//     <span class="star">${rating}</span>
//     <p class="step__pay">${item.installment} so'mdan / 18oy</p>
//     <div class="card__bottom">
//       <span>${item.price} so'm</span>
//       <button class="add__to-cart">🛒</button>
//     </div>
//     </div>
//   `;

//     console.log(card);
//     card.classList.add("card");
//     cardWrap.append(card);
//     console.log(cardWrap);
//     swiper__cards.slideTo(0);
//     swiper__cards.params.loop = true;
//     swiper__cards.update();
//   });
// }

// addCart.onclick =  ()=>{
//   if (addCart.textContent == "🛒"){
//     addCart.textContent = "✅"
//   }
//   else if (addCart.textContent == "✅"){
//     addCart.textContent = "🛒"
//   }
// }
