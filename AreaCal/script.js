function calc(){
    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;
    var area = w * h;
    alert("the area is: ", area);
    document.getElementById("answer").value = area;
}