//=========================================== slider product 5 ===========================
var pagenumber5 = 1;
slidechenger5(1);


function plusslides5(n) {
    slidechenger5(pagenumber5 += n)
}

function currentslide5(n) {
    slidechenger5(pagenumber5 = n);
}

function slidechenger5(n) {
    var i;
    var page = document.getElementsByClassName("p5-page");
    var number = document.getElementsByClassName("dot5");
    if (n > page.length) { pagenumber5 = 1 }
    if (n < 1) { pagenumber5 = page.length }
    for (i = 0; i < page.length; i++) {
        page[i].style.display = "none";
    }
    for (i = 0; i < number.length; i++) {
        number[i].classList.remove("dot-active");
    }
    page[pagenumber5 - 1].style.display = "block";
    number[pagenumber5 - 1].classList.add("dot-active");
    setInterval(function() {
        showSliders(slideIndex = slideIndex + 1)
    }, 5000);
}
//=========================================== slider product 6 ===========================
var pagenumber6 = 1;
slidechenger6(1);


function plusslides6(n) {
    slidechenger6(pagenumber6 += n)
}

function currentslide6(n) {
    slidechenger6(pagenumber6 = n);
}

function slidechenger6(n) {
    var i;
    var page = document.getElementsByClassName("p6-page");
    var number = document.getElementsByClassName("dot6");
    if (n > page.length) { pagenumber6 = 1 }
    if (n < 1) { pagenumber6 = page.length }
    for (i = 0; i < page.length; i++) {
        page[i].style.display = "none";
    }
    for (i = 0; i < number.length; i++) {
        number[i].classList.remove("dot-active");
    }
    page[pagenumber6 - 1].style.display = "block";
    number[pagenumber6 - 1].classList.add("dot-active");
}
//=========================================== slider product 7 ===========================
var pagenumber7 = 1;
slidechenger7(1);


function plusslides7(n) {
    slidechenger7(pagenumber7 += n)
}

function currentslide7(n) {
    slidechenger7(pagenumber7 = n);
}

function slidechenger7(n) {
    var i;
    var page = document.getElementsByClassName("p7-page");
    var number = document.getElementsByClassName("dot7");
    if (n > page.length) { pagenumber7 = 1 }
    if (n < 1) { pagenumber7 = page.length }
    for (i = 0; i < page.length; i++) {
        page[i].style.display = "none";
    }
    for (i = 0; i < number.length; i++) {
        number[i].classList.remove("dot-active");
    }
    page[pagenumber7 - 1].style.display = "block";
    number[pagenumber7 - 1].classList.add("dot-active");
}
//======================================== change page horiz ==============================================

var pagenumber = 1;
pagechenger(pagenumber);


function pluspage(n) {
    pagechenger(pagenumber += n)
}

function pageslide(n) {
    pagechenger(pagenumber = n);
}

function pagechenger(n) {
    var i;
    var page = document.getElementsByClassName("products-page");

    var number = document.getElementsByClassName("page");
    if (n > page.length) { pagenumber = 1 }
    if (n < 1) { pagenumber = page.length }
    for (i = 0; i < page.length; i++) {
        page[i].style.display = "none";
    }
    for (i = 0; i < number.length; i++) {
        number[i].classList.remove("pageActive");
    }
    page[pagenumber - 1].style.display = "block";
    number[pagenumber - 1].classList.add("pageActive");
}


//============================== change page vert ================
var pagenumber8 = 1;
pagechengers(pagenumber8);


function pluspages(n) {
    pagechengers(pagenumber8 += n)
}

function pageslides(n) {
    pagechengers(pagenumber8 = n);
}

function pagechengers(n) {
    var i;
    var pageVert = document.getElementsByClassName("products-page1");

    var number1 = document.getElementsByClassName("pages");
    if (n > pageVert.length) { pagenumber8 = 1 }
    if (n < 1) { pagenumber8 = pageVert.length }
    for (i = 0; i < pageVert.length; i++) {
        pageVert[i].style.display = "none";
    }
    for (i = 0; i < number1.length; i++) {
        number1[i].classList.remove("pageActive");
    }
    pageVert[pagenumber8 - 1].style.display = "block";
    number1[pagenumber8 - 1].classList.add("pageActive");
}
//=============================price range=======================
const rangeInput = document.querySelectorAll(".multi-range input"),
    priceInput = document.querySelectorAll(".text-violet input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

//======================================= change mode ======================================
function changepage(n) {
    var mode2 = document.getElementsByClassName("hori-list");
    var mode1 = document.getElementsByClassName("vert-list");
    var bordshow1 = document.getElementsByClassName("show-mode-p1");
    var bordshow2 = document.getElementsByClassName("show-mode-p2");

    if (n == 1) {
        mode1[0].style.display = "block";
        mode2[0].style.display = "none";
        bordshow2[0].classList.remove("show-mode-border");
        bordshow1[0].classList.add("show-mode-border");
    }
    if (n == 2) {
        mode1[0].style.display = "none";
        mode2[0].style.display = "block";
        bordshow1[0].classList.remove("show-mode-border");
        bordshow2[0].classList.add("show-mode-border");
    }
}