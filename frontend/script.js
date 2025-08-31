    document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stops page reload

    fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Form submitted successfully!");
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error submitting form!");
    });
});