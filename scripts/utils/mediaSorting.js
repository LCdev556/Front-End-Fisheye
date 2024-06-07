const titleOfList = document.querySelector(".selectedChoice")
const sortChoiceList = document.querySelector(".sortChoiceList")
const  listChoice = document.querySelectorAll(".listChoice")

const listElementOne = document.querySelector("#listElementOne")
const listElementTwo = document.querySelector("#listElementTwo")
const listElementThree = document.querySelector("#listElementThree")

const listButtonOne = document.querySelector("#listButtonOne")
const listButtonTwo = document.querySelector("#listButtonTwo")
const listButtonThree = document.querySelector("#listButtonThree")

const checkElement =  document.querySelector("input[name=scales]")

//Ecoute d'evenement pour gerer l'affichage de la liste de filtres
checkElement.addEventListener('change', function() {
    if (this.checked) {
        listElementTwo.style.display = "block"; 
        listElementThree.style.display = "block"
    } else {
        listElementTwo.style.display = "none";
        listElementThree.style.display = "none"
    }
  });
 

/**
 * trie des medias selon leurs titres
 * @returns 
 */
function sortByTitle() {
 
    //modification de la place des filtre dans la liste
    listElementOne.append(listButtonOne) 
    listElementTwo.append(listButtonTwo)
    listElementThree.append(listButtonThree)
   
    
    mediaInputs = document.querySelectorAll(".media");
    // Convertion de la liste d'entrées en un tableau pour pouvoir utiliser la méthode sort()
    const mediaArray = Array.from(mediaInputs);

    return mediaArray.sort((a, b) => {
    let title = document.querySelector(".mediaTitle")
    return a.dataset.mediaTitle.localeCompare(b.dataset.mediaTitle);
    
    
})}


/**
 * Trie des media selon leurs popularité (nombre de like)
 * @returns 
 */
function sortByPopularity() {
 
    //modification de la place des filtre dans la liste
    listElementOne.append(listButtonTwo)
    listElementTwo.append(listButtonOne)
    listElementThree.append(listButtonThree)

    
    mediaInputs = document.querySelectorAll(".media");
    // Convertion de la liste d'entrées en un tableau pour pouvoir utiliser la méthode sort()
    const mediaArray = Array.from(mediaInputs);

    return mediaArray.sort((a, b) => {
    return b.dataset.mediaLike - a.dataset.mediaLike;
})}

/**
 * Trie des media selon leur date de création
 * @returns 
 */
function sortByDate() {

    //modification de la place des filtre dans la liste
    listElementOne.append(listButtonThree) 
    listElementTwo.append (listButtonTwo)
    listElementThree.append (listButtonOne) 

   
    mediaInputs = document.querySelectorAll(".media");
    // Convertion de la liste d'entrées en un tableau pour pouvoir utiliser la méthode sort()
    const mediaArray = Array.from(mediaInputs);

    return mediaArray.sort((a, b) => {
        return new Date(a.dataset.mediaDate) - new Date(b.dataset.mediaDate);
})}

/**
 * Affichage des media selon le filtre de trie selectioné
 * @param sortChoice 
 */
function displaySortBy(sortChoice){
const sortedMedia = sortChoice(mediaInputs);
const mediaContainer = document.querySelector(".photographe-media")
mediaContainer.innerHTML = ""
sortedMedia.forEach((element) => mediaContainer.append(...sortedMedia));
}

