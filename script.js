document.addEventListener("DOMContentLoaded", function () {
    // Find the CTA button
    const button = document.querySelector(".cta-button");

    // Check if the button exists before adding an event listener
    if (button) {
        button.addEventListener("click", function () {
            // Use a more interactive confirmation dialog
            if (confirm("Welcome to EcoBites! Would you like to claim your 20% discount?")) {
                // Redirect to the discount page or show a coupon code
                window.location.href = "discount.html"; // Replace with actual discount page
            }
        });
    }
});

