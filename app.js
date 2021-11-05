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

        //get the data by opening an AJAX request which returns the result of superheroes.php.
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                result.innerHTML = this.responseText;
            }
        };

        if (searchText.length == 0) {

            xmlhttp.open("GET", "superheroes.php", true);
            xmlhttp.send();

        } else if (exp.test(searchText)) {

            xmlhttp.open("GET", "superheroes.php?query="+searchText, true);
            xmlhttp.send();
        }

    });
};