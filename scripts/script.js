document.addEventListener("DOMContentLoaded", function () {
    let carouselElement = document.querySelector("#birthdayCarousel");
    let carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Auto-slide every 3 seconds
        ride: "carousel",
    });
});