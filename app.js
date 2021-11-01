"use strict";

window.onload = function() {

    let btn = document.getElementById("myButton");
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
                alert(data);
            })
            .catch(error => console.log(error));

    });
};