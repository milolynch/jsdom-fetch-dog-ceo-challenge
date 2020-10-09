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
            const dogHash = breeds.message;
            for (const breed in dogHash) {
                if (dogHash[breed].length == 0) {
                    renderBreed(breed, document.querySelector("#dog-breeds"));
                }
                else {
                    let breedLi = renderBreed(breed, document.querySelector("#dog-breeds"))
                    let subUl = document.createElement("ul")
                    breedLi.appendChild(subUl)
                        subBreeds = dogHash[breed]
                        subBreeds.forEach(subBreed => renderBreed(subBreed, subUl))
                  console.log(subBreeds);
                }
            }
        }); 
}

fetchBreed();

function renderBreed(breedName, elementUl) {
    let breedLi = document.createElement("li");
    // let breedlist = document.getElementById("dog-breeds");
    elementUl.appendChild(breedLi);
    breedLi.innerText = breedName;
    breedLi.addEventListener("click", (changeColor) => {
        breedLi.style.color = "red";
    }); // whats up with the scope of breedLi
    return breedLi
}


const selectElement = document.querySelector('#breed-dropdown');

selectElement.addEventListener('change', () => {
    
})
