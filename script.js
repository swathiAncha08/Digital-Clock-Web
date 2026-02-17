let is24Hour = true;

function updateClock(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if(!is24Hour){
        h = h % 12 || 12;
    }

    h = String(h).padStart(2,'0');
    m = String(m).padStart(2,'0');
    s = String(s).padStart(2,'0');

    document.getElementById("clock").innerText =
        `${h}:${m}:${s}`;
}

function toggleFormat(){
    is24Hour = !is24Hour;
}

setInterval(updateClock,1000);
updateClock();
