let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 100); // (*)
}, 100);

clearTimeout()