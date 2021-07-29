"use strict";

const toggle = document.querySelector(".switch input");
const annualCharge = document.querySelectorAll(".card h3 span");

toggle.addEventListener("change", function () {
  if (!this.checked) {
    annualCharge.forEach((charge) => {
      charge.textContent = `${(+charge.textContent * 10 + 0.09).toFixed(2)}`;
    });
  } else {
    annualCharge.forEach((charge) => {
      charge.textContent = `${(+charge.textContent / 10).toFixed(2) - 0.01}`;
    });
  }
});
