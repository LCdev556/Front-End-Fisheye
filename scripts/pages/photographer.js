import {photographerTemplate} from "../templates/photographer";
import { getPhotographers, init } from "../utils/getData";

const currentUrl = window.location;
let params = new URLSearchParams(currentUrl.search);

params.get('id')

const photographerId = params.get('id')

console.log(params.get('id'));

getPhotographers()

/**
async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    const reponse = await fetch("./data/photographers.json");
    const photographersData = await reponse.json();
   
    // et bien retourner le tableau photographers seulement une fois récupéré
    return (photographersData)
       
}
*/


async function displayData(photographers) {


    const selectedPhotographers = photographers.find(function(photographer){
        
        return photographer.id == photographerId;

    });

    const selectedMedia = photographers.filter(function(media){
        return media.photographerId == parseInt(82);
    });

    

    
    const photographerModel = photographerTemplate(selectedPhotographers);
    const userPresentationDOM = photographerModel.getUserDescriptionDOM();
    
    

    selectedMedia.forEach((selectedMedia) => {
        factoryMedia(selectedMedia)
    });
    
}



/** 
async function init() {
    // Récupère les datas des photographes
    const {photographers} = await getPhotographers();
    displayData(photographers);
}
*/
init();

