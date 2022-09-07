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
