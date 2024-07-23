var quotes = [
    '"Viitorul aparține celor care înțeleg tehnologia și o folosesc eficient." – John Doe',
    'Într-o lume condusă de tehnologie, cei care o stăpânesc dețin cheia către oportunități nesfârșite." – Jane Smith',
    'Industria IT nu este doar despre crearea de software; este despre modelarea viitorului." – Michael Johnson',
    'Oportunitățile în IT sunt nelimitate pentru cei care sunt dispuși să învețe și să se adapteze." – Emily Davis',
    'Inovația și tehnologia sunt pilonii gemeni ai pieței moderne a muncii, oferind nenumărate căi de creștere și succes." – Richard Williams',
    'Abilitățile în tehnologie sunt moneda pieței muncii viitorului. Investește în ele cu înțelepciune." – Amanda Brown',
    'Fiecare clic și fiecare linie de cod în IT deschide o nouă ușă către inovație și posibilități de angajare." – David Wilson',
    'În era digitală, stăpânirea IT-ului este echivalentă cu a poseda o superputere care poate transforma industrii." – Susan Martinez',
    'Sectorul IT este un teren de joacă pentru cei curioși și o mină de aur pentru cei determinați." – Robert Garcia',
    'Frumusețea unei cariere în IT constă în evoluția sa constantă, prezentând noi provocări și oportunități în fiecare zi." – Patricia Rodriguez',

]
function newQuote()
    {
      var randomNumber = Math.floor(Math.random() * quotes.length);
      document.getElementById('quoteDisplay').innerHTML = (randomNumber + 1) + ". " + quotes[randomNumber];
        document.getElementById('random-number').innerHTML = randomNumber + 1;
    }
    