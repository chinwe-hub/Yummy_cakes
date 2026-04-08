function order(cake) {
    document.getElementById("cakeName").value = cake;
    location.href = "#custom";
}

function submitForm(e) {
    e.preventDefault();
    alert("Order sent successfully 🎉");
}

function goToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}