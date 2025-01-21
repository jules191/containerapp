let totalWeight = document.querySelector("#totalWeight");
let amountPortions = document.querySelector("#amountPortions");
let portionSizeLabel = document.querySelector("#portionSize");
let inputValueWeight = parseInt(totalWeight.value);
let inputValuePortions = parseInt(amountPortions.value);




function Container(key, description, weight, lid, picture){
    this.key = key;
    this.description = description;
    this.weight = weight;
    this.lid = lid;
    this.picture = picture;
}
potBig = new Container ("potBig", "Topf, groß", 1377, true, "./images/Topf.jpg");
potMidHigh = new Container("potMidHigh", "Topf, mittel, hoch", 993, true, "./images/Topf.jpg");

let containerCollection = {
    "potBig": potBig,
    "potMidHigh": potMidHigh
};

let dropdown = document.querySelector("#containers")

dropdown.addEventListener("change", function(){
    let selectedKey = dropdown.value;
    let selectedContainer = containerCollection[selectedKey];
    
    document.querySelector("#weight").innerHTML = document.querySelector("#weight").innerHTML + " " + selectedContainer.weight + " g";

    if(selectedContainer.lid){
        document.querySelector("#lid").innerHTML = document.querySelector("#lid").innerHTML + " Ja"
    } else{
        document.querySelector("#lid").innerHTML = document.querySelector("#lid").innerHTML + " Nein"
    }
})

let selectedKey = dropdown.value;
let selectedContainer = containerCollection[selectedKey];

totalWeight.addEventListener("change", function(){
    if (isNaN(Math.floor(parseFloat(totalWeight.value, 10) / parseFloat(amountPortions.value, 10)))){
        portionSizeLabel.innerHTML = ""
    } else if (amountPortions.value ===""){
        portionSizeLabel.innerHTML = "Bitte Portionsgröße angeben."
    } else {
        portionSizeLabel.innerHTML = "Portionsgröße: " + (selectedContainer - Math.floor(parseFloat(totalWeight.value, 10)) / parseFloat(amountPortions.value, 10)) + " g"
    }
})

amountPortions.addEventListener("change", function(){
    if (isNaN(Math.floor(parseFloat(totalWeight.value, 10) / parseFloat(amountPortions.value, 10)))){
        portionSizeLabel.innerHTML = ""
    } else if (totalWeight.value ===""){
        portionSizeLabel.innerHTML = "Bitte Gesamtgewicht angeben."
    } else {
        portionSizeLabel.innerHTML = "Portionsgröße: " + (selectedContainer - Math.floor(parseFloat(totalWeight.value, 10)) / parseFloat(amountPortions.value, 10)) + " g"
    }
})