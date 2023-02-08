const opnenMenu =document.querySelector(".open-menu");
const nav =document.querySelector("nav");
const closeMenu =document.querySelector(".close-menu");
opnenMenu.addEventListener("click", function(){
    nav.style.right = "0";
});
closeMenu.addEventListener("click", function(){
    nav.style.right = "-100%";
});

/// helper function
function helper(btns, boxes) {
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            for(let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("active");
            }
            boxes.forEach(box => {
                if(this.id == box.dataset.id) {
                    box.classList.remove("hide");
                } else {
                    box.classList.add("hide");
                }
            });
            this.classList.add("active");
        });
    });
}

// show and hide content
function switchConetent(btns) {
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            if(this.classList.contains("active")) {
                this.classList.remove("active");
                this.nextElementSibling.classList.add("hide");
            } else {
                this.classList.add("active");
                this.nextElementSibling.classList.remove("hide");
            }
        });
    });
}

// 
const reviews = Array.from(document.querySelectorAll(".review"));
const bullets = Array.from(document.querySelectorAll(".bullet"));
helper(bullets, reviews);

//
const questions = Array.from(document.querySelectorAll(".question"));
switchConetent(questions);

// go up
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY < 200) {
        goUp.style.opacity = "0";
    }else if(this.scrollY >= 200) {
        goUp.style.opacity = ".8";
    }
});


//filter 
const categories = Array.from(document.querySelectorAll(".categories span"));
const categoriesBoxes = Array.from(document.querySelectorAll(".portfolio .box"));

categories.forEach(category => {
    category.addEventListener("click", function() {
        for(let i = 0; i < categories.length;i++) {
            categories[i].classList.remove("active");
        }
        categoriesBoxes.forEach(box => {
            if(this.id == box.dataset.id && this.id != "all") {
                box.classList.remove("hide");
            } else if (this.id == "all") {
                box.classList.remove("hide");
            } else {
                box.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});
