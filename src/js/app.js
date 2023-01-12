const body            = document.querySelector("body"),
      interactiveMenu = document.querySelector(".hero__interactive-menu");


      interactiveMenu.addEventListener("change", () => {

        if(interactiveMenu.checked == true) {
          body.style.overflow = "hidden";
        } else {
          body.style.overflow = "";

        }
      })