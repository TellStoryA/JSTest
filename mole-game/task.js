const dead = document.getElementById('dead')
const lost = document.getElementById('lost')
const holes = document.querySelectorAll('.hole')

for(let hole of holes) {
    const a = hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1            
        } else {
            lost.textContent = Number(lost.textContent) + 1
        }
        if (lost.textContent >= 5) {
            alert('Вы проиграли!'),
            dead.textContent = 0,
            lost.textContent =0
        } else if (dead.textContent >= 10) {
            alert('Вы ПОБЕДИЛИ!'),
            dead.textContent = 0,
            lost.textContent =0
        }
    }
}
