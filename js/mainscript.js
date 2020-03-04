console.log("Het bestand mainscript.js is met success geladen");

//Bedrijf - Object
var bedrijf = {
        bedrijfsnaam: 'Online Academie Michaël',
        straatnaam: 'Grote Markt',
        straatnummer: 1,
        postcode: 3000,
        gemeente:'Leuven',
        btwplichtig: true,
        websiteadre:'www.itenzo.be',
        mailadre:'vsa.markjohn@gmail.com',
        changetoUpperCaseCode: function(landCode){
            return landCode.toUpperCase();
        },
        btwNummer: function(btwnummer){
           return btwnummer;
        },
        toonResult: function(){
            document.getElementById("Opdract1Result").innerHTML = 
            `${bedrijf.bedrijfsnaam}<br> 
            ${bedrijf.straatnaam} ${bedrijf.straatnummer} - ${bedrijf.postcode} ${bedrijf.gemeente}<br>
            BTW-Nummer: ${landCode}${btwNummer}`
        },     
    };
var landCode = bedrijf.changetoUpperCaseCode("be");
var btwNummer = bedrijf.btwNummer("99999999999");
bedrijf.toonResult();

function getValue(){
    var getValueLanden = document.getElementById("europeLand");
    var valLanden = getValueLanden.value;
    var getBTWnummer = document.getElementById("btw-nummer");
    var valBTWnummer = getBTWnummer.value;
    var numbers = /^\d+$/;
    var matchNumber = valBTWnummer.match(numbers);
    var valBTLength = valBTWnummer.length; 
    console.log(valBTLength);
    var key;
    switch(true) {
        case valLanden == "BE" && valBTLength == 8 && valBTWnummer == matchNumber:
                key = `Belgie`;
                toastr.info('Successfull');
        break;
        case valLanden == "Oesterijk" && valBTLength == 9 && valBTWnummer == matchNumber:
                key = 'Osterijk';
        break;
        case isNaN(valBTWnummer): 
                key = 'Not a Number';
            break;
        case valBTLength < 8 || valBTLength == 0 :// input is less than 9
                key = 'You Enter less than 9 Number';
        break;
        default:key = 'Invalid';
        break;
    }
        document.getElementById("viewResult").innerHTML = `Resultaat: ${key}`;
}

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": waar,
    "positionClass": "toast-rechtsboven",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "lineair",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  function toonBericht(soortBericht,hetbericht){
      var defaultTimeout = 5000;
      switch (soortBericht) {
        case "succes":
            toastr['success'](hetbericht)
            break;
        case "informatie":
            toastr['info'](hetbericht)
            break;
        case "fout":
            toastr['error'](hetbericht)
            break;
        case "waarschuwig":
            toastr['warning'](hetbericht)
            break;
        default:
            toastr.options.timeOut = 0;
            toastr['error']("Fout berichttype")
            break;
      }
      toastr.options.timeOut = defaultTimeout;a
  }
  toonBericht();
//Bedrijf - Object - End

// ToonDagVandag
//ToonDatum
function toonDatum(){
    var vraagDatum = new Date();
    var dagenVanDeWeek = new Array('Zondag','Maandag','Dinsdag','Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
    var dagVanDeWeek;
    var maandVandeJaar;
    var dagVanDeWeek = vraagDatum.getDay();
switch (dagVanDeWeek) {
    case 0:dagVanDeWeek = dagenVanDeWeek[0];
        break;
    case 1:dagVanDeWeek = dagenVanDeWeek[1];
        break;
    case 2:dagVanDeWeek = dagenVanDeWeek[2];
        break;
    case 3: dagVanDeWeek = dagenVanDeWeek[3];
        break;
    case 4:dagVanDeWeek = dagenVanDeWeek[4];
        break;
    case 5:dagVanDeWeek = dagenVanDeWeek[5];
        break;
    case 6: dagVanDeWeek = dagenVanDeWeek[6];
        break;
}
// ToonDagMaand
switch (new Date().getMonth()) {
    case 0:maandVandeJaar = 'januari';
        break;
    case 1:maandVandeJaar = 'februari';
        break;
    case 2:maandVandeJaar = 'maart';
        break;
    case 3:maandVandeJaar = 'april';
        break;
    case 4:maandVandeJaar = 'mei';
        break;
    case 5:maandVandeJaar = 'juni';
        break;
    case 6:maandVandeJaar = 'juli';
        break;
    case 7:maandVandeJaar = 'Augustus';
        break;
    case 8:maandVandeJaar = 'september';
        break;
    case 9:maandVandeJaar = 'oktober';
        break;
    case 10:maandVandeJaar = 'november';
        break;
    case 11:maandVandeJaar = 'december'
        break;
    default: maandVandeJaar = 'Onbepaald'
        break;
    }
    var fullDatum = `${dagVanDeWeek} , 
                     ${vraagDatum.getDate()} 
                     ${maandVandeJaar} 
                     ${vraagDatum.getFullYear()}`
    document.getElementById("toonDate").innerHTML= fullDatum;
}
toonDatum();