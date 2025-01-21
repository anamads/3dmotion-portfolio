/*var try = document.getElementsByClass('bold');

// Add a mouseover event listener
try.addEventListener('mouseover', () => {
  // Change the button's background color
  try.style.color = 'blue';
});
*/

const press = document.getElementById("jsbut");

let pressButton = function () {
  press.style.backgroundColor = "#000000";
  press.style.color = "#FFFFFF";
};

press.addEventListener("mousedown", pressButton);

const hamb = document.getElementById("hamburger-icon");
const burgerlong = document.querySelector(".hamburger");

let pressham = function (e) {
  console.log(e.target);
  hamb.style.display = "none";
  burgerlong.style.display = "flex";
  burgerlong.style.flexDirection = "column";
};
hamb.addEventListener("click", pressham);

const faqs = document.querySelectorAll(".faq");
for (const item of faqs) {
  const curr_faq = item.childNodes;
  console.log(curr_faq);
  const question = curr_faq[1];
  const answer = curr_faq[3];
  const icon = question.querySelector(".icon-main");
  icon.addEventListener("click", function () {
    answer.classList.toggle("non-active");
    const i = icon.querySelector("i");
    i.classList.toggle("fa-xmark");
    i.classList.toggle("fa-plus");
  });
}

const close = document.getElementById("closeburger");
const closeFunction = () => {
  hamb.style.display = "block";
  burgerlong.style = "none";
};
close.addEventListener("click", closeFunction);
