document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded")
    let el = document.querySelector('p')
    el.textContent = 'This is really cool!'
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);