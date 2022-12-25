function sum_of_interior_angles(){
    var number_of_sides1 = document.getElementById("number_of_sides1").value;
    var sum = Number(180 *(number_of_sides1 -2));
    document.getElementById("sum_result").innerHTML = sum;
}
function measure_of_interior_angles(){
    var number_of_sides2 = document.getElementById("number_of_sides2").value;
    var measure_interior = Number((180 *(number_of_sides2 -2))/number_of_sides2);
    document.getElementById("measure_interior_result").innerHTML = measure_interior;
}
function measure_of_exterior_angles(){
    var number_of_sides3 = document.getElementById("number_of_sides3").value;
    var measure_exterior = Number(360/number_of_sides3);
    document.getElementById("measure_exterior_result").innerHTML = measure_exterior;
}
function measure_of_central_angles(){
    var number_of_sides4 = document.getElementById("number_of_sides4").value;
    var measure_central = Number(360/number_of_sides4);
    document.getElementById("measure_central_result").innerHTML = measure_central;
}