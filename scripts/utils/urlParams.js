export const getPhotographerIdFromCurrentUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    return urlParams.get('id');
}

