/*
*/
const is = document.querySelectorAll(".important");
is.forEach((i) => {
    i.setAttribute("title", "This is an important item")
});

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
    if (!img.classList.contains("important")) {
        img.style.display = "none"
    }
});

const ps = document.querySelectorAll("p");
ps.forEach(function (paragraph) {
    const randomColor = getRandomColor();
    paragraph.style.color = randomColor;
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
