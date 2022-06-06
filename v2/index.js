function timeNow() {
    let d = new Date(),
        h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
        m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    return h + ':' + m;
}

document.getElementById("clock").innerHTML = timeNow();
setInterval(() => {
    document.getElementById("clock").innerHTML = timeNow();
}, 1000);
document.getElementById("quote").innerHTML = "\"<i>" + quotes[Math.floor(Math.random() * quotes.length)] + "</i>\"<strong> <br> - Sun Tzu, The Art of War</strong>";

document.getElementById("text").focus()


function search() {
    if (event.keyCode == 13) {
        const s = document.getElementById("text").value
        document.getElementById("text").value = ""
        if (s in cmd) {
            window.location = cmd[s];
        } else {
            window.location = "https://www.google.com/search?q=" + s;
        }
    }
}