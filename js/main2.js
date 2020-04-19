//10秒あてゲーム

var game = {
    startTime: null,
    displayArea: document.getElementById('diaplay-area'),

    start: function() {
        game.startTime = Date.now();
        document.body.onkeydown = game.stop;
        console.log('スタートしました');
    },
    
    stop: function() {
        const currentTime = Date.now();
        const seconds = (currentTime - game.startTime) / 1000;
        if (seconds >= 9.5 && seconds <= 10.5) {
            displayArea.innerText = seconds + '秒でしたすごい';
        } else {
            game.displayArea.innerText = seconds + '秒でした残念';
        }
        console.log('ストップしました');
    },
}

if (confirm ('OKを押して10秒だと思ったら何かキーを押して下さい')) {
    game.start();
};