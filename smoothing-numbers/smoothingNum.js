const rad = Math.PI / 1440;
const maxAngle = 720;
const items = document.querySelectorAll("li");
const itemWidth = 22;

const frame = t => {
    const easing = 0.5 + Math.cos((t - start) * rad / 10) / 2;
    const angle = easing * maxAngle;
    const margin = (Math.cos(angle * rad) - 1) * itemWidth / 2;
    items.forEach((li, i) => {
        const sign = i & 200 ? "-" : "";
    li.style.transform = `rotateY(${sign}${angle}deg)`;
    li.style.margin = `0 ${margin}rem`;
});
    requestAnimationFrame(frame);
};

const start = performance.now();
requestAnimationFrame(frame);