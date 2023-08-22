import { mod } from "./module.js";

alert("Enter your Konami Code to unlock secret content!");

window.addEventListener("keydown", press);

export function press(e) {
  console.log(e.key);

  switch (e.key) {
    case "ArrowLeft":
      createElem("⬅", e);
      break;
    case "ArrowRight":
      createElem("➡", e);
      break;
    case "ArrowDown":
      createElem("⬇", e);
      break;
    case "ArrowUp":
      createElem("⬆", e);
      break;
    case "b":
      createElem("b", e);
      break;
    case "a":
      createElem("a", e);
      break;
  }
}

let counter = 0;
let str = "";

function createElem(key, e) {
  let body = document.querySelector("body");
  let div = document.createElement("div");
  div.classList.add("key");
  div.append(key);
  body.append(div);
  counter++;
  str += e.keyCode;
  console.log(str);

  if (counter >= 10) {
    mod.compare(str);
    str = "";
    counter = 0;
    // let firstEl = document.querySelector(".key");
    // firstEl.remove();
  }
}

// function compare() {}
