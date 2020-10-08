console.log('%c HI', 'color: firebrick')

function fetchImages() { 
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then((response) => response.json())
        .then((imagesPromise) => {
            imagesPromise.message.forEach((image) => {
                // reges gets the look for breeds get btwenn // save as breed
                renderImage(image);
       //         fetchBreed(//breed varible)
            });

        });

}

function renderImage(image) {
    let imageEl = document.createElement("img");
    let imageDiv = document.getElementById("dog-image-container"); 
    imageDiv.appendChild(imageEl);
    imageEl.src = image;
}

fetchImages();


function fetchBreed() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((response) => response.json())
        .then((breeds) => {
            const doghash = breeds.message;
            console.log(doghash);
            for (const breed in doghash) {
                if (doghash[breed].length == 0)
                    renderBreed(breed);
                else
                  console.log(doghash[breed]);
            }
        }); 
}

fetchBreed();

function renderBreed(breedName) {
    let breedLi = document.createElement("li");
    let breedlist = document.getElementById("dog-breeds");
    breedlist.appendChild(breedLi);
    breedLi.innerText = breedName;
    breedLi.addEventListener("click", (changeColor) => {
        breedLi.style.color = "red";
    }); // whats up with the scope of breedLi
}

