//======================= trash alert ==================================

function trash(n) {
    var boxOne = document.getElementsByClassName("question-box");
    var shadowBox = document.getElementsByClassName("background");
    if (n == 1) {
        boxOne[0].classList.remove("qu-off");
        boxOne[0].classList.add("qu-on");
        shadowBox[0].style.display = "block";
    }
    if (n == 2) {
        boxOne[0].classList.remove("qu-on");
        boxOne[0].classList.add("qu-off");
        shadowBox[0].style.display = "none";
    }
}

// =================================== close ======================
function close(n) {
    console.log(1);
    var boxOne1 = document.getElementsByClassName("question-box-two");
    var shadowBox1 = document.getElementsByClassName("background");
    if (n == 1) {
        boxOne1[0].classList.remove("qu-two-off");
        boxOne1[0].classList.add("qu-two-on");
        shadowBox1[0].style.display = "block";
    }
    if (n == 2) {
        boxOne1[0].classList.remove("qu-two-on");
        boxOne1[0].classList.add("qu-two-off");
        shadowBox1[0].style.display = "none";
    }
}