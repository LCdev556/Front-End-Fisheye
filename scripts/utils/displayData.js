import { photographerTemplate } from "../templates/photographer.js";
import { factoryMedia } from "../templates/mediaFactorie.js";
import { getPhotographerIdFromCurrentUrlParams } from "./urlParams.js";
import { getPhotographerScore } from "../templates/photographer.js";
//import { selectedPhotographers } from "./selectedPhotographersData.js";





/**
 * organisation des données de la page photographe
 */

export async function displayDataPhotographer(photographers) {
    const currentPhotographerId = getPhotographerIdFromCurrentUrlParams();

    const selectedPhotographers = photographers.photographers.find(function(photographer) {
        return photographer.id == currentPhotographerId;
    });
    
    const selectedMedia = photographers.media.filter(function(media) {
        return media.photographerId == currentPhotographerId;
    });

    const photographerModel = photographerTemplate(selectedPhotographers);
    const userPresentationDOM = photographerModel.getUserDescriptionDOM();
    
    
    selectedMedia.forEach((selectedMedia) => {
        factoryMedia(selectedMedia, selectedPhotographers)
    });

    getPhotographerScore(selectedMedia, selectedPhotographers)
 
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