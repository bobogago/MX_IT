let gallery = document.getElementById("tracklist");
fetch("dados.txt")
    .then((res) => res.text())
    .then((text) => {
        // Do something with "text"
        console.log(text);
        let drinkStringArray = text.split("}");
        let drinkObjectArray = [];
        for (let i = 0; i < drinkStringArray.length - 1; i++) {
            drinkStringArray[i] += "}"
            drinkObjectArray[i] = JSON.parse(drinkStringArray[i]);

            drawDrink(drinkObjectArray[i]);
        }
        console.log(drinkObjectArray);
    })
    .catch((e) => console.error(e));

function drawDrink(drink) {
    let drinkCard = document.createElement("div");
    drinkCard.classList.add("drinkCard");

    let h3 = document.createElement("h2");
    h3.innerText = drink.drinkName;
    drinkCard.appendChild(h3);

    let h4 = document.createElement("h4");
    h4.innerText = drink.username;
    drinkCard.appendChild(h4);


    gallery.appendChild(drinkCard);
}