var list = document.querySelectorAll(".flavors li");

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("mouseover", function () {
    this.style.fontSize = "20px";
  });

  list[i].addEventListener("mouseout", function () {
    this.style.fontSize = "16px";
  });
}
