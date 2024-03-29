    import { getPhotographers } from "../utils/getPhotographersData.js";
    import { displayDataIndex } from "../utils/displayData.js";


    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayDataIndex(photographers);
    }
    init()
    
