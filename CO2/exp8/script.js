function updateClock() {
    const now = new Date();
    
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    
    document.getElementById('digital-clock').innerText = `${h}:${m}:${s}`;
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date-display').innerText = now.toLocaleDateString(undefined, options);
}

function updateCountdown() {
    const examDate = new Date('August 15, 2026 09:00:00').getTime();
    const now = new Date().getTime();
    const diff = examDate - now;

    if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = d < 10 ? '0' + d : d;
        document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
        document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
        document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;
    } else {
        document.getElementById('countdown').innerHTML = "<h3>Examination has started!</h3>";
    }
}

setInterval(updateClock, 1000);
setInterval(updateCountdown, 1000);

updateClock();
updateCountdown();
