let Apartman = function(slika, naslov){
    this.slika = slika;
    this.naslov = naslov;
    // tu cemo jos dodat opis
    let kartica = document.createElement("div");
    let karticaimg = document.createElement("img");
    let karticanaslov = document.createElement("h4"); //stvaranje elementa
    kartica.appendChild(karticaimg);
    kartica.appendChild(karticanaslov); //naslov i img su djeca od wrapa
    kartica.classList.add("card"); //ko attributre samo malo kraca i zgodnija linija
    karticanaslov.classList.add("cardnaslov"); //ko attributre samo malo kraca i zgodnija linija
    kartica.classList.add("cardimg"); //ko attributre samo malo kraca i zgodnija linija
    document.getElementById("wrapper").append(kartica); 
    karticaimg.src = slika; //postavlja pozadinu
    karticanaslov.innerHTML= naslov; //postavi sta ce pisat u h4
    
}


let apartmani1 = new Apartman('slike/slika1.jpg', "yo");
let apartmani2 = new Apartman("slike/slika1.jpg", "yo");
let apartmani3 = new Apartman("slike/slika1.jpg", "yo");
let apartmani4 = new Apartman("slike/slika1.jpg", "yo");
let apartmani5 = new Apartman("slike/slika1.jpg", "yo");
let apartmani6 = new Apartman("slike/slika1.jpg", "yo");
let apartmani7 = new Apartman("slike/slika1.jpg", "yo");
let apartmani8 = new Apartman("slike/slika1.jpg", "HI");
let apartmani9 = new Apartman("slike/slika1.jpg", "HI");
let apartmani10 = new Apartman("slike/slika1.jpg", "HI");
let apartmani11 = new Apartman("slike/slika1.jpg", "HI");
let apartmani12 = new Apartman("slike/slika1.jpg", "HI");




//DOLI ZA SIDEBAR
$(document).ready(function(){

    $("#sidebar").hover(function(){
        $("#sidebar").animate({left:"0%"},150);

    });
    $("#sidebar").mouseleave(function(){
        $("#sidebar").animate({left:"-10%"},150);
    });


});
