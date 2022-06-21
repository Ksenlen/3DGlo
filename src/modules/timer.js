let timeRemaining;
let getTime;

const timer = (deadline) => {

    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        timeRemaining = (dateStop - dateNow) / 1000;

        let hours = Math.floor((timeRemaining / 60 / 60));
        if (hours >= 0 && hours < 10) {
            hours = "0" + hours;
        }
        let minutes = Math.floor((timeRemaining / 60) % 60);
        if (minutes >= 0 && minutes < 10) {
            minutes = "0" + minutes;
        }
        let seconds = Math.floor(timeRemaining % 60);
        if (seconds >= 0 && seconds < 10) {
            seconds = "0" + seconds;
        }

        return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = () => {
        getTime = getTimeRemaining();


        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;
    };

    updateClock();

    if (getTime.timeRemaining > 0) {
        setInterval(updateClock, 1000);
    } else if (getTime.timeRemaining <= 0) {

        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
    }
};

export default timer;

