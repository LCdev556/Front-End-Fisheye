import { getPhotographers } from "../utils/getPhotographersData.js"
import { displayDataPhotographer } from "../utils/displayData.js";


/**
 * Affichage sur la  page photographer des données issu du fichier json selon le photographe selectionné
 */
displayDataPhotographer(await getPhotographers());