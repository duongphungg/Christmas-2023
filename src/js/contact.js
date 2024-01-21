function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
    }
    
    alert("Submitted Information:\n\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
    
    }