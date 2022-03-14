
//============================ panel ==============================
var panelpage2 = 1;
panel2(1);




function SelectPanel2(n) {
    panel2(panelpage2 = n);
}

function panel2(n) {
    var i;
    var page2 = document.getElementsByClassName("panel-page2");
    var StyPanel2 = document.getElementsByClassName("panels-details2");
    if (n > page2.length) { panelpage2 = 1 }
    if (n < 1) { panelpage2 = page2.length }
    for (i = 0; i < page2.length; i++) {
        page2[i].style.display = "none";
    }
    for (i = 0; i < StyPanel2.length; i++) {
        StyPanel2[i].classList.remove("border");
    }
    page2[panelpage2 - 1].style.display = "grid";
    StyPanel2[panelpage2 - 1].classList.add("border");
}