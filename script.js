function redirect(page) {
  window.location.href = page;
}

function searchProduct() {
  let query = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (query === "" || card.getAttribute("data-name").includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

let index = 0;
function slide() {
  const items = document.querySelectorAll(".carousel-item");
  items.forEach((item, i) => item.classList.remove("active"));
  items[index].classList.add("active");
  index = (index + 1) % items.length;
}
setInterval(slide, 3000);
slide();
