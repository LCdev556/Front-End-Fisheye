import {getPhotographers} from "../utils/getPhotographersData.js"

const currentUrl = window.location;
let params = new URLSearchParams(currentUrl.search);

params.get('id')

const photographerId = params.get('id')

console.log(params.get('id'));


async function displayData(photographers) {


    const selectedPhotographers = photographers.photographers.find(function(photographer){
        
        return photographer.id == photographerId;

    });

console.log(photographers.media)

    const selectedMedia = photographers.media.filter(function(media){
        return media.photographerId == parseInt(82);

    });

    

    

    
    const photographerModel = photographerTemplate(selectedPhotographers);
    const userPresentationDOM = photographerModel.getUserDescriptionDOM();
    
    

    selectedMedia.forEach((selectedMedia) => {
        factoryMedia(selectedMedia)
    });
    
}




async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    console.log(photographers)
    displayData(photographers);
}

init();

