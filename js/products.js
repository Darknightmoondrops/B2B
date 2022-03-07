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






//======================================== change page ==============================================
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
    for (i = 0; i < page.length; i++) {
        page[i].style.display = "none";
    }
    for (i = 0; i < number.length; i++) {
        page[i].classList.remove("pageActive");
    }
    page[pagenumber - 1].style.display = "block";
    number[pagenumber - 1].classList.add("pageActive");
}