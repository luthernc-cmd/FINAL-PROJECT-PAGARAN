function showMessage() {
    document.getElementById("demo").innerHTML =
    "Welcome to my Portfolio Website!";
}

function submitForm() {

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name === "" || message === "") {

        document.getElementById("output").innerHTML =
        "Please complete the form.";

    } else {

        document.getElementById("output").innerHTML =
        "Thank you, " + name +
        "! Your message has been submitted successfully.";
    }
}
```
