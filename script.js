function timeNow() {
    var d = new Date(),
        h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
        m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    return h + ':' + m;
}
window.onload = () => {
    document.getElementById("inp").focus()
}
setInterval(() => {
    document.getElementById("time").innerHTML = timeNow()
    document.getElementById("inp").focus()
}, 1)

function search() {
    if (event.keyCode == 13) {
        const s = document.getElementById("inp").value
        document.getElementById("inp").value = ""
        if (s.charAt(0) == ".") {
            try {
                window.location = cmd[s];
            } catch {
                window.location = "https://www.google.com/search?q=" + s;
            }
        } else {
            window.location = "https://www.google.com/search?q=" + s;
        }
    }
}