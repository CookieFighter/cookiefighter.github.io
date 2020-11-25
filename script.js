var currentMode = "light"

function mode() {
    if (currentMode === "light") {
        document.getElementById("css").href = "css/dark.css";
        document.getElementById("logo").src = "cdn/cookie_gif.gif"
        document.getElementById("mode").innerText = "Light Mode"
        currentMode = "dark";
    } else if (currentMode === "dark") {
        document.getElementById("logo").src = "cdn/cookie_light_theme.png"
        document.getElementById("css").href = "css/light.css";
        document.getElementById("mode").innerText = "Dark Mode"
        currentMode = "light";
    }
}