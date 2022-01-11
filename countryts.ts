class Country{
    name : string;
    lang : string;
    greeting: string;
    colors : string[];
    constructor(name: string, lang : string, greeting : string, colors : string[]){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    paintDOM(){
        let color1 = document.getElementById("Color1");
        let color2 = document.getElementById("Color2");
        let color3 = document.getElementById("Color3");
        color1.setAttribute("style", "background-color:" + this.colors[0]);
        color2.setAttribute("style", "background-color:" + this.colors[1]);
        color3.setAttribute("style", "background-color:" + this.colors[2]);
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])

function SwitchCountry() : void
{
    let input = document.getElementById("CountryList").nodeValue;
    let nameh2 = document.getElementById("CountryName");
    let langh2 = document.getElementById("OfficialLanguage");
    let helwh2 = document.getElementById("HelloWorld");

    if (input === "USA") {
        nameh2.innerText = usa.name;
        langh2.innerText = usa.lang;
        helwh2.innerText = usa.greeting;
    }
    else if (input === "Mexico") {
        nameh2.innerText = mexico.name;
        langh2.innerText = mexico.lang;
        helwh2.innerText = mexico.greeting;
    }
    else if (input === "Algeria") {
        nameh2.innerText = algeria.name;
        langh2.innerText = algeria.lang;
        helwh2.innerText = algeria.greeting;
    }
}