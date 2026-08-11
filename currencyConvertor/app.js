const baseUrl =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";


const dropdowns = document.querySelectorAll(".dropdown select");

const msg  = document.querySelector(".msg pre");



let fromCurr = document.querySelector(".from select");


let toCurr = document.querySelector(".to select");


for (let select of dropdowns) {

    for (let currCode in countryList) {

        const option = document.createElement("option");


        option.innerText = currCode;
        option.value = currCode;


        if (
            select.name === "from" &&
            currCode === "USD"
        ) {
            option.selected = true;
        }


        else if (
            select.name === "to" &&
            currCode === "INR"
        ) {
            option.selected = true;
        }


        select.append(option);
    }


    // Update flag when currency changes

    select.addEventListener("change", (event) => {

        updateFlag(event.target);

    });
}


// UPDATE FLAG

const updateFlag = (element) => {

    let curr = element.value;


    let countryCode = countryList[curr];


    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;


    let img = element.parentElement.querySelector("img");


    img.src = newSrc;
};


// GET EXCHANGE RATE

const updateExchangeRate = async () => {

    let amount = document.querySelector(".amount input");


    let amountVal = amount.value;



    if (amountVal === "" || amountVal < 0) {

        amountVal = "1";

    }

    let from = fromCurr.value.toLowerCase();

    let to = toCurr.value.toLowerCase();
    

    const URL = `${baseUrl}${from}.json`;

    const response = await fetch(URL);

    const data = await response.json()
    
    const rate = data[from][to];


    const finalAmount = amountVal * rate;

    msg.innerText = `${amountVal} ${from.toUpperCase()}  =  ${finalAmount} ${to.toUpperCase()}`;

};


// BUTTON

const btn =
    document.querySelector("#btn");


btn.addEventListener("click", (evt) => {

    evt.preventDefault();

    updateExchangeRate();

    msg.inn

});