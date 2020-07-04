
var handleClick = function (event) {
    if (button.style.backgroundColor == "red"){
        button.style.backgroundColor = "black";
    } else {
        button.style.backgroundColor = "red"
    }
    
};
var button = document.getElementById("link");
button.addEventListener('click', handleClick);
