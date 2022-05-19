const p = document.getElementById('timer')

    const interval = setInterval( () => {
        p.textContent = (Number(p.textContent) - 1);
            if(Number(p.textContent <= 0)) {
                clearInterval(interval),
                alert("Вы победили в конкурсе")
            }
        }, 1000 )