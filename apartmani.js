let Apartman = function(slika, naslov , lokacija , cijena){
    this.slika = slika;
    this.naslov = naslov;
    this.lokacija = lokacija;
    this.cijena = cijena;
    // tu cemo jos dodat opis
    let kartica = document.createElement("div");
    let karticaimg = document.createElement("img");
    let karticanaslov = document.createElement("h4");
    let karticalokacija = document.createElement("h6");
    let karticacijena = document.createElement("h6"); //stvaranje elementa
    kartica.appendChild(karticaimg);
    kartica.appendChild(karticanaslov);
    kartica.appendChild(karticalokacija);
    kartica.appendChild(karticacijena); //naslov i img su djeca od wrapa
    kartica.classList.add("card"); //ko attributre samo malo kraca i zgodnija linija
    karticanaslov.classList.add("cardnaslov"); //ko attributre samo malo kraca i zgodnija linija
    kartica.classList.add("cardimg"); //ko attributre samo malo kraca i zgodnija linija
    document.getElementById("wrapper").append(kartica); 
    karticaimg.src = slika; //postavlja pozadinu
    karticanaslov.innerHTML= naslov;
    karticacijena.innerHTML=cijena;
    karticalokacija.innerHTML=lokacija; //postavi sta ce pisat u h4

    let popup = document.getElementById("popup")
    let x = document.getElementById("close");
    let popupContent = document.getElementById("popup-content");
    kartica.addEventListener("click", otvori);
    x.addEventListener("click", zatvori);
    function otvori(){
        popup.classList.add("popup");
        x.classList.add("close");
        popupContent.classList.add("popup-content");
        x.style.display="block";
        popupContent.appendChild(x);
        popupContent.appendChild(karticanaslov);
        popupContent.appendChild(karticaimg);
        
    }
    function zatvori(){
        kartica.appendChild(karticaimg);
        kartica.appendChild(karticanaslov);
        popupContent.removeChild(x);
        popupContent.classList.remove("popup-content");
        x.classList.remove("close");
        popup.classList.remove("popup");
//triban ovamo dodat jos da se property-i u divu ne maknu kad se otvori pop-up
    }
    
}


let apartmani1 = new Apartman('slike/slika1.jpg', "Villa Tulipan" , "Sinj" , "49€/noć");
let apartmani2 = new Apartman("slike/slika1.jpg", "Blue Graden Apartman" , "K.Sućurac" , "29€/noć");
let apartmani3 = new Apartman("slike/slika1.jpg", "Villa Demont" , "Solin" , "59€/noć");
let apartmani4 = new Apartman("slike/slika1.jpg", "Apartman Radić" , "Split" , "79€/noć");
let apartmani5 = new Apartman("slike/slika1.jpg", "Beach House 1" , "K.Stari" , "39€/noć");
let apartmani6 = new Apartman("slike/slika1.jpg", "Apartman Ivanić" , "Seget" , "29€/noć");
let apartmani7 = new Apartman("slike/slika1.jpg", "Villa Monteri" , "Supetar" , "99€/noć");
let apartmani8 = new Apartman("slike/slika1.jpg", "Apartman Balan" , "Supetar" , "59€/noć");
let apartmani9 = new Apartman("slike/slika1.jpg", "Penthouse Klaudia" , "Split" , "149€/noć");
let apartmani10 = new Apartman("slike/slika1.jpg", "Apartman Luxury" , "K.Kambelovac" , "89€/noć");
let apartmani11 = new Apartman("slike/slika1.jpg", "Villa Lucia" , "Split" , "189€/noć");
let apartmani12 = new Apartman("slike/slika1.jpg", "Apartman Maria" , "Trilj" , "29€/noć");




//DOLI ZA SIDEBAR
$(document).ready(function(){

    $("#sidebar").hover(function(){
        $("#sidebar").animate({left:"0%"},150);

    });
    $("#sidebar").mouseleave(function(){
        $("#sidebar").animate({left:"-10%"},150);
    });

//ovde ima neki manji problem koji triban popravit
});
