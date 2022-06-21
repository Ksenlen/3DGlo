const weekDays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
];

let newYear = new Date("2022.12.31").getTime();
let dateNow = new Date().getTime();
let timeRemaining = (newYear - dateNow) / 1000;
let days = Math.floor(timeRemaining / 60 / 60 / 24);

let date = new Date();
let day = date.getDay();
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let timeDay = "";
let str = "";

if (hours >= 24 || hours <= 6) {
    timeDay = "ночь";
} else if (hours > 6 && hours <= 12) {
    timeDay = "утро";
} else if (hours > 12 && hours <= 18) {
    timeDay = "день";
} else if (hours > 18 && hours < 24) {
    timeDay = "вечер";
}

if (hours >= 0 && hours <= 12) {
    str = "PM";
} else if (hours > 12 && hours < 24) {
    str = "AM";
}
let englishTime = () => {
    if (str === "AM") {
        hours = hours - 12;
    }
};
englishTime();

document.body.innerHTML = `<p> Добрый ${timeDay} <br\>
       Сегодня: ${weekDays[day]} <br\>
       Текущее время:${hours}:${min}:${sec} ${str} <br\>
       До нового года осталось ${days} дня/дней </p>`;
getTime();