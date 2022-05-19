const cookie = document.getElementById('cookie')
const click = document.getElementById('clicker__counter')

const a = cookie.onclick = () => {
    click.textContent = Number(click.textContent) + 1
}

const b = cookie.onmouseup = () => {
    cookie.width += 20
    cookie.height += 20
}

const c = cookie.onmousedown = () => {
    cookie.width -= 20
    cookie.height -= 20
}