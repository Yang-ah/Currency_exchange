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

// **********************************************

const fromLi = document.querySelectorAll(".from_li");
const fromBtn = document.querySelector(".from_btn");
const fromTxt = document.querySelector(".from_txt");
const fromInput = document.querySelector(".from_input");
const fromForm = document.querySelector(".from_form");
const fromNum = document.querySelector(".from_num");
let fromCurrency = "KRW";

const toLi = document.querySelectorAll(".to_li");
const toBtn = document.querySelector(".to_btn");
const toTxt = document.querySelector(".to_txt");
const toInput = document.querySelector(".to_input");
const toForm = document.querySelector(".to_form");
const toNum = document.querySelector(".to_num");
let toCurrency = "KRW";

function changeCurrency(event) {
  let currency = event.target.innerText;
  let test = event.target.classList.contains("from_li");

  if (test == true) {
    fromCurrency = currency;
    convert("from");
    changeBtn("from");
  } else {
    toCurrency = currency;
    convert("to");
    changeBtn("to");
  }
}

function changeBtn(type) {
  if (type == "from") {
    fromBtn.textContent = fromCurrency;
    fromTxt.textContent = data[fromCurrency].unit;
  } else {
    toBtn.textContent = toCurrency;
    toTxt.textContent = data[toCurrency].unit;
  }
}

function convert(type) {
  let fromToValue = fromInput.value * data[fromCurrency][toCurrency];
  let toFromValue = toInput.value * data[toCurrency][fromCurrency];

  if (type == "from") {
    toInput.value = Math.floor(fromToValue * 1000) / 1000;
    fromNum.value = Number(fromInput.value).toLocaleString();
    toNum.value = Number(fromToValue).toLocaleString();
  } else {
    fromInput.value = Math.floor(toFromValue * 1000) / 1000;
    toNum.value = Number(toInput.value).toLocaleString();
    fromNum.value = Number(toFromValue).toLocaleString();
  }
}

fromLi.forEach((currency) =>
  currency.addEventListener("click", changeCurrency)
);
toLi.forEach((currency) => currency.addEventListener("click", changeCurrency));

fromForm.addEventListener("submit", () => preventDefault());
toForm.addEventListener("submit", () => preventDefault());
