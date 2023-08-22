import { system32Files } from "./arr.js";
import { press } from "./index.js";

export const mod = (function () {
  const code = "38384040373937396665"; // oben-oben-unten-unten-links-rechts-links-rechts-b-a

  return {
    compare: function (input) {
      if (input === code) {
        window.removeEventListener("keydown", press);
        this.showHideContent();
      } else {
        this.clearInputs();
      }
    },
    showHideContent: function () {
      let elements = document.querySelectorAll(".key");
      elements.forEach((i) => {
        i.classList.add("true");
        i.innerText = "✔";
      });
      setTimeout(() => {
        elements.forEach((i) => {
          i.remove();
        });

        document.documentElement.requestFullscreen();
        document.querySelector("body").classList.add("new");

        window.addEventListener("keydown", (e) => {
          e.preventDefault();
          document.documentElement.requestFullscreen();
        });

        window.addEventListener("keydown", function (e) {
          var charCode = e.charCode || e.keyCode || e.which;
          if (charCode == 27) {
            alert("Cheater!");
            return false;
          }
        });

        let speed = 5;

        let str1 =
          "Initiating Cybernetic Penetration.................................. OK!";
        let str2 =
          "Scanning C:\\ drive for sensitive data.............................. OK!";
        let str3 =
          "Searching for saved passwords and credentials...................... OK!";
        let str4 =
          "Downloading enigmatic files and digital artifacts.................. OK!";
        let str5 =
          "Injecting Trojan.Horse.Generic29.GJG into C:\\Windows\\system32\\svchost.exe...";

        this.typeText(str1, speed);

        setTimeout(() => {
          this.typeText(str2, speed);
        }, speed * str1.length);

        setTimeout(() => {
          this.typeText(str3, speed);
        }, speed * (str1.length + str2.length));

        setTimeout(() => {
          this.typeText(str4, speed);
        }, speed * (str1.length + str2.length + str3.length));

        setTimeout(() => {
          let body = document.querySelector("body");
          let div = document.createElement("div");
          div.classList.add("absolut");
          let divInn = document.createElement("div");
          divInn.classList.add("absolutInn");
          div.append(divInn);

          let p = document.createElement("p");
          p.classList.add("pgf");
          p.setAttribute("id", "files");
          p.style.animation = "upload 2s 10";
          p.style.marginTop = (window.innerHeight - 476) / 2 + "px";
          p.append(str5);

          window.addEventListener("resize", () => {
            p.style.marginTop = (window.innerHeight - 476) / 2 + "px";
          });

          let btnDiv = document.createElement("div");
          btnDiv.classList.add("btn-container");

          let btn1 = document.createElement("button");
          btn1.append("I Give Up!");
          let btn2 = document.createElement("button");
          btn2.append("Cancel");
          btn2.setAttribute("id", "my-button");

          btnDiv.append(btn1, btn2);

          let cont = document.createElement("div");
          cont.classList.add("cont");
          cont.append(p, div, btnDiv);

          body.append(cont);

          // ---------------------------------------

          function getRandomElement(array) {
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
          }

          function updateOutput() {
            const outputDiv = document.getElementById("files");
            outputDiv.textContent =
              "Injecting Trojan.Horse.Generic29.GJG into C:\\Windows\\system32\\" +
              getRandomElement(system32Files);
          }

          let interval = setInterval(updateOutput, 100);

          //----------------------------------------

          function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }

          function newPosition(oldTop, oldLeft, width, height) {
            let range = 40;
            let newTop = getRandomInt(0, height);
            let newLeft = getRandomInt(0, width);
            if (
              (oldTop - range < newTop && oldTop + range > newTop) ||
              (oldLeft - range < newLeft && oldLeft + range > newLeft)
            ) {
              return newPosition(oldTop, oldLeft, width, height);
            } else {
              return [newTop, newLeft];
            }
          }

          let myButton = document.getElementById("my-button");

          myButton.addEventListener("mouseenter", function () {
            var buttonPosition = newPosition(
              parseInt(getComputedStyle(this).top),
              parseInt(getComputedStyle(this).left),
              window.innerWidth - 200,
              window.innerHeight - 60
            );
            this.style.top = buttonPosition[0] + "px";
            this.style.left = buttonPosition[1] + "px";
          });

          document
            .getElementsByTagName("button")[0]
            .addEventListener("click", function () {
              alert("I knew you would choose this! 😅");
              location.reload();
            });

          setTimeout(() => {
            clearInterval(interval);
            let body = document.querySelector("body");
            body.innerHTML = "";
            body.classList.toggle("new");
            let p = document.createElement("p");
            body.append(p);
            p.innerHTML = `<pre class="pg">
            ⠀⠀⠀⠀⠀⠀⠀⣀⠤⠔⠒⠒⠒⠉⠉⠉⠁⠒⠒⠒⠤⢄⡀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⡠⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⡀⠀⠀⠀⠀
            ⠀⠀⢀⡴⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⡀⠀⠀
            ⠀⡠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⡄⠀
            ⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄
            ⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣
            ⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
            ⢇⠀⢰⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⡇⠀⢸
            ⢸⠀⠀⣿⣿⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⠃⠀⡇
            ⠀⢧⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣶⡦⠀⠀⠠⣶⣾⣿⣿⣿⣿⣿⣿⠿⠃⠀⢰⠁
            ⠀⠈⢦⡀⠀⠀⠀⠀⠈⠉⠉⠉⠀⢀⣾⢰⡄⠀⠈⠉⠉⠉⠀⠀⠀⠀⠀⠀⡏⠀
            ⠀⠰⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡟⠸⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢣⠀
            ⠀⠸⡀⠀⠀⠀⣀⠔⠋⢹⠀⠀⠀⠙⠀⠀⠙⠀⠀⠀⠀⡖⠉⠉⣳⠀⠀⣠⠇⠀
            ⠀⠀⠑⠤⠔⠲⠭⠋⠀⢸⠀⠀⢀⠀⠀⡀⠀⣤⡄⠀⠀⡇⠀⠀⠓⠤⠊⠁⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⢸⠀⠀⡇⠀⢹⠀⠀⡸⠁⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢸⠀⠀⡇⠀⢸⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢸⠀⠀⡇⠀⢸⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⢸⠀⠀⡇⠀⣼⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢸⡀⠀⡇⠀⡟⠀⢰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠦⠼⢇⣠⢇⣠⠧⢀⠼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀            
            </pre>`;

            setTimeout(() => {
              alert(
                `You didn't have time!\nAfter clicking the "OK" button, the computer will be destroyed. Bye-bye 😀`
              );
              location.reload();
            }, 100);
          }, 20000);

          //----------------------------------------
        }, speed * (str1.length + str2.length + str3.length + str4.length));
      }, 1500);
    },
    clearInputs: function () {
      let elements = document.querySelectorAll(".key");
      elements.forEach((i) => {
        i.classList.add("false");
        i.innerText = "×";
      });
      setTimeout(() => {
        elements.forEach((i) => {
          i.remove();
        });
      }, 750);
    },
    typeText: function (text, speed) {
      let body = document.querySelector("body");
      body.style.backgroundColor = "#118";
      let p = document.createElement("p");
      p.classList.add("pgf");
      p.append("");
      body.append(p);

      const output = document.querySelectorAll("p");
      let index = 0;

      function typeNextChar() {
        if (index < text.length) {
          output[output.length - 1].textContent += text.charAt(index);
          index++;
          setTimeout(typeNextChar, speed);
        }
      }

      typeNextChar();
    },
  };
})();
