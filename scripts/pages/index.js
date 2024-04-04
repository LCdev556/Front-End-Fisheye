    import {getPhotographers, photographers } from "../utils/getPhotographersData.js";
    import { displayDataIndex } from "../utils/displayData.js";


    //export const photographers  = await getPhotographers();
    async function init() {
        // Récupère les datas des photographes 
        //const {photographers}  = await getPhotographers();
        displayDataIndex(photographers);
    }
    init()
    
