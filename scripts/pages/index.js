import { photographers } from "../utils/getPhotographersData.js";
import { displayDataIndex } from "../utils/displayData.js";

/**
 * Affichage sur la page index des données recupérées depuis le fichier json 
 */
async function init() {
     
    displayDataIndex(photographers);
}
init()
    
