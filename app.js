let body = document.querySelector("body");
let locate = document.querySelector(".location");
let citiesList = document.querySelector(".cities-list");
let citiesListM1 = document.querySelector(".cities-listM1");
let citiesListM2 = document.querySelector(".cities-listM2");
let locationM1 = document.querySelector(".locationM1");
let locationM2 = document.querySelector(".locationM2");

let addedProducts = JSON.parse(localStorage.getItem("products")) || [];

let cartCounter = document.querySelector(".cart__counter");
let BottomCounter = document.querySelector(".bottom__cart-coutner")

let count__prods = addedProducts.length;


cartCounter.textContent = count__prods;
BottomCounter.textContent = count__prods;

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
let bottomCart = document.querySelector(".bottom__nav-cart");
let pusrchaseList = document.querySelector(".purchase__list");

let addedCart = document.querySelector(".added__cart-bg");
let addedCartClose = document.querySelector(".acart__close");
let checkAll = document.querySelector(".checkbox__cart");

addedCartClose.onclick = () => {
  addedCart.classList.toggle("display__off");
};

shoppingCart.onclick = () => {
  pusrchaseList.innerHTML = "";
  prodList();
  if (addedProducts.length == 0) {
    cartBG.classList.remove("display__off");
  } else {
    addedCart.classList.toggle("display__off");
  }
};
bottomCart.onclick = () => {
  pusrchaseList.innerHTML = "";
  prodList();
  if (addedProducts.length == 0) {
    cartBG.classList.remove("display__off");
  } else {
    addedCart.classList.toggle("display__off");
  }
};
let immidPay = document.querySelector(".immid__pay");
let creditPay = document.querySelector(".credit__pay");

immidPay.onclick = () => {
  immidPay.classList.add("white__bg");
  creditPay.classList.remove("white__bg");
};
creditPay.onclick = () => {
  immidPay.classList.remove("white__bg");
  creditPay.classList.add("white__bg");
};

function prodList() {
  addedProducts.forEach((item) => {
    let card = document.createElement("div");
    let count = 0;
    let totalPrice = 0;

    // card.classList.add(".purchase__card")

    card.innerHTML = `
      <input type="checkbox" checked class="cart__item-check">
      <img src="${item.src}" width="108" height="108">
      <div>
      <h3>${item.name}</h3>
      <div class="countbox">
      <button class="increase">+</button>
      <span class="count__div">${count}</span>
      <button class="decrease">-</button>
      </div>
      <p>${item.price} so'm</p>
      <div class="button__box">
        <button class="cart__heart"><i class="fa-regular fa-heart"></i></button>
        <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      </div>
    `;

    pusrchaseList.append(card);
    card.classList.add("purchase__card");

    let increase = card.querySelector(".increase");
    let decrease = card.querySelector(".decrease");
    let countDiv = card.querySelector(".count__div");
    let delet = card.querySelector(".delete");
    let check = card.querySelector(".cart__item-check");
    check.checked = true;

    delet.onclick = () => {
      card.remove();
      count__prods= addedProducts.length-1;
      cartCounter.textContent = count__prods;
      BottomCounter.textContent = count__prods;

      if (addedProducts.length == 1) {
        cartCounter.classList.add("display__off");
      }

      addedProducts = addedProducts.filter((element) => item.id !== element.id);
      localStorage.setItem("products", JSON.stringify(addedProducts));

      if (addedProducts.length == 0) {
        addedCart.classList.toggle("display__off");
        cartBG.classList.toggle("display__off");
      } else if (addedProducts.length > 2) {
        pusrchaseList.classList.add("purchase__list2");
      } else {
        pusrchaseList.classList.remove("purchase__list2");
      }
    };
    increase.onclick = () => {
      count = count + 1;
      countDiv.textContent = count;
    };
    decrease.onclick = () => {
      if (count > 0) {
        count = count - 1;
        countDiv.textContent = count;
      }
    };
    checkAll.checked = true;

    check.onchange = () => {
      if (check.checked == true) {
        checkCount++;
      } else if (checkCount > 0 && check.checked == false) {
        checkCount--;
      }
      if (checkCount == addedProducts.length) {
        checkAll.checked = true;
      } else if (checkCount < addedProducts.length) {
        checkAll.checked = false;
      }
    };
  });
}

checkAll.onchange = () => {
  if (checkAll.checked == true) {
    pusrchaseList.innerHTML = "";
    prodList();
  }
};

if (addedProducts.length > 2) {
  pusrchaseList.classList.add("purchase__list2");
} else {
  pusrchaseList.classList.remove("purchase__list2");
}

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
      slidesPerView: 7.1,
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
      slidesPerView: 10.2,
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

let rendTVS = document.querySelector(".TVs");
let rendPhones = document.querySelector(".smartphones");
let rendTablet = document.querySelector(".tablets");
let rendLaun = document.querySelector(".laundry__machines");
let rendAir = document.querySelector(".air__con");
let rendFridge = document.querySelector(".fridge");
let rendVac = document.querySelector(".vacuums");
let rendLap = document.querySelector(".laptop");
let rendCoffee = document.querySelector(".coffee__maker");
let rendHair = document.querySelector(".hair__drier");

let renarr = [
  rendTVS,
  rendAir,
  rendCoffee,
  rendFridge,
  rendHair,
  rendLap,
  rendLaun,
  rendPhones,
  rendTablet,
  rendVac,
];

function nonSelect() {
  renarr.map((item) => {
    item.classList.remove("selected");
  });
}

function addPhone() {
  cardWrapper.replaceChildren();
  phones.forEach((item) => {
    let box = document.createElement("div");

    let rating = "";
    if (item.review == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.review} ta sharq`;
    }

    box.innerHTML = `
      <img src="${item.src}" width="220" height="230">
      <div class="card__info">
        <h2 class="card__title">${item.name}</h2>
        <p class="card__rating">${rating}</p>
        <p class="card__credit">${item.installment}</p>
        <div class="card__bottom">
          <span>${item.price} so'm</span>
          <button id="add__cart">🛒</button>
        </div>

      </div>

    `;

    let btn = box.querySelector("button");

    btn.onclick = () => {
      if (!addedProducts.find((item2) => item.id == item2.id)) {
        addedProducts.push(item);
        prodList();
        localStorage.setItem("products", JSON.stringify(addedProducts));

        if (addedProducts.length > 2) {
          pusrchaseList.classList.add("purchase__list2");
        } else {
          pusrchaseList.classList.remove("purchase__list2");
        }
      }
      count__prods= addedProducts.length;
      cartCounter.textContent = count__prods;
      BottomCounter.textContent = count__prods;

      if (addedProducts.length > 0) {
        cartCounter.classList.remove("display__off");
      }
    };

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
    breakpoints: {
      1026: {
        slidesPerView: 4.3,
      },
      769: {
        slidesPerView: 3.4,
      },
      341: {
        slidesPerView: 2.5,
      },
      1: {
        slidesPerView: 2,
      },
    },
  });
}

addPhone();

rendPhones.onclick = () => {
  nonSelect();
  rendPhones.classList.add("selected");
  addPhone();
};

import { TVs } from "./datas.js";

function addTVs() {
  cardWrapper.replaceChildren();
  TVs.forEach((item) => {
    let box = document.createElement("div");

    let rating = "";
    if (item.reviews == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.reviews} ta sharq`;
    }

    box.innerHTML = `
      <img src="${item.src}" width="220" height="230">
      <div class="card__info">
        <h2 class="card__title">${item.name}</h2>
        <p class="card__rating">${rating}</p>
        <p class="card__credit">${item.installment}</p>
        <div class="card__bottom">
          <span>${item.price} so'm</span>
          <button id="add__cart">🛒</button>
        </div>

      </div>

    `;

    let btn = box.querySelector("button");

    btn.onclick = () => {
      if (!addedProducts.find((item2) => item.id == item2.id)) {
        addedProducts.push(item);
        prodList();
        localStorage.setItem("products", JSON.stringify(addedProducts));

        if (addedProducts.length > 2) {
          pusrchaseList.classList.add("purchase__list2");
        } else {
          pusrchaseList.classList.remove("purchase__list2");
        }
      }
      count__prods= addedProducts.length;
      cartCounter.textContent = count__prods;

      if (addedProducts.length > 0) {
        cartCounter.classList.remove("display__off");
      }
    };

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
    breakpoints: {
      1026: {
        slidesPerView: 10,
      },
      769: {
        slidesPerView: 3.4,
      },
      341: {
        slidesPerView: 2.5,
      },
      1: {
        slidesPerView: 2,
      },
    },
  });
}

rendTVS.onclick = () => {
  nonSelect();
  rendTVS.classList.add("selected");
  addTVs();
};

import { kirYuvishMashinasi } from "./datas.js";

function addLaun() {
  cardWrapper.replaceChildren();
  kirYuvishMashinasi.forEach((item) => {
    let box = document.createElement("div");

    let rating = "";
    if (item.reviews == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.reviews} ta sharq`;
    }

    box.innerHTML = `
      <img src="${item.src}" width="220" height="230">
      <div class="card__info">
        <h2 class="card__title">${item.name}</h2>
        <p class="card__rating">${rating}</p>
        <p class="card__credit">${item.installment}</p>
        <div class="card__bottom">
          <span>${item.price} so'm</span>
          <button id="add__cart">🛒</button>
        </div>

      </div>

    `;

    let btn = box.querySelector("button");

    btn.onclick = () => {
      if (!addedProducts.find((item2) => item.id == item2.id)) {
        addedProducts.push(item);
        prodList();
        localStorage.setItem("products", JSON.stringify(addedProducts));

        if (addedProducts.length > 2) {
          pusrchaseList.classList.add("purchase__list2");
        } else {
          pusrchaseList.classList.remove("purchase__list2");
        }
      }
      count__prods= addedProducts.length;
      cartCounter.textContent = count__prods;

      if (addedProducts.length > 0) {
        cartCounter.classList.remove("display__off");
      }
    };

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
    breakpoints: {
      1026: {
        slidesPerView: 4.3,
      },
      769: {
        slidesPerView: 3.4,
      },
      341: {
        slidesPerView: 2.5,
      },
      1: {
        slidesPerView: 2,
      },
    },
  });
}

rendLaun.onclick = () => {
  nonSelect();
  rendLaun.classList.add("selected");
  addLaun();
};

import { planshetlar } from "./datas.js";

function addTablet() {
  cardWrapper.replaceChildren();
  planshetlar.forEach((item) => {
    let box = document.createElement("div");

    let rating = "";
    if (item.reviews == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.reviews} ta sharq`;
    }

    box.innerHTML = `
      <img src="${item.src}" width="220" height="230">
      <div class="card__info">
        <h2 class="card__title">${item.name}</h2>
        <p class="card__rating">${rating}</p>
        <p class="card__credit">${item.installment}</p>
        <div class="card__bottom">
          <span>${item.price} so'm</span>
          <button id="add__cart">🛒</button>
        </div>

      </div>

    `;

    let btn = box.querySelector("button");

    btn.onclick = () => {
      if (!addedProducts.find((item2) => item.id == item2.id)) {
        addedProducts.push(item);
        prodList();
        localStorage.setItem("products", JSON.stringify(addedProducts));

        if (addedProducts.length > 2) {
          pusrchaseList.classList.add("purchase__list2");
        } else {
          pusrchaseList.classList.remove("purchase__list2");
        }
      }
     count__prods= addedProducts.length;
      cartCounter.textContent = count__prods;

      if (addedProducts.length > 0) {
        cartCounter.classList.remove("display__off");
      }
    };

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
    breakpoints: {
      1026: {
        slidesPerView: 4.3,
      },
      769: {
        slidesPerView: 3.4,
      },
      341: {
        slidesPerView: 2.5,
      },
      1: {
        slidesPerView: 2,
      },
    },
  });
}

rendTablet.onclick = () => {
  nonSelect();
  rendTablet.classList.add("selected");
  addTablet();
};

import { changyutgichlar } from "./datas.js";

function addVacs() {
  cardWrapper.replaceChildren();
  changyutgichlar.forEach((item) => {
    let box = document.createElement("div");

    let rating = "";
    if (item.reviews == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.reviews} ta sharq`;
    }

    box.innerHTML = `
      <img src="${item.src}" width="220" height="230">
      <div class="card__info">
        <h2 class="card__title">${item.name}</h2>
        <p class="card__rating">${rating}</p>
        <p class="card__credit">${item.installment}</p>
        <div class="card__bottom">
          <span>${item.price} so'm</span>
          <button id="add__cart">🛒</button>
        </div>

      </div>

    `;

    let btn = box.querySelector("button");

    btn.onclick = () => {
      if (!addedProducts.find((item2) => item.id == item2.id)) {
        addedProducts.push(item);
        prodList();
        localStorage.setItem("products", JSON.stringify(addedProducts));

        if (addedProducts.length > 2) {
          pusrchaseList.classList.add("purchase__list2");
        } else {
          pusrchaseList.classList.remove("purchase__list2");
        }
      }
      count__prods= addedProducts.length;
      cartCounter.textContent = count__prods;

      if (addedProducts.length > 0) {
        cartCounter.classList.remove("display__off");
      }
    };

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
    breakpoints: {
      1026: {
        slidesPerView: 4.3,
      },
      769: {
        slidesPerView: 3.4,
      },
      341: {
        slidesPerView: 2.5,
      },
      1: {
        slidesPerView: 2,
      },
    },
  });
}

rendVac.onclick = () => {
  nonSelect();
  rendVac.classList.add("selected");
  addVacs();
};

import { muzlatgichlar } from "./datas.js";

function addFridges() {
  cardWrapper.replaceChildren();
  muzlatgichlar.forEach((item) => {
    let box = document.createElement("div");

    let rating = "";
    if (item.reviews == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.reviews} ta sharq`;
    }

    box.innerHTML = `
      <img src="${item.src}" width="220" height="230">
      <div class="card__info">
        <h2 class="card__title">${item.name}</h2>
        <p class="card__rating">${rating}</p>
        <p class="card__credit">${item.installment}</p>
        <div class="card__bottom">
          <span>${item.price} so'm</span>
          <button id="add__cart">🛒</button>
        </div>

      </div>

    `;

    let btn = box.querySelector("button");

    btn.onclick = () => {
      if (!addedProducts.find((item2) => item.id == item2.id)) {
        addedProducts.push(item);
        prodList();
        localStorage.setItem("products", JSON.stringify(addedProducts));

        if (addedProducts.length > 2) {
          pusrchaseList.classList.add("purchase__list2");
        } else {
          pusrchaseList.classList.remove("purchase__list2");
        }
      }
     count__prods= addedProducts.length;
      cartCounter.textContent = count__prods;

      if (addedProducts.length > 0) {
        cartCounter.classList.remove("display__off");
      }
    };

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
    breakpoints: {
      1026: {
        slidesPerView: 4.3,
      },
      769: {
        slidesPerView: 3.4,
      },
      341: {
        slidesPerView: 2.5,
      },
      1: {
        slidesPerView: 2,
      },
    },
  });
}

rendFridge.onclick = () => {
  nonSelect();
  rendFridge.classList.add("selected");
  addFridges();
};

import { konditsionerlar } from "./datas.js";

function addAir() {
  cardWrapper.replaceChildren();
  konditsionerlar.forEach((item) => {
    let box = document.createElement("div");

    let rating = "";
    if (item.reviews == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.reviews} ta sharq`;
    }

    box.innerHTML = `
      <img src="${item.src}" width="220" height="230">
      <div class="card__info">
        <h2 class="card__title">${item.name}</h2>
        <p class="card__rating">${rating}</p>
        <p class="card__credit">${item.installment}</p>
        <div class="card__bottom">
          <span>${item.price} so'm</span>
          <button id="add__cart">🛒</button>
        </div>

      </div>

    `;

    let btn = box.querySelector("button");

    btn.onclick = () => {
      if (!addedProducts.find((item2) => item.id == item2.id)) {
        addedProducts.push(item);
        prodList();
        localStorage.setItem("products", JSON.stringify(addedProducts));

        if (addedProducts.length > 2) {
          pusrchaseList.classList.add("purchase__list2");
        } else {
          pusrchaseList.classList.remove("purchase__list2");
        }
      }
      count__prods= addedProducts.length;
      cartCounter.textContent = count__prods;

      if (addedProducts.length > 0) {
        cartCounter.classList.remove("display__off");
      }
    };

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
    breakpoints: {
      1026: {
        slidesPerView: 4.3,
      },
      769: {
        slidesPerView: 3.4,
      },
      341: {
        slidesPerView: 2.5,
      },
      1: {
        slidesPerView: 2,
      },
    },
  });
}

rendAir.onclick = () => {
  nonSelect();
  rendAir.classList.add("selected");
  addAir();
};

import { qahvaMoshinalari } from "./datas.js";

function addCof() {
  cardWrapper.replaceChildren();
  qahvaMoshinalari.forEach((item) => {
    let box = document.createElement("div");

    let rating = "";
    if (item.reviews == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.reviews} ta sharq`;
    }

    box.innerHTML = `
      <img src="${item.src}" width="220" height="230">
      <div class="card__info">
        <h2 class="card__title">${item.name}</h2>
        <p class="card__rating">${rating}</p>
        <p class="card__credit">${item.installment}</p>
        <div class="card__bottom">
          <span>${item.price} so'm</span>
          <button id="add__cart">🛒</button>
        </div>

      </div>

    `;

    let btn = box.querySelector("button");

    btn.onclick = () => {
      if (!addedProducts.find((item2) => item.id == item2.id)) {
        addedProducts.push(item);
        prodList();
        localStorage.setItem("products", JSON.stringify(addedProducts));

        if (addedProducts.length > 2) {
          pusrchaseList.classList.add("purchase__list2");
        } else {
          pusrchaseList.classList.remove("purchase__list2");
        }
      }
      count__prods= addedProducts.length;
      cartCounter.textContent = count__prods;

      if (addedProducts.length > 0) {
        cartCounter.classList.remove("display__off");
      }
    };

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
    breakpoints: {
      1026: {
        slidesPerView: 4.3,
      },
      769: {
        slidesPerView: 3.4,
      },
      341: {
        slidesPerView: 2.5,
      },
      1: {
        slidesPerView: 2,
      },
    },
  });
}

rendCoffee.onclick = () => {
  nonSelect();
  rendCoffee.classList.add("selected");
  addCof();
};

import { sochQuritgichlar } from "./datas.js";

function addHair() {
  cardWrapper.replaceChildren();
  sochQuritgichlar.forEach((item) => {
    let box = document.createElement("div");

    let rating = "";
    if (item.reviews == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.reviews} ta sharq`;
    }

    box.innerHTML = `
      <img src="${item.src}" width="220" height="230">
      <div class="card__info">
        <h2 class="card__title">${item.name}</h2>
        <p class="card__rating">${rating}</p>
        <p class="card__credit">${item.installment}</p>
        <div class="card__bottom">
          <span>${item.price} so'm</span>
          <button id="add__cart">🛒</button>
        </div>

      </div>

    `;

    let btn = box.querySelector("button");

    btn.onclick = () => {
      if (!addedProducts.find((item2) => item.id == item2.id)) {
        addedProducts.push(item);
        prodList();
        localStorage.setItem("products", JSON.stringify(addedProducts));

        if (addedProducts.length > 2) {
          pusrchaseList.classList.add("purchase__list2");
        } else {
          pusrchaseList.classList.remove("purchase__list2");
        }
      }
      count__prods= addedProducts.length;
      cartCounter.textContent = count__prods;

      if (addedProducts.length > 0) {
        cartCounter.classList.remove("display__off");
      }
    };

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
    breakpoints: {
      1026: {
        slidesPerView: 4.3,
      },
      769: {
        slidesPerView: 3.4,
      },
      341: {
        slidesPerView: 2.5,
      },
      1: {
        slidesPerView: 2,
      },
    },
  });
}

rendHair.onclick = () => {
  nonSelect();
  rendHair.classList.add("selected");
  addHair();
};

rendLap.onclick = () => {
  cardWrapper.innerHTML = "";
  nonSelect();
  rendLap.classList.add("selected");
};

let chat = document.querySelector(".chat");
let chatBox = document.querySelector(".chat__box");
let supportUL = document.querySelector(".support__ul");

chat.onclick = () => {
  chatBox.classList.toggle("chat__box2");
  supportUL.classList.toggle("display__off");
};

let headerCat = document.querySelector(".header__catalog");
let horBox = document.querySelector(".horror__img");
let crepScream = document.querySelector(".creepy__scream");
function scream() {
  horBox.classList.toggle("display__off");
  horBox.requestFullscreen();
  crepScream.play();
}

headerCat.onclick = scream;
horBox.onclick = () => {
  horBox.classList.toggle("display__off");
};

import { newProds } from "./datas.js";

function renderNews() {
  let newsBox = document.querySelector(".news__wrapper");

  newProds.forEach((item) => {
    let card = document.createElement("div");
    let rating = "";
    if (item.reviews == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.reviews} ta sharq`;
    }
    card.innerHTML = `
    <img src="${item.src}" alt="" class="card__img">
    <div class="card__info">
    <h3 class="card__name">${item.name}</h3>
    <span class="star">${rating}</span>
    <p class="step__pay">${item.installment}</p>
    <div class="card__bottom">
      <span>${item.price}</span>
      <button  class="add__to-cart">🛒</button>
    </div>
    </div>
  `;

    let btn = card.querySelector("button");

    btn.onclick = () => {
      if (!addedProducts.find((item2) => item.id == item2.id)) {
        addedProducts.push(item);
        prodList();
        localStorage.setItem("products", JSON.stringify(addedProducts));
      } else if (addedProducts.length > 2) {
        pusrchaseList.classList.add("purchase__list2");
      } else {
        pusrchaseList.classList.remove("purchase__list2");
      }
      count__prods= addedProducts.length;
      cartCounter.textContent = count__prods;

      if (addedProducts.length > 0) {
        cartCounter.classList.remove("display__off");
      }
    };

    newsBox.append(card);
    card.classList.add("new__card");
    card.classList.add("swiper-slide");
  });
  var newSwiper = new Swiper(".new__prods", {
    slidesPerView: 4.36,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1026: {
        slidesPerView: 4.3,
      },
      769: {
        slidesPerView: 3.4,
      },
      341: {
        slidesPerView: 3.6,
      },
      1: {
        slidesPerView: 1.6,
      },
    },
  });
}

renderNews();

import { brandImages } from "./datas.js";
let brandsWrapper = document.querySelector(".brands__swiper");

function renderBrands() {
  brandImages.forEach((item) => {
    let card = document.createElement("div");

    card.innerHTML = `
      <img src="${item}" alt="">
    `;
    brandsWrapper.append(card);
    card.classList.add("swiper-slide");
    card.classList.add("brand__box");
  });
  var brandsSwiper = new Swiper(".popular__brands", {
    slidesPerView: 8.5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      1026: {
        slidesPerView: 8.5,
      },
      769: {
        slidesPerView: 6.2,
      },
      341: {
        slidesPerView: 4.6,
      },
      1: {
        slidesPerView: 1.6,
      },
    },
  });
}

renderBrands();

import { stock__buttons } from "./datas.js";
let stockCat = document.querySelector(".stock__cat");

function renderStockCat() {
  stock__buttons.forEach((item, index) => {
    let btnCat = document.createElement("button");

    btnCat.textContent = item;
    btnCat.classList.add("btn__cat");
    btnCat.classList.add("swiper-slide");
    btnCat.classList.add(`btn__cat${index}`);
    stockCat.append(btnCat);
  });

  var stocksSwiper = new Swiper(".stocks__middle", {
    slidesPerView: 8.5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      1026: {
        slidesPerView: 8.5,
      },
      769: {
        slidesPerView: 6.2,
      },
      341: {
        slidesPerView: 4.6,
      },
      1: {
        slidesPerView: 1.6,
      },
    },
  });
}

renderStockCat();

import { stocks } from "./datas.js";
let stockProds = document.querySelector(".stock__prods");

function renderStocks() {
  stocks.forEach((item) => {
    let card = document.createElement("div");

    let rating = "";
    if (item.reviews == 0) {
      rating += `🩶 Sharq yo'q`;
    } else {
      rating += `❤️ ${item.reviews} ta sharq`;
    }
    card.innerHTML = `
    <img src="${item.src}" alt="" class="card__img">
    <div class="card__info">
    <h3 class="card__name">${item.name}</h3>
    <span class="star">${rating}</span>
    <p class="step__pay">${item.installment}</p>
    <div class="card__bottom">
      <span>${item.price}</span>
      <button  class="add__to-cart">🛒</button>
    </div>
    </div>
  `;

    stockProds.append(card);
    card.classList.add("swiper-slide");
    card.classList.add("stock__card");

    let btn = card.querySelector("button");

    btn.onclick = () => {
      if (!addedProducts.find((item2) => item.id == item2.id)) {
        addedProducts.push(item);
        if (addedProducts.length > 2) {
          pusrchaseList.classList.add("purchase__list2");
        } else {
          pusrchaseList.classList.remove("purchase__list2");
        }
        prodList();
        localStorage.setItem("products", JSON.stringify(addedProducts));
      }
      count__prods= addedProducts.length;
      cartCounter.textContent = count__prods;

      if (addedProducts.length > 0) {
        cartCounter.classList.remove("display__off");
      }
    };
  });

  var stockSwiper = new Swiper(".stocks__bottom", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1026: {
        slidesPerView: 4.5,
      },
      769: {
        slidesPerView: 3.2,
      },
      341: {
        slidesPerView: 2.71,
      },
      1: {
        slidesPerView: 1.6,
      },
    },
  });
}

renderStocks();

import { news } from "./datas.js";
let newsWrapper = document.querySelector(".news__wrapper2");

function rendNews() {
  news.forEach((item) => {
    let card = document.createElement("div");

    card.innerHTML = `
      <img src="${item.src}" alt="">
      <p class="date">${item.description}</p>
      <h4 class="new__title">${item.name}</h4>
    `;

    card.classList.add("swiper-slide");
    card.classList.add("news__card");
    newsWrapper.append(card);
  });

  var newsSwiper = new Swiper(".news", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1026: {
        slidesPerView: 4.5,
      },
      769: {
        slidesPerView: 3.9,
      },
      341: {
        slidesPerView: 2.9,
      },
      1: {
        slidesPerView: 1.6,
      },
    },
  });
}

rendNews();

import { allprods } from "./datas.js";

let allProds = allprods.flat(Infinity);
let selectedSearch = document.querySelector(".selected__search");
let Input__search = document.getElementById("serch");
let searchBox = document.querySelector(".search__box");
let Input__M1 = document.querySelector(".search__inputM1");
let SearchBoxM1 = document.querySelector(".search__listM1")




Input__search.oninput = (e) => {

  searchBox.classList.remove("display__off");
  searchBox.innerHTML = "";
  let value = e.target.value;
  let image = "";

  allProds.forEach((item) => {
    if (item.name.toLowerCase().includes(value.toLowerCase())) {
      let box = document.createElement("div");

      box.innerHTML = `
        <img src="${item.src}" alt="" width="40" height="50">
        <p>${item.name}</p>
      `;
      box.classList.add("search__item");
      searchBox.append(box);
    }
  });

  if (value.length == 0) {
    searchBox.innerHTML = "";
    searchBox.classList.add("display__off");
  }
};



Input__M1.oninput = (e) => {
  
  SearchBoxM1.classList.remove("display__off");
  SearchBoxM1.innerHTML = "";
  let value = e.target.value;
  let image = "";

  
  allProds.forEach((item) => {
    if (item.name.toLowerCase().includes(value.toLowerCase())) {
      let box = document.createElement("div");
      
      box.innerHTML = `
        <img src="${item.src}" alt="" width="40" height="50">
        <p>${item.name}</p>
      `;
      box.classList.add("search__item");
      SearchBoxM1.append(box);
    }
  });

  if (value.length == 0) {
    SearchBoxM1.innerHTML = "";
    SearchBoxM1.classList.add("display__off");
  }
};