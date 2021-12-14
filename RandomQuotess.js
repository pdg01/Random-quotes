var quotes = [
    'Invata web development daca vrei bani multi',
    'Web development-ul este de viitor',
    'Poti lucra de oriunde',
    'Treci dracului la treaba ca timpul trece',
] 
function newQuote()
    {
      var randomNumber = Math.floor(Math.random() * quotes.length);
      document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    }
    