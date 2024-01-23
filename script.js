const tjenesterEl = document.querySelectorAll(".Tjenester-Item");
const hamburgerBtn = document.querySelector("#HamBtn");
const hamburgermenuEl = document.querySelector(".hammeny-hidden");
const behandlingEl = document.querySelector("#BehandlingEl");

const bodyEl = document.querySelector("body");

behandlingEl.addEventListener("click", behandlingscroll);

for(let i = 0; i < tjenesterEl.length; i++) {
    tjenesterEl[i].addEventListener("mouseover", AnimasjonEnter);
    tjenesterEl[i].addEventListener("mouseout", AnimasjonExit);
}

function AnimasjonEnter() {
    this.className = "DivEnter"
};

function AnimasjonExit() {
    this.className = "DivExit";
}

if(window.innerWidth <= 718) {
    hamburgerBtn.addEventListener("click", Hamburgermeny)
}

function behandlingscroll() {
    window.scrollTo({
        top: 520,
        behavior: "smooth",
    });
}

function Hamburgermeny() {
    bodyEl.style.backgroundColor = "#e6e3e3";
    hamburgermenuEl.className = "hammeny-container";
    hamburgerBtn.removeEventListener("click", Hamburgermeny);
    hamburgerBtn.addEventListener("click", Lukkmeny);
}

function Lukkmeny() {
    bodyEl.style.backgroundColor = "";
    hamburgermenuEl.classList = "hammeny-hidden";
    hamburgerBtn.addEventListener("click", Hamburgermeny);
}