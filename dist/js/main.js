(() => { "use strict"; let e, t; (a => { const n = document.getElementById("timer-hours"), r = document.getElementById("timer-minutes"), l = document.getElementById("timer-seconds"), o = () => { t = (() => { let t = new Date("26 june 2022").getTime(), a = (new Date).getTime(); e = (t - a) / 1e3; let n = Math.floor(e / 60 / 60); n >= 0 && n < 10 && (n = "0" + n); let r = Math.floor(e / 60 % 60); r >= 0 && r < 10 && (r = "0" + r); let l = Math.floor(e % 60); return l >= 0 && l < 10 && (l = "0" + l), { timeRemaining: e, hours: n, minutes: r, seconds: l } })(), n.textContent = t.hours, r.textContent = t.minutes, l.textContent = t.seconds }; o(), t.timeRemaining > 0 ? setInterval(o, 1e3) : t.timeRemaining <= 0 && (n.textContent = "00", r.textContent = "00", l.textContent = "00") })(), (() => { const e = document.querySelector("menu"), t = document.querySelector("main"), a = () => { e.classList.toggle("active-menu") }; document.addEventListener("click", (n => { if (console.log(n.target), n.target.closest(".menu") || n.target.classList.contains("close-btn")) n.preventDefault(), a(); else if (n.target.closest("menu") && n.target.closest('a[href*="#"]')) { a(), n.preventDefault(); const e = n.target.closest('a[href*="#"]').getAttribute("href"); document.querySelector(e).scrollIntoView({ behavior: "smooth", block: "start" }) } else if (n.target.closest('a[href*="#"]') && t.contains(n.target)) { n.preventDefault(); const e = n.target.closest('a[href*="#"]').getAttribute("href"); document.querySelector(e).scrollIntoView({ behavior: "smooth", block: "start" }) } else e.classList.contains("active-menu") && e.classList.remove("active-menu") })) })(), (() => { const e = document.querySelector(".popup"), t = e.querySelector(".popup-content"), a = document.querySelectorAll(".popup-btn"); let n = document.documentElement.clientWidth; window.addEventListener("resize", (() => { n = document.documentElement.clientWidth })), a.forEach((a => { a.addEventListener("click", (() => { n >= 768 ? (t.style.opacity = 0, t.style.top = "", e.style.display = "block", r(!0)) : e.style.display = "block" })) })), e.addEventListener("click", (t => { t.target.closest(".popup-content") && !t.target.classList.contains("popup-close") || (e.style.display = "none") })); let r = a => { let n = Date.now(), r = setInterval((function () { let l = Date.now() - n; l >= 500 ? clearInterval(r) : a ? (function (e) { t.style.top = e / 50 + "%" }(l), function (e) { t.style.opacity = e / 500 }(l)) : function (a) { t.style.opacity = 1 - a / 500, t.style.opacity < .1 && (e.style.display = "none") }(l) }), 20) } })(), (() => { const e = document.querySelectorAll(".calc-block input"), t = document.querySelectorAll('input[name="user_name"]'), a = document.querySelectorAll('input[name="user_phone"]'), n = document.querySelectorAll('input[name="user_email"]'), r = document.querySelector("#form2-message"), l = e => { e.target.value = e.target.value.replace(/^[\s\-]+/g, ""), e.target.value = e.target.value.replace(/[\s\-]+$/g, ""), e.target.value = e.target.value.replace(/\s{2,}/g, " "), e.target.value = e.target.value.replace(/\-{2,}/g, "-"), e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase() }; e.forEach((e => { e.addEventListener("input", (e => { e.target.value = e.target.value.replace(/\D+/gi, "") })) })), t.forEach((e => { e.addEventListener("input", (e => { e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, "") })), e.addEventListener("blur", l) })), r.addEventListener("input", (e => { e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, "") })), r.addEventListener("blur", l), n.forEach((e => { e.addEventListener("input", (e => { e.target.value = e.target.value.replace(/[^\w\@\-\_\.\!\~\*\']+/, "") })), e.addEventListener("blur", l) })), a.forEach((e => { e.addEventListener("input", (e => { e.target.value = e.target.value.replace(/[^\d\(\)\-]+/, "") })), e.addEventListener("blur", l) })) })(), (() => { const e = document.querySelector(".service-header"), t = document.querySelectorAll(".service-header-tab"), a = document.querySelectorAll(".service-tab"); e.addEventListener("click", (e => { if (e.target.closest(".service-header-tab")) { const n = e.target.closest(".service-header-tab"); t.forEach(((e, t) => { e === n ? (e.classList.add("active"), a[t].classList.remove("d-none")) : (e.classList.remove("active"), a[t].classList.add("d-none")) })) } })) })() })();