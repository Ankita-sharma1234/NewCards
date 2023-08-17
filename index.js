const hiddenElement = document.getElementById("hiddenElement");
const coupon1 = document.getElementById("coupon1");
const coupon2 = document.getElementById("coupon2");

let isSwapped = false;

hiddenElement.addEventListener("click", () => {
  if (!isSwapped) {
    coupon1.style.order = "2";
    coupon2.style.order = "1";
    isSwapped = true;
  } else {
    coupon1.style.order = "";
    coupon2.style.order = "";
    isSwapped = false;
  }
});