
const margheritta = document.getElementById("mg");
const  deepDish = document.getElementById("dd");
const  chicken = document.getElementById("cp");
const peperoni = document.getElementById("pd");
const button= document.getElementsByTagName("button")

function checking (){
    if (margheritta.checked == true){
        alert("The price is: "  + Number(margheritta.value))
    }
    else if (deepDish.checked == true){
        alert("The price is: "  + Number(deepDish.value))
    }
    else if (chicken.checked == true){
        alert("The price is: "  + Number(chicken.value))
    }
    else if (peperoni.checked == true){
        alert("The price is: "  + Number(peperoni.value))
    }
    else if (margheritta.checked == true &&  deepDish.checked == true ){
        alert(`The price is: ${ parseInt (margheritta.value) + parseInt(deepDish.value)}`)
    }
    else if (margheritta.checked &&  chicken.checked == true){
        alert("The price is: " +  Number(margheritta.value) + Number(chicken.value))
    }
    else if (margheritta.checked &&  peperoni.checked == true){
        alert("The price is: " +  Number(margheritta.value) + Number(peperoni.value))
    }
    else if (margheritta.checked &&  deepDish.checked && chicken.checked == true){
        alert("The price is: " +  Number(margheritta.value) + Number(deepDish.value) + Number(chicken.value))
    }
    else if (margheritta.checked &&  deepDish.checked && peperoni.checked == true){
        alert("The price is: " +  Number(margheritta.value) + Number(deepDish.value) + Number(chicken.value))
    }
    else if (margheritta.checked &&  deepDish.checked && chicken.checked && peperoni.checked == true){
        alert("The price is: " +  Number(margheritta.value) + Number(deepDish.value) + Number(peperoni.value))
    }
    else if (margheritta.checked &&  chicken.checked && peperoni.checked == true){
        alert("The price is: " +  Number(margheritta.value) + Number(chicken.value) + Number(peperoni.value))
    }
    else if (deepDish.checked &&  chicken.checked == true){
        alert("The price is: " +  Number(deepDish.value) + Number(chicken.value))
    }
    else if (deepDish.checked &&  peperoni.checked == true){
        alert("The price is: " +  Number(deepDish.value) + Number(peperoni.value))
    }
    else if (deepDish.checked &&  chicken.checked && peperoni.checked == true){
        alert("The price is: " +  Number(margheritta.value) + Number(chicken.value) + Number(peperoni.value))
    }
    else if (chicken.checked &&  peperoni.checked == true){
        alert("The price is: " +  Number(chicken.value) + Number(peperoni.value))
    
    }

}
function  checking2 (name){
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`)
    let values = [];
    checkboxes.forEach((checkbox) =>{
        values.push(checkbox.value);
        return values
    })}


