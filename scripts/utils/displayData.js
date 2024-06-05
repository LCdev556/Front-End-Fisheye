import { photographerTemplate } from "../templates/photographer.js";
import { factoryMedia } from "../templates/mediaFactorie.js";
import { getPhotographerIdFromCurrentUrlParams } from "./urlParams.js";
import { getPhotographerScore } from "../templates/photographer.js";

/**
 * Organisation des données de la page photographe
 * 
 * @param {*} photographers 
 */
export async function displayDataPhotographer(photographers) {
    const currentPhotographerId = getPhotographerIdFromCurrentUrlParams();

    //Selection dans la liste des photographes selon l'id passé dans l'url
    const selectedPhotographers = photographers.photographers.find(function(photographer) {
        return photographer.id == currentPhotographerId;
    });
    
    //Filtrage des medias correspondants au photographe selectioné
    const selectedMedia = photographers.media.filter(function(media) {
        return media.photographerId == currentPhotographerId;
    });

    //Application de la fonction de construction des elements du dom aux informations du photographe selectioné
    const photographerModel = photographerTemplate(selectedPhotographers);
    const userPresentationDOM = photographerModel.getUserDescriptionDOM();
    
    //Application de la fonction de construction des elements du dom aux medias du photographe selectioné
    selectedMedia.forEach((selectedMedia) => {
        factoryMedia(selectedMedia, selectedPhotographers)
    });

    //Application aux informations de photographe de la fonctionn  de construction de l'element contenant le nombre total de like et le tarif
    getPhotographerScore(selectedMedia, selectedPhotographers)
 
}

/**
 * Organisation des données de la page index
 * @param {*} photographers 
 */
export async function displayDataIndex(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    //application de la fonction de construction a tout les photographes
    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}