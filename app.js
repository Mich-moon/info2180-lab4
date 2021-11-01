"use strict";

window.onload = function() {

    let btn = document.getElementById("myButton");
    let search = document.getElementsByTagName("input")[0];
    let result = document.getElementById("result");

    btn.addEventListener("click", function(element){
        element.preventDefault();
        let searchText = search.value.trim();
        let exp = /[a-zA-Z] /;   // regular expression for lowercase and uppercase letters

        // remove previous result
        result.innerHTML = "";

        if (searchText.length == 0) {
            //Fetch the data by opening an AJAX request which returns the result of superheroes.php.
            fetch("superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('could not fetch data')
                }
            })
            .then(data => {
                // show result on page
                displayResult(data);
            })
            .catch(error => console.log(error));
            

        } else if (exp.test(searchText)) {
            //Fetch a hero that matches the search text
            let url = "superheroes.php?query="+searchText ;
            fetch(url)
            // fetch("superheroes.php?parameter=hero")
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return Promise.reject('could not fetch data')
                }
            })
            .then(heroData => {
                // show result on page
                displayResult(heroData);
            })
            .catch(error => console.log(error));
        }

    });

    // adds results to the results div
    let displayResult = function(data) {
        result.innerHTML = data;
    };
};