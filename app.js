//Variables
const options = document.querySelector(".options .opt-con"),
  underline = document.querySelector(".underline"),
  btnWishlist = document.querySelector(".btn-wishlist"),
  heart = document.querySelector(".heart"),
  prevBtn = document.querySelector(".prevBtn"),
  nextBtn = document.querySelector(".nextBtn"),
  pHeader = document.querySelector(".pHeader"),
  pPrice = document.querySelector(".pPrice"),
  optionsText = document.querySelector(".options-text"),
  pImage = document.querySelector(".pImage"),
  dRating = document.querySelector(".dRating"),
  imgCon = document.querySelector(".img-con");
let pIndex = 0;

//array
const products = [
  {
    title: `IMPERIAL ARMY'S THE FIGHTER`,
    price: "$999.99",
    optionsTitle: "ENGINE UNIT",
    optionsItem: ["P-S4 TWIN", "P-W401"],
    dRate: 75,
    imgSrc: "./images/item-1.webp",
  },
  {
    title: `KYLO REN'S LIGHTSABER`,
    price: "$1699.99",
    optionsTitle: "VOLTAGE RANGE",
    optionsItem: ["1500 W", "2000 W"],
    dRate: 80,
    imgSrc: "./images/item-2.webp",
  },
  {
    title: `IMPERIAL ARMY'S DEATH STAR`,
    price: "$851.99",
    optionsTitle: "HYPERDRIVE RATING",
    optionsItem: ["CLASS 4", "CLASS 20"],
    dRate: 54,
    imgSrc: "./images/item-3.webp",
  },
  {
    title: `STORMTROPER HELMET`,
    price: "$1099.99",
    optionsTitle: "HELMET SIZE",
    optionsItem: ["S", "M", "L", "XL", "XXL"],
    dRate: 40,
    imgSrc: "./images/item-4.webp",
  },
];

//EventListeners

document.addEventListener("DOMContentLoaded", loadProduct());

nextBtn.addEventListener("click", function () {
  pIndex++;
  if (pIndex > products.length - 1) pIndex = 0;
  loadProduct();
});

prevBtn.addEventListener("click", function () {
  pIndex--;
  if (pIndex < 0) pIndex = products.length - 1;
  loadProduct();
});

options.addEventListener("click", function (e) {
  if (e.target.classList.contains("optItem")) {
    underlinePW(e.target.clientWidth, e.target.offsetLeft);
  }
});

btnWishlist.addEventListener("click", function () {
  heart.classList.toggle("red");
});

//Functions

function loadProduct() {
  heart.classList.remove("red");
  options.innerHTML = "";
  pHeader.innerHTML = products[pIndex].title;
  pPrice.innerHTML = products[pIndex].price;
  optionsText.innerHTML = products[pIndex].optionsTitle;
  let img = `<img class="pImage" src="${products[pIndex].imgSrc}" alt="">`;
  imgCon.innerHTML = img;
  let pImage = document.querySelector(".pImage");
  setTimeout(() => {
    pImage.style.opacity = "1";
    let a = -170;
    pImage.style.left = `${a}px`;
  }, 200);
  products[pIndex].optionsItem.forEach((i) => {
    let p = `<p class="f-light optItem">${i}</p>`;
    options.innerHTML += p;
  });
  let optItem = document.querySelector(".optItem");
  underlinePW(optItem.clientWidth, "0");
  dRating.innerHTML = products[pIndex].dRate;
  counterAnim('.dRating' , 0 , +products[pIndex].dRate , 1000)
}

function underlinePW(width, left) {
  underline.style.width = `${width}px`;
  underline.style.left = `${left}px`;
}

function counterAnim(qSelector, start, end, duration){
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    target.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};