const button = document.querySelector(".heart-like-button");

button.addEventListener("click", () => {
    if (button.classList.contains("liked")) {
        button.classList.remove("liked");
    } else {
        button.classList.add("liked");
    }
});


const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
})


//============ copy ============
// cache dom
var $shareBtn = $(".share-btn");
var $shareUrl = $(".share-url");
var $shareContainer = $(".share-container");
var $notificationButton = $(".notification-button");

// set data
var $url = window.location.href;
var $shared = false;

/**
 *
 */
function shareLink(e) {
    // set active class
    $shareBtn.toggleClass("active");
    $shareUrl.toggleClass("active");
    $shareContainer.toggleClass("active");

    if ($shared === false) {
        // trigger notification alert
        $notificationButton.toggleClass("active");
        $shared = true;
        $shareBtn.text("Unshare");
        $shareUrl.text($url);

        var range = document.createRange();
        range.selectNode($(this).next()[0]);
        window.getSelection().addRange(range);

        try {
            // Now that we've selected the anchor text, execute the copy command
            var successful = document.execCommand("copy");
            var msg = successful ? "successful" : "unsuccessful";
            console.log("Copy email command was " + msg);
        } catch (err) {
            console.log("Oops, unable to copy");
        }

        // Remove the selections - NOTE: Should use
        // removeRange(range) when it is supported
        window.getSelection().removeAllRanges();
    } else {
        $shared = false;
        $shareBtn.text("Share");
    }
}

/**
 * removes the active class after a set period of time
 */
function fadeOutNotification() {
    setTimeout(function() {
        $notificationButton.removeClass("active");
    }, 2000);
}

// bind events
$shareBtn.on("click", shareLink);
$notificationButton.on("transitionend", fadeOutNotification);