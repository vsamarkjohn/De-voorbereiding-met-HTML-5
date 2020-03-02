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

  

   

