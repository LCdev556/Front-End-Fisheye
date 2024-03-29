import { photographerId } from "../pages/photographer.js";
import { photographerTemplate } from "../templates/photographer.js";
import { factoryMedia } from "../templates/mediaFactorie.js";

/**
 * organisation des données de la page photographe
 */

export async function displayDataPhotographer(photographers) {


    const selectedPhotographers = photographers.photographers.find(function(photographer){
        
        return photographer.id == photographerId;

    });


    const selectedMedia = photographers.media.filter(function(media){
        return media.photographerId == photographerId;

    });
    

    

    

    
    const photographerModel = photographerTemplate(selectedPhotographers);
    const userPresentationDOM = photographerModel.getUserDescriptionDOM();
    
    

    selectedMedia.forEach((selectedMedia) => {
        factoryMedia(selectedMedia)
    });
}

/**
 * organisation des données de la page index
 */
export async function displayDataIndex(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}