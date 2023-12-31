const sapin = document.getElementById("sapin")

function move_décorations() {
    const left = sapin.offsetLeft
    const top = sapin.offsetTop
    const width = sapin.clientWidth
    const height = sapin.clientHeight

    for (const décoration of document.querySelectorAll("img.décoration")) {
        décoration.style.left = `${left + décoration.dataset.width*width}px`
        décoration.style.top = `${top + (1-décoration.dataset.height)*height}px`
        décoration.style.width = `${width * (décoration.dataset.scale_width || .07)}px`
    }
}

window.addEventListener("load", move_décorations)
window.addEventListener("resize", move_décorations)
