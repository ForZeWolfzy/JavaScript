pics = document.getElementById("pics");
createPicsHolders();
createYTImages();

function createPicsHolders() {
    for (var i = 0; i < 9 ; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createYTImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        fav = document.createElement("div");
        fav.className = "fav";
        fav.id = "fav_" + (i+1);
        ytpic = document.createElement("img");
        ytpic.src = "img/yt" + (i+1) + ".jpg";
        ytpic.id = (i+1);
        ytpic.addEventListener("click", function () {
            makefav(this.id);
        });
        pictureHolders[i].appendChild(fav);
        pictureHolders[i].appendChild(ytpic);
    }
}
function makefav(id) {
    notsofav = document.getElementsByClassName("fav");

    for (var i = 0; i < notsofav.length; i++) {
        notsofav[i].style.backgroundImage = "none";
    }

    fav = document.getElementById("fav_" + id);
    fav.style.backgroundImage = "url('img/sterretje.png')";
}