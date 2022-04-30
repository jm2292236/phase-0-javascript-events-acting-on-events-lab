// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");

    if (leftNumbers > 0) {
        const left = parseInt(leftNumbers, 10);
        dodger.style.left = `${left - 3}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");

    if (leftNumbers < 360) {
        const left = parseInt(leftNumbers, 10);
        dodger.style.left = `${left + 3}px`;
    }
}

const dodger = document.getElementById("dodger");
document.addEventListener("keydown", 
    function (event) {
        if (event.key === "ArrowLeft") {
            moveDodgerLeft();
        } else if (event.key === "ArrowRight") {
            moveDodgerRight();
        }
    });
