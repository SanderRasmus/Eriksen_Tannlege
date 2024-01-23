const hamburgerBtn = document.querySelector("#HamBtn");
const bestillBtn = document.querySelectorAll(".bestillBtn")
const bestillSendBtn = document.querySelector("#Bestill-SendinnBtn")
const bestillTilbakeBtn = document.querySelector("#Bestill-TilbakeBtn")

const navnInp = document.querySelector("#NavnInp")
const tlfInp = document.querySelector("#TlfInp")
const epostInp = document.querySelector("#EpostInp")
const selectInp = document.querySelector("#valgt-behandling")
const datoInp = document.querySelector("#DatoInp")

const tjenesterEl = document.querySelectorAll(".Tjenester-Item");
const hamburgermenuEl = document.querySelector(".hammeny-hidden");
const behandlingEl = document.querySelector("#BehandlingEl");
const bestillingPopup = document.querySelector(".Bestill-Popup")

const bodyEl = document.querySelector("body");

behandlingEl.addEventListener("click", behandlingscroll);
bestillTilbakeBtn.addEventListener("click", LukkPopup);
bestillSendBtn.addEventListener("click", LukkPopup);


for(let i = 0; i < tjenesterEl.length; i++) {
    tjenesterEl[i].addEventListener("mouseover", AnimasjonEnter);
    tjenesterEl[i].addEventListener("mouseout", AnimasjonExit);
}

for(let i = 0; i < bestillBtn.length; i++) {
    bestillBtn[i].addEventListener("click", BestillPopup);
}

if(window.innerWidth <= 718) {
    hamburgerBtn.addEventListener("click", Hamburgermeny)
    hamburgerBtn.style.zIndex = 2;
    hamburgermenuEl.style.zIndex = 2;
}
else {
    hamburgerBtn.style.zIndex = -1;
    hamburgermenuEl.style.zIndex = -1;
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

function AnimasjonEnter() {
    this.className = "DivEnter"
}

function AnimasjonExit() {
    this.className = "DivExit";
}

function BestillPopup() {
    Lukkmeny()
    bodyEl.style.backgroundColor = "lightgrey";
    bestillingPopup.style.visibility = "visible";
    bestillingPopup.style.zIndex = 3;
}

function LukkPopup() {
    navnInp.value = "";
    tlfInp.value = "";
    epostInp.value = "";
    selectInp.value = "Undersøkelse";
    datoInp.value = "";
    bodyEl.style.backgroundColor = "white";
    bestillingPopup.style.visibility = "hidden";
    bestillingPopup.style.zIndex = 0;
    bestillingPopup.style.zIndex = 0;

}