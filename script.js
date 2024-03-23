function temperature() {
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) +32
    document.getElementById("farenheit").value = f
}

function weight() {
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pound").value = p
}

function distance() {
    var km = document.getElementById("kilometer").value;
    var ml = km * 0.62137
    document.getElementById("miles").value = ml
}