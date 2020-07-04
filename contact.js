const patterns = {
    nameformat: /^([A-Z])[a-z]+(?:\s([A-Z])[a-z]+)*$/,
    emailformat: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    messageformat: /^(?!\s*$).+$/,
};



function validateInputs(name, email, message) {
    if (!test(name, patterns.nameformat)) {
        alert("invalid username");
        document.form1.username.focus();
    } else if (!test(email, patterns.emailformat)) {
        alert("invalid email");
        document.form1.email.focus();
    } else if (!test(message, patterns.messageformat)) {
        alert("invalid message");
        document.form1.textarea.focus();
    } else {
        alert("Message has been sent.");
    }
}

function test(input, regex) {
    return input.value.match(regex)
}

function required() {
    let username = document.forms["form1"]["username"].value;
    let email = document.forms["form1"]["email"].value;
    let textarea = document.forms["form1"]["textarea"].value;
    if (!username == "" && !email == "" && !textarea == "") {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }

}