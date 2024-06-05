/**
 * Recuperation dans l'url de l'id du photographe selectionné
 * @returns {number} id du photographe selectioné
 */
export const getPhotographerIdFromCurrentUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    return urlParams.get('id');
}

