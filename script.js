const hamburgerBtn = document.querySelector("#HamBtn");
const hamburgermenuEl = document.querySelector(".hammeny-hidden");

const bestillBtn = document.querySelectorAll(".bestillBtn")
const bestillSendBtn = document.querySelector("#Bestill-SendinnBtn")
const bestillTilbakeBtn = document.querySelector("#Bestill-TilbakeBtn")
const bestillingPopup = document.querySelector(".Bestill-Popup")

const navnInp = document.querySelector("#NavnInp")
const tlfInp = document.querySelector("#TlfInp")
const epostInp = document.querySelector("#EpostInp")
const selectInp = document.querySelector("#valgt-behandling")
const datoInp = document.querySelector("#DatoInp")

const tjenesterEl = document.querySelectorAll(".Tjenester-Item");
const menyitemEl = document.querySelectorAll(".Meny-Item")
const behandlingEl = document.querySelector("#BehandlingEl");

const bodyEl = document.querySelector("body");

bestillTilbakeBtn.addEventListener("click", LukkPopup);
bestillSendBtn.addEventListener("click", LukkPopup);

for(let i = 0; i < menyitemEl.length; i++) {
    menyitemEl[i].addEventListener("click", NavScroll)
}

for(let i = 0; i < tjenesterEl.length; i++) {
    tjenesterEl[i].addEventListener("mouseover", AnimasjonEnter);
    tjenesterEl[i].addEventListener("mouseout", AnimasjonExit);
    tjenesterEl[i].addEventListener("click", ValgtBehandling)
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

function NavScroll(e) {
    let valgtHeader = e.target;

    if(valgtHeader.id === "BehandlingEl") {
        window.scrollTo({
            top: 1280,
            behavior: "smooth",
        });
    }
    
    if(valgtHeader.id === "OmOssEl") {
        window.scrollTo({
            top: 600,
            behavior: "smooth",
        });
    }
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
    this.className = "DivEnter";
}

function AnimasjonExit() {
    this.className = "DivExit";
}

function ValgtBehandling(e) {
    let valgtbehandlingEl = e.target;

    if(valgtbehandlingEl.id === "Tjeneste-Akutt") {
        selectInp.value = "Akutt";
        BestillPopup()
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    if(valgtbehandlingEl.id === "Tjeneste-Rotfyll") {
        selectInp.value = "Rotfylling";
        BestillPopup()
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    if(valgtbehandlingEl.id === "Tjeneste-Undersøkelse") {
        selectInp.value = "Undersøkelse";
        BestillPopup()
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    if(valgtbehandlingEl.id === "Tjeneste-Tanntrekk") {
        selectInp.value = "Tanntrekking";
        BestillPopup()
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
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