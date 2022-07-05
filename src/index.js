import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calc from "./modules/calc";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";



timer('01 july 2022');
menu();
modal();
calc(100);
tabs();
slider();
sendForm({
    formID: "form1",
    someElem: [
        {
            type: "block",
            id: "total",
        },
    ],
});
sendForm({
    formID: "form2",
    someElem: [
        {
            type: "block",
            id: "total",
        },
    ],
});
sendForm({
    formID: "form3",
    someElem: [
        {
            type: "block",
            id: "total",
        },
    ],
});