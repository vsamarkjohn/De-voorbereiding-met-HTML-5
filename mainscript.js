console.log("Het bestand mainscript.js is met success geladen");
var bedrijf = {
    bedrijfsnaam: 'Online Academie Michaël',
    straatnaam: 'Grote Markt',
    straatnummer: 1,
    postcode: 3000,
    gemeente:'Leuven',
    btwnummer: 'BE0999999999',
    btwplichtig: true,
    websiteadre:'www.itenzo.be',
    mailadre:'vsa.markjohn@gmail.com',
    };
    function getBedrijfNaam(){
        document.getElementById("Opdract1Result").innerHTML = `${bedrijf.bedrijfsnaam} 
        ${bedrijf.straatnaam} 
        ${bedrijf.straatnummer} 
        ${bedrijf.postcode} 
        ${bedrijf.gemeente}`
    }
    getBedrijfNaam();