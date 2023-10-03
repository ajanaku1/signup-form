document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("mail").value;
    var phoneNumber = document.getElementById("number").value;
    var country = document.getElementById("country").value;
    var age = parseInt(document.getElementById("dt").value);

    if (!firstName || !lastName || !email || isNaN(phoneNumber) || country === "default" || !age) {
        alert("Please fill in all fields.");
    } else {
        if (age < 13) {
            alert("You are still a kid!");
        } else if (age < 18) {
            alert("You are an adolescent.");
        } else if (age < 28) {
            alert("You are a young adult.");
        } else if (age < 36) {
            alert("You are a middle aged person.");
        } else if (age < 55) {
            alert("You are old!");
        }  else if (age <= 70) {
            alert("You are in your twilight.");
        } else if (age <= 100) {
            alert("You are very old.");
        } else {
            alert("Why are you still alive?")
        }
    }
});