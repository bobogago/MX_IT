let bases = ["Select Base", "Gin", "Rum", "Vodka", "Whiskey"];
let sweetener = ["Select Sweetener", "Syrup", "Honey", "Agave Nectar", "Tang"];
let citrus = ["Select Citrus", "Lemon Juice", "Lime Juice", "Citrus Bitters", "Grapefruit Juice"];
let modifier = ["Select Modifier", "Absinthe", "Mescal", "Peri-Peri", "Cola"];
let topping = ["Select Modifier", "Whipped Cream", "Lemon Peel", "Olive", "Edible Glitter"];

let userDrink = {
    drinkName: "Placeholder",
    username: "user",
    cup: 0,
    base: [],
    sweetener: [],
    citrus: [],
    modifier: [],
    topping: []
}

let componentsDiv = document.querySelector("#components");
let components = [];

class Component {
    index = 0;
    type = "";
    array = [""];
    position;
    div;

    constructor(type, array, position) {
        this.type = type;
        this.array = array;
        this.position = position;
    }

    create() {
        this.div = document.createElement("div");
        this.div.classList.add("componente");
        let h2 = document.createElement("h2");
        h2.innerText = this.type;
        this.div.appendChild(h2);

        let buttonL = document.createElement("input");
        buttonL.type = "button";
        buttonL.value = "←";
        this.div.appendChild(buttonL);

        let p = document.createElement("p");
        p.classList.add("component");
        p.innerText = this.array[this.index];
        this.div.appendChild(p);

        let buttonR = document.createElement("input");
        buttonR.type = "button";
        buttonR.value = "→";
        this.div.appendChild(buttonR);

        let ind = this.index;
        let arr = this.array;
        let pos = this.position;
        buttonL.addEventListener("click", function () {
            ind--;
            if (ind < 0) {
                ind = arr.length - 1
            }
            p.innerText = arr[ind];
            components[pos].index = ind;
        })
        buttonR.addEventListener("click", function () {
            ind++;
            if (ind > arr.length - 1) {
                ind = 0;
            }
            p.innerText = arr[ind];
            components[pos].index = ind;
        })
        this.div.appendChild(document.createElement("br"));
        let remove = document.createElement("input");
        remove.type = "button";
        remove.value = "Remove";
        this.div.appendChild(remove);

        remove.addEventListener("click", function () {
            console.log("remove");
            while (components[pos].div.hasChildNodes()) {
                components[pos].div.removeChild(components[pos].div.firstChild);
            }
        })

        componentsDiv.appendChild(this.div);
    }

}

components[components.length] = new Component("Base", bases, components.length);
components[components.length] = new Component("Sweetener", sweetener, components.length);
components[components.length] = new Component("Citrus", citrus, components.length);
components[components.length] = new Component("Modifier", modifier, components.length);
components[components.length] = new Component("Topping", topping, components.length);

for (let i = 0; i < components.length; i++) {
    components[i].create();
}

document.querySelector("#add1").addEventListener("click", function () {
    components[components.length] = new Component("Base", bases, components.length);
    components[components.length-1].create();
});
document.querySelector("#add2").addEventListener("click", function () {
    components[components.length] = new Component("Sweetener", sweetener, components.length);
    components[components.length-1].create();
});
document.querySelector("#add3").addEventListener("click", function () {
    components[components.length] = new Component("Citrus", citrus, components.length);
    components[components.length-1].create();
});
document.querySelector("#add4").addEventListener("click", function () {
    components[components.length] = new Component("Modifier", modifier, components.length);
    components[components.length-1].create();
});
document.querySelector("#add5").addEventListener("click", function () {
    components[components.length] = new Component("Topping", topping, components.length);
    components[components.length-1].create();
});

