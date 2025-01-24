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

let panHoffHigh = new Container('panHoffHigh', 'Pfanne Hoffmann hoch', 2119, true, './images/panHoffHigh.jpg');
let panHoffLow = new Container('panHoffLow', 'Pfanne Hoffmann niedrig', 1957, true, './images/panHoffLow.jpg');
let panTefalWok = new Container('panTefalWok', 'Pfanne Tefal Wok', 987, true, './images/panTefalWok.jpg');
let panOlav = new Container('panOlav', 'Pfanne Olav', 2347, true, './images/panOlav.jpg');
let roaster = new Container('roaster', 'Pfanne Bräter', 5200, true, './images/roaster.jpg');
let potBig = new Container('potBig', 'Topf Groß', 1377, true, './images/potBig.jpg');
let potMidLow = new Container('potMidLow', 'Topf Mittel niedrig', 940, true, './images/potMidLow.jpg');
let potMidHigh = new Container('potMidHigh', 'Topf Mittel hoch', 993, true, './images/potMidHigh.jpg');
let potSmallLow = new Container('potSmallLow', 'Topf Klein niedrig', 653, true, './images/potSmallLow.jpg');
let potSmallHigh = new Container('potSmallHigh', 'Topf Klein hoch', 686, true, './images/potSmallHigh.jpg');
let potXl = new Container('potXl', 'Topf XXL', 2948, true, './images/potXl.jpg');
let fbSmallLow = new Container('fbSmallLow', 'Frankfurter Brett Schmal niedrig', 147, true, './images/fbSmallLow.jpg');
let fbSmallHigh = new Container('fbSmallHigh', 'Frankfurter Brett Schmal mittel', 177, true, './images/fbSmallHigh.jpg');
let fbMidLow = new Container('fbMidLow', 'Frankfurter Brett Mittel niedrig', 183, true, './images/fbMidLow.jpg');
let fbMidMid = new Container('fbMidMid', 'Frankfurter Brett Mittel mittel', 247, true, './images/fbMidMid.jpg');
let fbMidHigh = new Container('fbMidHigh', 'Frankfurter Brett Mittel hoch', 376, true, './images/fbMidHigh.jpg');
let fbBigLow = new Container('fbBigLow', 'Frankfurter Brett Breit niedrig', 339, true, './images/fbBigLow.jpg');
let fbBigMid = new Container('fbBigMid', 'Frankfurter Brett Breit mittel', 490, true, './images/fbBigMid.jpg');
let fbBigHigh = new Container('fbBigHigh', 'Frankfurter Brett Breit hoch', 572, true, './images/fbBigHigh.jpg');
let mBowlGreenSmall = new Container('mBowlGreenSmall', 'Schüssel Metall (grüner Boden) klein', 175, true, './images/mBowlGreenSmall.jpg');
let mBowlGreenBig = new Container('mBowlGreenBig', 'Schüssel Metall (grüner Boden) groß', 304, true, './images/mBowlGreenBig.jpg');
let gBowl = new Container('gBowl', 'Schüssel Glas', 804, false, './images/gBowl.jpg');
let mBowl = new Container('mBowl', 'Schüssel Metall', 294, false, './images/mBowl.jpg');
let pBowlGreen = new Container('pBowlGreen', 'Schüssel Grün', 506, false, './images/pBowlGreen.jpg');
let sieveWhite = new Container('sieveWhite', 'Sieb Weiß', 209, false, './images/sieveWhite.jpg');
let sieveMetallSmall = new Container('sieveMetallSmall', 'Sieb Metall klein', 50, false, './images/sieveMetallSmall.jpg');
let sieveMetallMid = new Container('sieveMetallMid', 'Sieb Metall mittel', 129, false, './images/sieveMetallMid.jpg');
let sieveMetalBig = new Container('sieveMetalBig', 'Sieb Metall groß', 181, false, './images/sieveMetalBig.jpg');
let sieveGreen = new Container('sieveGreen', 'Sieb Grün', 77, false, './images/sieveGreen.jpg');
let containerTransportBig = new Container('containerTransportBig', 'Dose Transportdose groß', 353, true, './images/containerTransportBig.jpg');
let bowlBosch = new Container('bowlBosch', 'Schüssel Bosch Metall (grüner Boden)', 798, false, './images/bowlBosch.jpg');

let containerCollection = {
    'panHoffHigh': panHoffHigh,
    'panHoffLow': panHoffLow,
    'panTefalWok': panTefalWok,
    'panOlav': panOlav,
    'roaster': roaster,
    'potBig': potBig,
    'potMidLow': potMidLow,
    'potMidHigh': potMidHigh,
    'potSmallLow': potSmallLow,
    'potSmallHigh': potSmallHigh,
    'potXl': potXl,
    'fbSmallLow': fbSmallLow,
    'fbSmallHigh': fbSmallHigh,
    'fbMidLow': fbMidLow,
    'fbMidMid': fbMidMid,
    'fbMidHigh': fbMidHigh,
    'fbBigLow': fbBigLow,
    'fbBigMid': fbBigMid,
    'fbBigHigh': fbBigHigh,
    'mBowlGreenSmall': mBowlGreenSmall,
    'mBowlGreenBig': mBowlGreenBig,
    'gBowl': gBowl,
    'mBowl': mBowl,
    'pBowlGreen': pBowlGreen,
    'sieveWhite': sieveWhite,
    'sieveMetallSmall': sieveMetallSmall,
    'sieveMetallMid': sieveMetallMid,
    'sieveMetalBig': sieveMetalBig,
    'sieveGreen': sieveGreen,
    'containerTransportBig': containerTransportBig,
    'bowlBosch': bowlBosch
};

let dropdown = document.querySelector("#containers");

dropdown.addEventListener("change", function () {
    let selectedKey = dropdown.value;
    let selectedContainer = containerCollection[selectedKey];

    document.querySelector("#descriptionTitle").innerHTML = selectedContainer.description;
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
    let portionSize = (inputValueWeight - containerWeight) / inputValuePortions

    if (isNaN(inputValueWeight) || isNaN(inputValuePortions) || inputValuePortions <= 0) {
        portionSizeLabel.innerHTML = "Bitte Gesamtgewicht und Portionsgröße angeben.";
    } else {
        portionSizeLabel.innerHTML = "Portionsgröße: " + portionSize
    };
};

totalWeight.addEventListener("change", updatePortionSize())
amountPortions.addEventListener("change", updatePortionSize())
