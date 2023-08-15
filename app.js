const car = document.getElementById("car");
// document.querySelector("#audio2").play();
window.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  if (e.keyCode == "39") {
    let carright = parseInt(
      this.window.getComputedStyle(car).getPropertyValue("left")
    );
    if (carright < 1500) {
      car.style.left = carright + 50 + "px";
      document.querySelector("#audio").play();
    }
  }
  if (e.keyCode == "37") {
    let carright = parseInt(
      this.window.getComputedStyle(car).getPropertyValue("left")
    );
    if (carright > 0) {
      car.style.left = carright - 50 + "px";
      document.querySelector("#audio").play();
    }
  }
  if (e.keyCode == "40") {
    let carbottom = parseInt(
      this.window.getComputedStyle(car).getPropertyValue("top")
    );
    console.log(carbottom);
    if (carbottom < 905) {
      car.style.top = carbottom + 30 + "px";
      document.querySelector("#audio").play();
    }
  }
  if (e.keyCode == "38") {
    let carbottom = parseInt(
      this.window.getComputedStyle(car).getPropertyValue("top")
    );
    console.log(carbottom);
    if (carbottom > 433) {
      car.style.top = carbottom - 30 + "px";
      document.querySelector("#audio").play();
    }
  }
});
