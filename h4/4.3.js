var pica = [1,2,3];
var counter = 0;
var ogen = document.getElementById("ogen");
ogen.style.backgroundImage = "url('img/ogen1.jpg')";
var neus = document.getElementById("neus");
neus.style.backgroundImage = "url('img/neus1.jpg')";
var mond = document.getElementById("mond");
mond.style.backgroundImage = "url('img/mond1.jpg')";

ogen.addEventListener("click", function () {
    ogen.style.backgroundImage = "url('img/ogen" + next() + ".jpg')";
});
neus.addEventListener("click", function () {
    neus.style.backgroundImage = "url('img/neus" + next() + ".jpg')";
});
mond.addEventListener("click", function () {
    mond.style.backgroundImage = "url('img/mond" + next() +".jpg')"
});
function next() {
    if (counter >= pica.length) {
        counter = 1;
    } else {
        counter++;
    }
    console.log(counter);
    return counter;
}