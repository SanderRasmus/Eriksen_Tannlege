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

const priserEl = document.querySelector(".Priser-Section")
const priserContainer = document.querySelector(".Priser-Container")
const priserBtn = document.querySelector("#priserBtn");
const priserLukkBtn = document.querySelectorAll(".PriserLukkBtn")

const bodyEl = document.querySelector("body");

/* 
NavBar scrollTo funksjoner
*/

for(let i = 0; i < menyitemEl.length; i++) {
    menyitemEl[i].addEventListener("click", NavScroll)
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

    if(valgtHeader.id === "PriserEl") {
        window.scrollTo({
            top: 1320,
            behavior: "smooth",
        })
    }
}

/* 
Prisliste funksjoner
*/
priserBtn.addEventListener("click", PriserÅpne);

for(let i = 0; i < priserLukkBtn.length; i++) {
    priserLukkBtn[i].addEventListener("click", PriserLukk);
}

function PriserÅpne() {
    bodyEl.style.backgroundColor = "lightgrey";
    priserEl.style.visibility = "visible";
    priserEl.style.zIndex = 5;
    priserContainer.style.zIndex = 2;
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function PriserLukk() {
    bodyEl.style.backgroundColor = "";
    priserEl.style.visibility = "hidden";
    priserEl.style.zIndex= -1;
    priserContainer.style.zIndex = -1;
}

/* 
Hamburgermeny funksjoner
*/

if(window.innerWidth <= 718) {
    hamburgerBtn.addEventListener("click", Hamburgermeny)
    hamburgerBtn.style.zIndex = 3;
    hamburgermenuEl.style.zIndex = 2;
}
else {
    hamburgerBtn.style.zIndex = -1;
    hamburgermenuEl.style.zIndex = -1;
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

/* 
Tjeneste Hover funksjoner
*/


for(let i = 0; i < tjenesterEl.length; i++) {
    tjenesterEl[i].addEventListener("mouseover", AnimasjonEnter);
    tjenesterEl[i].addEventListener("mouseout", AnimasjonExit);
    tjenesterEl[i].addEventListener("click", ValgtBehandling);
}

function AnimasjonEnter() {
    this.className = "DivEnter";
}

function AnimasjonExit() {
    this.className = "DivExit";
}


/* 
Click Tjeneste funksjoner
*/

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

/* 
Popup / Timebestilling funksjoner
*/
for(let i = 0; i < bestillBtn.length; i++) {
    bestillBtn[i].addEventListener("click", BestillPopup);
}

bestillTilbakeBtn.addEventListener("click", LukkPopup);
bestillSendBtn.addEventListener("click", LukkPopup);

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
}