window.onload = function () {
    const countDown = document.getElementById('countdown');
    const targetTime = new Date().getTime() + 86400000;

    function updateCountDown() {
        const now = new Date().getTime();
        const distance = targetTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countDown.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (distance < 0) {
            clearInterval(interval);
            countDown.textContent = 'どんまい';
        }
    }

    const interval = setInterval(updateCountDown, 1000);
    updateCountDown();

}
