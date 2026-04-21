document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".cart-btn");
  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Item added to cart!");
    });
  });

  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.transform = "scale(1.05)";
    });
    box.addEventListener("mouseleave", () => {
      box.style.transform = "scale(1)";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.getElementById("toggler");
  const navbar = document.querySelector(".navbar");

  toggler.addEventListener("change", () => {
    if (toggler.checked) {
      navbar.style.clipPath = "polygon(0, 0, 100%, 0, 100%, 100%, 0, 100%)";
    } else {
      navbar.style.clipPath = "polygon(0, 0, 100%, 0, 100%, 0, 0, 0)";
    }
  });
});
