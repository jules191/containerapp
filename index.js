// Initialisierung der Werte
let totalWeight = document.querySelector("#totalWeight");
let amountPortions = document.querySelector("#amountPortions");
let portionSizeLabel = document.querySelector("#portionSize");

function Container(key, description, weight, lid, picture) {
    this.key = key;
    this.description = description;
    this.weight = weight;
    this.lid = lid;
    this.picture = picture;
}
let potBig = new Container("potBig", "Topf, groß", 1377, true, "./images/Topf.jpg");
let potMidHigh = new Container("potMidHigh", "Topf, mittel, hoch", 993, true, "./images/Topf.jpg");

let containerCollection = {
    "potBig": potBig,
    "potMidHigh": potMidHigh
};

let dropdown = document.querySelector("#containers");

dropdown.addEventListener("change", function () {
    let selectedKey = dropdown.value;
    let selectedContainer = containerCollection[selectedKey];
    
    document.querySelector("#weight").innerHTML = "Gewicht: " + selectedContainer.weight + " g";

    if (selectedContainer.lid) {
        document.querySelector("#lid").innerHTML = "Deckel: Ja";
    } else {
        document.querySelector("#lid").innerHTML = "Deckel: Nein";
    }
});

function updatePortionSize() {
    let inputValueWeight = parseFloat(totalWeight.value, 10);
    let inputValuePortions = parseFloat(amountPortions.value, 10);
    let selectedKey = dropdown.value;
    let selectedContainer = containerCollection[selectedKey];
    let containerWeight = selectedContainer ? selectedContainer.weight : 0;

    if (isNaN(inputValueWeight) || isNaN(inputValuePortions) || inputValuePortions <= 0) {
        portionSizeLabel.innerHTML = "Bitte Gesamtgewicht und Portionsgröße angeben.";
    } else {
        portionSizeLabel.innerHTML = "Portionsgröße: " + Math.floor((inputValueWeight - containerWeight) / inputValuePortions) + " g";
    }
}

totalWeight.addEventListener("change", updatePortionSize);
amountPortions.addEventListener("change", updatePortionSize);
dropdown.addEventListener("change", updatePortionSize);
