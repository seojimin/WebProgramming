/********************************************************************************* 
*
* WEB222 – Assignment #4a
*
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: ___Jimin Seo______ Student ID: __145803169_____ Date: ___2018 Mar 22_____ 
* 
********************************************************************************/

var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

//default page 
window.onload = loadTableWithFilters;

function loadTableWithFilters() {
    var dataArray = document.querySelector("#main-table-body");
    dataArray.innerHTML = "";

    for (var i = 0; i < petData.length; i++) {

        if (((petData[i].type == filterType) || (filterType == "")) && (petData[i].age >= filterAgeMin) && (petData[i].age <= filterAgeMax)) {

            var t_Row = document.createElement("tr");
            var t_Detail = document.createElement("td");
            var t_image = document.createElement("img");

            t_image.setAttribute("src", petData[i].image.src);
            t_image.setAttribute("alt", petData[i].image.alt);
            t_image.setAttribute("width", petData[i].image.width);
            t_image.setAttribute("height", petData[i].image.height);

            t_Detail.appendChild(t_image);

            var pet_Detail = document.createElement("td");
            var pet_Name = document.createElement("h4");
            var para_pet = document.createElement("p");

            var tempPlacingHead = document.createTextNode(petData[i].name);

            pet_Name.appendChild(tempPlacingHead);

            para_pet.innerHTML = petData[i].description;

            var span_ = document.createElement("span");
            var Pet_age = "Age: " + petData[i].age + " years old.";
            span_.innerHTML = Pet_age;

            pet_Detail.appendChild(pet_Name);
            pet_Detail.appendChild(para_pet);
            pet_Detail.appendChild(span_);

            t_Row.appendChild(t_Detail);
            t_Row.appendChild(pet_Detail);

            dataArray.appendChild(t_Row);
        }
    }
};

function filterDog() {

    filterType = "dog";
    loadTableWithFilters();
};

function filterCat() {

    filterType = "cat";
    loadTableWithFilters();
};

function filterBird() {

    filterType = "bird";
    loadTableWithFilters();
};

function filter_zero_1() {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = 1
    loadTableWithFilters();
};

function filter_1_3() {
    filterType = "";
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
};

function filter_4_plus() {
    filterType = "";
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
};

function filterAllPets() {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
};