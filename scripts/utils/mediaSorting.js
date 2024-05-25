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

function listTitle(title){
    
    titleOfList.textContent = title;
}

checkElement.addEventListener('change', function() {
    if (this.checked) {
        listElementTwo.style.display = "block"; 
        listElementThree.style.display = "block"
    } else {
        listElementTwo.style.display = "none";
        listElementThree.style.display = "none"
    }
  });
 
//choiceOne.addEventListener('mouseover',event=> {choiceTwo.style.display = "block"; choiceThree.style.display = "block"})
//choiceOne.addEventListener('mouseout',event=> {choiceTwo.style.display = "none"; choiceThree.style.display = "none"})



function sortByTitle() {
 
    listElementOne.append(listButtonOne) 
    listElementTwo.append(listButtonTwo)
    listElementThree.append(listButtonThree)
   
    console.log("1")
    mediaInputs = document.querySelectorAll(".mediaInput");
        // Convertir la liste d'entrées en un tableau pour pouvoir utiliser la méthode sort()
    const mediaArray = Array.from(mediaInputs);

    return mediaArray.sort((a, b) => {
    let title = document.querySelector(".mediaTitle")
    //console.log(mediaInput.dataset.mediaTitle)
    return a.dataset.mediaTitle.localeCompare(b.dataset.mediaTitle);
    
    
})}



function sortByPopularity() {
 
    listElementOne.append(listButtonTwo)
    listElementTwo.append(listButtonOne)
    listElementThree.append(listButtonThree)

    console.log("2")
    mediaInputs = document.querySelectorAll(".mediaInput");
        // Convertir la liste d'entrées en un tableau pour pouvoir utiliser la méthode sort()
    const mediaArray = Array.from(mediaInputs);

    return mediaArray.sort((a, b) => {
    return b.dataset.mediaLike - a.dataset.mediaLike;
})}

function sortByDate() {


    listElementOne.append(listButtonThree) 
    listElementTwo.append (listButtonTwo)
    listElementThree.append (listButtonOne) 

    console.log("3")
    mediaInputs = document.querySelectorAll(".mediaInput");
        // Convertir la liste d'entrées en un tableau pour pouvoir utiliser la méthode sort()
    const mediaArray = Array.from(mediaInputs);

    return mediaArray.sort((a, b) => {
        return new Date(a.dataset.mediaDate) - new Date(b.dataset.mediaDate);
})}


function displaySortBy(sortChoice){
const sortedMedia = sortChoice(mediaInputs);
const mediaContainer = document.querySelector(".photographe-media")
mediaContainer.innerHTML = ""
sortedMedia.forEach((element) => mediaContainer.append(...sortedMedia));

/** 
switch (sortChoice){
    case 'sortByTitle' :
        choiceOne.style.display = "none"
        choiceTwo.style.display = "block"
        choiceThree.style.display = "block"
    break;

    case 'sortByPopularity' : 
        choiceTwo.style.display = "none"
        choiceOne.style.display = "block"
        choiceThree.style.display = "block"
    break;

    case 'sortByDate' : 
        choiceTwo.style.display = "block"
        choiceOne.style.display = "block"
        choiceThree.style.display = "none"
    break;
}*/
/** 
if ( sortChoice = sortByTitle ){
    choiceOne.style.display = "none"
    choiceTwo.style.display = "block"
    choiceThree.style.display = "block"
    
}else
if(sortChoice = sortByPopularity){
    choiceTwo.style.display = "none"
    choiceOne.style.display = "block"
    choiceThree.style.display = "block"
}else
if(sortChoice = sortByDate){
    choiceTwo.style.display = "block"
    choiceOne.style.display = "block"
    choiceThree.style.display = "none"
}*/
}

