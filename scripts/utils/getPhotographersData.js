/**
 * Recuperation des données du fichier json avec fetch
 * @returns 
 */
export async function getPhotographers() {
    const reponse = await fetch("./data/photographers.json");
    const photographersData = await reponse.json();
   
    
    return (photographersData)
       
}

export const {photographers}  = await getPhotographers();
