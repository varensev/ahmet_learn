function countdown(seconds) {
    function tick() {
        console.log(seconds);
        seconds--;

        if (seconds >= 0) {
            setTimeout(tick, 1000);
        } else {
            console.log('time out');
        }
    }

    tick();
}

countdown(5)

function countdownInt(seconds) {
    let intervalID = setInterval(tick, 1000);
    function tick() {
        console.log(seconds)
        if (seconds <= 0) {
            clearInterval(intervalID)
        } else {
            seconds--
        }
    }
}

countdownInt(5)

