const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.querySelector('.accordion__icon').textContent = '+';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.querySelector('.accordion__icon').textContent = '-';
    }
  });
}
