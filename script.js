function validateForm(event) {

    event.preventDefault(); // STOP page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    message.innerHTML = "";

    if (name.length < 3) {
        message.innerHTML =
            '<i class="fa-solid fa-circle-xmark"></i> Name must be at least 3 characters';
        message.className = "error";
        return;
    }

    if (!emailPattern.test(email)) {
        message.innerHTML =
            '<i class="fa-solid fa-circle-xmark"></i> Enter a valid email address';
        message.className = "error";
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        message.innerHTML =
            '<i class="fa-solid fa-circle-xmark"></i> Phone number must be 10 digits';
        message.className = "error";
        return;
    }

    message.innerHTML =
        '<i class="fa-solid fa-circle-check"></i> Form submitted successfully!';
    message.className = "success";
}
