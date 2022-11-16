const ListeApprenants = ["BAALI Ike-David","DETHIER Maxime","DOMERGUE Jonathan","FALCONIER Franck","OZMANOV Alik","PENTEADO Anthony","PETIT Wilfrid","PICHOFF Brandon","TRAVASSOS Carl-Antoine"];

const card = document.getElementById("card");
const whereTheCardsAre = document.getElementById("sizer");
const Cards = document.getElementById("card");

const nombreGroupe = document.getElementById("numberSelect");
const placer = document.getElementById("BoutonPlacer"); 
const initialiser = document.getElementById("BoutonInitialiser");


ListeApprenants.forEach((nom,index) => {
    const aNewDiv = document.createElement('div');
    aNewDiv.classList.add("flipcard");
    aNewDiv.classList.add("h");
    aNewDiv.innerHTML = `<div class="front interrogation">?</div>
                            <div class="back smiley" style='background-image: url("images/smiley/smiley-10.png");'>
                            <div class="prenom">Prénom</div>
                            <div class="nom">Nom</div>
                        </div>`;
    whereTheCardsAre.appendChild(aNewDiv);
    });
    

nombreGroupe.addEventListener("change", (event) => {
    //console.log(event);
   // alert(event.target.value);
   whereTheCardsAre.style.width = event.target.value+"px";
});

placer.addEventListener("click", function( event ) {
    const toutesLesCartes = document.querySelectorAll(".flipcard");
    const shuffleMix =_.shuffle(ListeApprenants);
    

toutesLesCartes.forEach((card,index) => {
    setTimeout(() => {
    card.classList.toggle('flip');
    let smileyRandom = Math.floor((Math.random()*15)+1);
    card.querySelector(".smiley").style.backgroundImage="url(./images/smiley/smiley-"+smileyRandom+".png)";
    card.querySelector(".prenom").textContent=shuffleMix[index].split(" ")[1];
    card.querySelector(".nom").textContent=shuffleMix[index].split(" ")[0];
    },1000*index);
    placer.disabled = true;
    nombreGroupe.disabled = !event.target.checked;
    initialiser.disabled = event.target.checked;
});
});

initialiser.addEventListener('click', (event) => {
    initialisation();
 
function initialisation() {
        placer.disabled = false;
        nombreGroupe.disabled = event.target.checked;
        initialiser.disabled = !event.target.checked;
        aNewDiv = "initial";
        const toutesLesCartes = document.querySelectorAll(".flipcard");
        toutesLesCartes.forEach((card,index) => {
            card.classList.toggle('flip');
            placer.disabled = false;
            nombreGroupe.disabled = event.target.checked;
            initialiser.disabled = !event.target.checked;
        });
    };
});
//push 

