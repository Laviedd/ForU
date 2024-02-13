const btn = document.querySelector(".overlay button")
btn?.addEventListener("click", () => {
    setTimeout(function () {
        const audio = document.getElementById("myAudio");
        audio.play();
    }, 500); // Sau 1 giây
    const overlay = document.querySelector('.overlay');
    overlay.style.transition = 'opacity 2s ease'; // Thêm hiệu ứng mờ dần trong 1 giây
    overlay.style.opacity = '0'; // Đặt độ trong suốt của overlay là 0
    setTimeout(function () {
        overlay.style.display = 'none'; // Ẩn overlay sau khi mờ dần
    }, 2000); // Sau 1 giây
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        const audio = document.getElementById("myAudio");
        audio.play();
        clearTimeout(c);
    }, 2000);
})