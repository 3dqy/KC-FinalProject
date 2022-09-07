const html = document.querySelector("html");
const check = document.querySelector("#checkbox");

check.addEventListener("change", function () {
  html.classList.toggle("dark");
});


function googleTranslateElementInit() { 
new google.translate.TranslateElement(
{pageLanguage: 'en'}, 
'google_translate_element'
); 
  } 

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#currency-form').onsubmit = ()=>{
        const base = document.getElementById('currency-from').value;
        fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                const amount = document.querySelector("#input-amount").value;
                const currencyTo = document.getElementById('currency-to').value;
                const rate = data.rates[currencyTo];
                function convert(){
                    return amount * rate;
                }
                document.querySelector('.display-result').innerHTML = `${amount} ${base.toUpperCase()} equal to ${currencyTo} ${convert().toFixed(4)}`;
            })
        .catch((error) =>{
            console.log("Error: ", error);
        });
        return false;
    };
});


var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });