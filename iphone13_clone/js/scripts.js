const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");


// achou o buttons mas essta misturado
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
// vai des compaquitar as cores
    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );
// agora estar desse capsulado
    const button = e.target;

    const id = button.getAttribute("id");
// bottuob especifico
    button.querySelector(".color").classList.add("selected");

    image.classList.toggle("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`);
// função para voltar a cor normal
    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});