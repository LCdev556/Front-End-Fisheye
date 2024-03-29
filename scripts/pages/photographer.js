import {getPhotographers} from "../utils/getPhotographersData.js"
import { displayDataPhotographer } from "../utils/displayData.js";

const currentUrl = window.location;
let params = new URLSearchParams(currentUrl.search);

params.get('id')

export const photographerId = params.get('id')



async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    displayDataPhotographer(photographers);
}

init();

