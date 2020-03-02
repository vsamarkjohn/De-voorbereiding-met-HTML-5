console.log("Het bestand mainscript.js is met success geladen");

var bedrijf = {
        bedrijfsnaam: 'Online Academie Michaël',
        straatnaam: 'Grote Markt',
        straatnummer: 1,
        postcode: 3000,
        gemeente:'Leuven',
        landCode: 'be',
        btwnummer: 8917348761,
        btwplichtig: true,
        websiteadre:'www.itenzo.be',
        mailadre:'vsa.markjohn@gmail.com',
    };
    
//ToonBedrijf
function getBedrijfNaam(){
        document.getElementById("Opdract1Result").innerHTML = 
        `${bedrijf.bedrijfsnaam} <br>
        ${bedrijf.straatnaam} 
        ${bedrijf.straatnummer} 
        ${bedrijf.postcode} 
        ${bedrijf.gemeente}<br>
        BTW-Nummer: ${bedrijf.landCode.toUpperCase()}${bedrijf.btwnummer}`
    }
    getBedrijfNaam(); 

// ToonDagVandag
var dagenVanDeWeek;
switch (new Date().getDate()-1) {
    case 0:
        dagenVanDeWeek = 'Zondag';
    case 1:
        dagenVanDeWeek = 'Maandag';
        break;
    case 2:
        dagenVanDeWeek = 'Dinsdag';
        break;
    case 3:
        dagenVanDeWeek = 'Woensdag';
        break;
    case 4:
        dagenVanDeWeek = 'Donderdag';
        break;
    case 5:
        dagenVanDeWeek = 'Vrijdag';
        break;
    case 6:
        dagenVanDeWeek = 'Zaterdag';
        break;
}
// ToonDagMaand
var maandVandeJaar;
switch (new Date().getMonth()) {
    case 0:
        maandVandeJaar = 'januari';
    case 1:
        maandVandeJaar = 'februari';
        break;
    case 2:
        maandVandeJaar = 'maart';
        break;
    case 3:
        maandVandeJaar = 'april';
        break;
    case 4:
        maandVandeJaar = 'mei';
        break;
    case 5:
        maandVandeJaar = 'juni';
        break;
    case 6:
        maandVandeJaar = 'juli';
        break;
    case 7:
        maandVandeJaar = 'Augustus';
        break;
    case 8:
         maandVandeJaar = 'september';
        break;
    case 9:
        maandVandeJaar = 'oktober';
        break;
    case 10:
        maandVandeJaar = 'november';
        break;
    case 11:
        maandVandeJaar = 'december'
        break;
}

//ToonDatum
function toonDatum(){
    var vraagDatum = new Date();
    var fullDatum = `${dagenVanDeWeek} , 
                     ${vraagDatum.getDate()} 
                     ${maandVandeJaar} 
                     ${vraagDatum.getFullYear()}`
    document.getElementById("toonDate").innerHTML= fullDatum;
}
toonDatum();