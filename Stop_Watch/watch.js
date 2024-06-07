window.onload = function () {
    var hours = 0;
    var mins = 0;
    var secs = 0;
    var msecs = 0;
    var interval;

    var gethours = document.querySelector("#hour");
    var getmins = document.querySelector("#min");
    var getsecs = document.querySelector("#sec");
    var getmsecs = document.querySelector("#msec");

    var startbtn = document.querySelector("#start");
    var stopbtn = document.querySelector("#stop");
    var resetbtn = document.querySelector("#reset");
    var aresetbtn = document.querySelector("#areset");

    startbtn.addEventListener("click", function() {
        console.log("Start button clicked!");
        startTimer();
    });

    stopbtn.addEventListener("click", function() {
        console.log("Stop button clicked!");
        stopTimer();
    });

    resetbtn.addEventListener("click", function() {
        console.log("Reset button clicked!");
        resetTimer();
    });

    aresetbtn.addEventListener("click", function() {
        console.log("Reset button clicked!");
        resetTimer();
    });

    function startTimer(){
        clearInterval(interval);
        interval = setInterval(updateTime, 10);
    };

    function stopTimer(){
        clearInterval(interval);
    };

    function resetTimer(){
        clearInterval(interval);
        hours = 0;
        mins = 0;
        secs = 0;
        msecs = 0;
        updateDisplay();
    };

    function updateTime() {
        msecs += 1;
        if (msecs === 100) {   // 100 centiseconds (10 milliseconds * 100) = 1 second
            msecs = 0;
            msecs = 0;
            secs += 1;
        }

        if (secs === 60) {
            secs = 0;
            mins += 1;
        }

        if (mins === 60){
            mins = 0;
            hours += 1;
        }
        
        updateDisplay();
    };

    function updateDisplay() {
        gethours.textContent = formatTime(hours);
        getmins.textContent = formatTime(mins);
        getsecs.textContent = formatTime(secs);
        getmsecs.textContent = formatTime(msecs);
    };

    function formatTime(unit) {
        return unit < 10 ? '0' + unit : unit;
    };
};