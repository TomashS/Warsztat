document.addEventListener("DOMContentLoaded", function () {

    // rozwijane menu

    var menu = document.querySelectorAll("nav ul li");

    for (var i = 0; i < menu.length; i++) {
        menu[i].addEventListener("mouseover", function () {
            var subMenu = this.querySelector('ul');
            if(subMenu != null){
                subMenu.style.display='block';
            }
        });
/*
        menu[i].addEventListener("mouseout", function () {
            var subMenu = this.querySelector('ul');
            if(subMenu != null){
                subMenu.style.display='none';
            }
        });*/
    }


    //  slider

            var next = document.querySelector(".arrow_right");
            var prev = document.querySelector(".arrow_left");
            var pics = document.querySelectorAll(".slider li");

            var thePic = pics[0].classList.add("visible");

            var counter = 0;

            next.addEventListener("click", function n() {

                if (counter < pics.length-1) {
                    pics[counter].style.display = "none";
                    counter++;
                    pics[counter].style.display = "block";
                }

            });

            prev.addEventListener("click", function p() {
                if (counter >= 1 ) {
                    pics[counter].style.display = "none";
                    counter--;
                    pics[counter].style.display = "block";
                }
            });

// magic text

    var images = document.querySelectorAll(".images img");

    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("mouseover", function () {
            var inscription = this.nextElementSibling;
                inscription.style.display = "none";
        });

        images[i].addEventListener("mouseout", function () {
            var inscription = this.nextElementSibling;
            inscription.style.display = "block";
        });
    }

});
