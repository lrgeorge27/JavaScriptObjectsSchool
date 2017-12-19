// console.log("linked");
// document.getElementById("sumDigits").onsubmit = function(event) { //used for a form that has been deleted.prevents the submit button from submiting and refreshing.
//     event.preventDefault(); //prevents input from being cleared
//     console.log("form submited");
// }
document.getElementById("submit").onclick = function() {
    //take the numbers from text field and display them in our display area
    var input = document.getElementById("input").value;
    console.log(input);
    document.getElementById("display").innerHTML += input; //+= concatonates multiple values onto the end of input.
    document.getElementById('input').value = ""; //clears the input field on submit
}
document.getElementById("addDigits").onclick = function() {
    // console.log("addDigits clicked");
    //add all the digits from the display field
    var display = document.getElementById("display").innerHTML;
    console.log(display);
    var runningTotal = 0
    for (var i = 0; i < display.length; i++) {
        console.log(display[i]);
        runningTotal += parseInt(display[i]); //runningTotal = runningTotal + parseInt(display[i]);
    }
    console.log(runningTotal);
    document.getElementById("display").innerHTML = runningTotal;
}
