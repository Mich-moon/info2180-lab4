"use strict";

window.onload = function() {

    let btn = document.getElementById("myButton");
    let search = document.getElementsByTagName("input")[0];
    let result = document.getElementById("result");

    btn.addEventListener("click", function(element){
        element.preventDefault();

        //Fetch the data by opening an AJAX request which returns the result of superheroes.php.
        fetch("superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                displayResult(data);
                //alert(data);
            })
            .catch(error => console.log(error));

    });

    let displayResult = function(data) {
        let searchText = search.value.trim();
        let exp = /[a-zA-Z] /;   // regular expression for lowercase and uppercase letters

        if (searchText.length == 0) {
            result.innerHTML = data;
        } else if (exp.test(searchText)) {

        }
    };
};