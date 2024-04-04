export const getPhotographerIdFromCurrentUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    return urlParams.get('id');
}


/** 
export const getSelectedPhotographers = (photographers) => {
const selectedPhotographers = photographers.photographers.find(function(photographer) {
    return photographer.id == currentPhotographerId;
});
return selectedPhotographers;
}

export const getSelectedMedia = () => {
const selectedMedia = photographers.media.filter(function(media) {
    return media.photographerId == currentPhotographerId;
});
return selectedMedia;
}*/