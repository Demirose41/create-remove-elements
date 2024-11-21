/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();
        console.log('git')

        let url = data.message; // URL of new dog image

        // /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // // debugger
        let dogBreed = url.split("/")[4].replace("-", " ")

        // /*------------ Create new dog card with the url above ------------- */
        // /* (use the HTML structure for the current dog image in the index.html
        //     file to create a new image with the url) */
        const newDog = document.createElement("li")
        newDog.innerHTML = ` <figure>
            <img src=${url}>
            <figcaption>${dogBreed}
            </figcaption>
        </figure>`

        // /* Add the new dog card as a child to the ul in the .gallery element */
        const galleryUl = document.querySelector(".gallery > ul")
        galleryUl.appendChild(newDog)
        // debugger

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const firstDog = document.querySelector(".gallery > ul > li")

    /*-------------------- Remove the first dog card --------------------- */
    firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const lastDog = document.querySelector(".gallery > ul > li:last-child")

    /*-------------------- Remove the last dog card ----------------------- */
    lastDog.remove()
});

