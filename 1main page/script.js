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

  document.getElementById(`but`).addEventListener("click" , function(){
    Swal.fire({
      title: 'I Know Q8!',
      text: "You  can  Explore  Kuwait  as  you've  never  done  before..! -------نعرضلك الكويت من زاوية ما قد شفتها",
      imageUrl: 'https://c.tenor.com/9gv4DgbDm4cAAAAM/vbvyyyyyyyy-ggg.gif',
      imageWidth: 500,
      imageHeight: 250,
      imageAlt: 'Custom image',
      background: '#E3DC97' ,
      color: '#CE0000',
    })
  })

