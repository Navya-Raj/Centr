document.addEventListener('DOMContentLoaded', function () {
    const reviews = document.querySelectorAll('.swiper-slide');
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            if (i === index) {
                review.style.display = 'block';
            } else {
                review.style.display = 'none';
            }
        });
    }

    document.querySelector('.swiper-button-next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    });

    document.querySelector('.swiper-button-prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
    });

    showReview(currentIndex);
});