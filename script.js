document.addEventListener("DOMContentLoaded", () => {

    /* HERO TEXT */
    const heading = document.getElementById("welcome-text");
    const words = heading.innerText.split(" ");
    heading.innerText = "";

    words.forEach((word, i) => {
        const span = document.createElement("span");
        span.innerHTML = word + "&nbsp;";
        span.style.animationDelay = `${i * 0.25}s`;
        heading.appendChild(span);
    });

    /* MEMES */
    document.querySelectorAll(".meme-pin").forEach(pin => {

        const imgUrl = pin.style.getPropertyValue("--img")
            .replace(/url\(['"]?|['"]?\)/g, "");

        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = "meme";
        pin.appendChild(img);

        const btn = document.createElement("button");
        btn.className = "download-btn";
        btn.innerText = "⬇️";
        pin.appendChild(btn);

        btn.onclick = e => {
            e.stopPropagation();
            const a = document.createElement("a");
            a.href = imgUrl;
            a.download = imgUrl.split("/").pop();
            a.click();
        };
    });

});
/* -------------------------------
   SHUFFLE MEMES (PINTEREST FEEL)
-------------------------------- */
const grid = document.querySelector(".meme-grid");
const pins = Array.from(grid.children);

// Fisher–Yates shuffle
for (let i = pins.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pins[i], pins[j]] = [pins[j], pins[i]];
}

// Re-append shuffled items
pins.forEach(pin => grid.appendChild(pin));
