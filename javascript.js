const pres = document.querySelector("#presentation");
const pres1 = document.querySelector("#fiche_metier");
const pres2 = document.querySelector("#compte_rendu");
const pres4 = document.querySelector("#bilan");

pres.style.display = 'block'
pres1.style.display = 'none'
pres2.style.display = 'none'
pres4.style.display = 'none'

document.querySelector("#presentation1").addEventListener("click", ()=>{
    pres.style.display = 'block'
    pres1.style.display = 'none'
    pres2.style.display = 'none'
    pres4.style.display = 'none'

})
document.querySelector("#fiche_metier1").addEventListener("click", ()=>{
    pres.style.display = 'none'
    pres1.style.display = 'block'
    pres2.style.display = 'none'
    pres4.style.display = 'none'

})
document.querySelector("#compte_rendu1").addEventListener("click", ()=>{
    pres.style.display = 'none'
    pres1.style.display = 'none'
    pres2.style.display = 'block'
    pres4.style.display = 'none'

})
document.querySelector("#bilan1").addEventListener("click", ()=>{
    pres.style.display = 'none'
    pres1.style.display = 'none'
    pres2.style.display = 'none'
    pres4.style.display = 'block'

})