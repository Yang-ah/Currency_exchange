// 1. make data objects
const data = {
  USD: {
    USD: 1,
    KRW: 1414.66,
    JPY: 147.11,
    CNY: 7.28,
    unit: "dallars",
  },
  KRW: {
    KRW: 1,
    USD: 0.00071,
    JPY: 0.1,
    CNY: 0.0051,
    unit: "won",
  },
  JPY: {
    JPY: 1,
    KRW: 9.62,
    USD: 0.0068,
    CNY: 0.05,
    unit: "yen",
  },

  CNY: {
    CNY: 1,
    JPY: 20.2,
    KRW: 194.3,
    USD: 0.14,
    unit: "yuan",
  },
};

// 2. change value
// 2-1. change content of btn
// 2-2. change txt
const fromLi = document.querySelectorAll(".from_li");
const fromBtn = document.querySelector(".from_btn");
const fromTxt = document.querySelector(".from_txt");
let fromCurrency = "KRW";

const toLi = document.querySelectorAll(".to_li");
const toBtn = document.querySelector(".to_btn");
const toTxt = document.querySelector(".to_txt");
let toCurrency = "KRW";

function changeCurrency(event) {
  let currency = event.target.innerText;
  let test = event.target.classList.contains("from_li");

  if (test == true) {
    fromCurrency = currency;
    fromBtn.textContent = currency;
    fromTxt.textContent = data[currency].unit;
  } else {
    toCurrency = currency;
    toBtn.textContent = currency;
    toTxt.textContent = data[currency].unit;
  }
}

fromLi.forEach((currency) =>
  currency.addEventListener("click", changeCurrency)
);
toLi.forEach((currency) => currency.addEventListener("click", changeCurrency));

// 3. convert
// as value of each btns, change each output

// main
