let cardIcon = document.getElementById("card-icon");
let listIcon = document.getElementById("list-icon");
let cardContainer = document.getElementById("card");
let listContainer = document.getElementById("list");
let theTable = document.getElementById("table");
let spotlightsContainer = document.getElementById("spotlights-container");



cardIcon.addEventListener('click', () => {
    cardContainer.style.display = "grid";
    listContainer.style.display = "none"
})

listIcon.addEventListener('click', () => {
    cardContainer.style.display = "none";
    listContainer.style.display = "block"

})





let createCard = (company, container) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let image = document.createElement("img");
    image.classList.add("card-img");
    image.src = company.img;
    image.alt = "logo"
    let address = document.createElement("p");
    address.classList.add("card-address");
    address.innerHTML = company.address;
    let phone = document.createElement("p");
    phone.classList.add("card-phone");
    phone.innerHTML = company.phone
    let websiteLink = document.createElement("a");
    websiteLink.classList.add("card-website");
    websiteLink.setAttribute("href", company.website);
    websiteLink.innerHTML = company.website;
    let websiteContainer = document.createElement("p");
    websiteContainer.appendChild(websiteLink);


    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(websiteContainer);

    container.appendChild(card);

}


let createList = (company) => {

    let tableRow = document.createElement("tr");
    let tableDataName = document.createElement("td");
    tableDataName.innerHTML = company.name;
    let tableDataAddress = document.createElement("td");
    tableDataAddress.innerHTML = company.address;
    let tableDataPhone = document.createElement("td");
    tableDataPhone.innerHTML = company.phone;
    let tableDataWebsite = document.createElement("td");
    let link = document.createElement("a");
    link.innerHTML = company.website;
    link.setAttribute("href", company.website);
    tableDataWebsite.appendChild(link);

    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataAddress);
    tableRow.appendChild(tableDataPhone);
    tableRow.appendChild(tableDataWebsite);

    theTable.appendChild(tableRow);

}


fetch("https://raw.githubusercontent.com/pnyamuda/wdd230/main/chamber/data.json")
    .then(response => {
        return response.json()
    }).then(info => {
        //creating cards for all companies;
        info.data.forEach(element => {
            //CARD CREATION
            createCard(element, cardContainer);


            //LIST CREATION

            createList(element)




        });
    })