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
const fromInput = document.querySelector(".from_input");
const fromForm = document.querySelector(".from_form");
const fromLocalNum = document.querySelector(".from_local_num");
let fromCurrency = "KRW";

const toLi = document.querySelectorAll(".to_li");
const toBtn = document.querySelector(".to_btn");
const toTxt = document.querySelector(".to_txt");
const toInput = document.querySelector(".to_input");
const toForm = document.querySelector(".to_form");
const toLocalNum = document.querySelector(".to_local_num");

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

function convert(event) {
  let test = event.target.classList.contains("from_input");
  let inputValue = event.target.value;
  let fromToValue = inputValue * data[fromCurrency][toCurrency];
  let toFromValue = inputValue * data[toCurrency][fromCurrency];

  if (test == true) {
    toInput.value = fromToValue;
  } else {
    fromInput.value = toFromValue;
  }
}

fromInput.addEventListener("change", convert);
fromForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

toInput.addEventListener("change", convert);
toForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
