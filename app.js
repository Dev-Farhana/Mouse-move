document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".mouse").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 60;
            const y = (window.innerHeight - event.pageY * position) / 60;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }