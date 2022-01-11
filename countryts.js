var Country = /** @class */ (function () {
    function Country(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        
    }
    paintDOM = function(){
        let color1 = document.getElementById("Color1");
        let color2 = document.getElementById("Color2");
        let color3 = document.getElementById("Color3");
        color1.style.backgroundColor = this.colors[0];
        color2.style.backgroundColor = this.colors[1];
        color3.style.backgroundColor = this.colors[2];
    }
    return Country;
}());
var usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
var mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
var algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
function SwitchCountry() {
    var input = document.getElementById("CountryList").value;
    var nameh2 = document.getElementById("CountryName");
    var langh2 = document.getElementById("OfficialLanguage");
    var helwh2 = document.getElementById("HelloWorld");
    if (input == "USA") {
        nameh2.innerText = usa.name;
        langh2.innerText = usa.lang;
        helwh2.innerText = usa.greeting;
        usa.paintDOM;
    }
    else if (input == "Mexico") {
        nameh2.innerText = mexico.name;
        langh2.innerText = mexico.lang;
        helwh2.innerText = mexico.greeting;
        mexico.paintDOM;
    }
    else if (input == "Algeria") {
        nameh2.innerText = algeria.name;
        langh2.innerText = algeria.lang;
        helwh2.innerText = algeria.greeting;
        algeria.paintDOM;
    }
}
