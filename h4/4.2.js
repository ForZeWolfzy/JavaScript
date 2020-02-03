var pics = [1,2,3,4,5,6,7,8,9];
var counter = 1;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('img/yt1.jpg')";
slideholder.addEventListener("click", function () {
     slideholder.style.backgroundImage = "url('img/yt" + getYT() + ".jpg')";
});
function getYT() {
    if (counter >= pics.length) {
        counter = 1;
    } else {
        counter++;
    }
    return counter

}
