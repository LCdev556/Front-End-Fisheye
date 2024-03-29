import { photographerId } from "../pages/photographer.js";
import { photographerTemplate } from "../templates/photographer.js";
import { factoryMedia } from "../templates/mediaFactorie.js";

/**
 * organisation des données de la page photographe
 */

export async function displayDataPhotographer(photographers) {


    const selectedPhotographers = photographers.photographers.find(function(photographer){
        
        return photographer.id == photographerId;

    });


    const selectedMedia = photographers.media.filter(function(media){
        return media.photographerId == photographerId;

    });

    console.log(selectedMedia)
    
    const photographerModel = photographerTemplate(selectedPhotographers);
    const userPresentationDOM = photographerModel.getUserDescriptionDOM();
    
    selectedMedia.forEach((selectedMedia) => {
        factoryMedia(selectedMedia)
    });

    function factoryMedia (media){
        const mediaModel = mediaTemplate(media);
        switch (media.type) {
            
            case media.image :
                /**mediaTemplate(media);
                getPictureMedia(media);*/
                
                const mediaPhotoModel = mediaModel.getPictureMedia();
            break;
    
            case media.video :
                /**mediaTemplate(media);
                getVideoMedia(media);*/
               
                const mediaVideoModel = mediaModel.getVideoMedia();
            break;
    
        }
    }
    
     function mediaTemplate(media) {
    
        const { title, image, video, likes,name } = media;
    
        const imagepicture = `assets/images/sample photos/${selectedPhotographers}/${image}`;
        const videopicture = `assets/images/sample photos/${selectedPhotographers}/${video}`;
    
        const mediaSection = document.querySelector(".photographe-media");
    
        const mediaArticle = document.createElement('article');
    
        const mediaDescription = document.createElement('div');
        mediaDescription.className = 'mediaDescription';
    
        const mediaTitle = document.createElement('p');
        mediaTitle.className = 'mediaTitle';
        mediaTitle.textContent = title;
    
        const mediaLikeScore = document.createElement('p');
        mediaLikeScore.className = 'mediaLikeScore';
        mediaLikeScore.textContent = likes
    
       /** const heartIcon  = document.createElement('p');
        heartIcon.className = 'heartIcon';
        heartIcon.textContent = <i class="fa-solid fa-heart"></i>;*/ 
    
        mediaDescription.appendChild(mediaTitle);
        mediaDescription.appendChild(mediaLikeScore);
        //mediaDescription.appendChild(heartIcon);
        mediaArticle.appendChild(mediaDescription);
        mediaSection.appendChild(mediaArticle);
    
        
       function getVideoMedia() {
    
            const videoInput = document.createElement('video');
            videoInput.className = 'videoInput';
            videoInput.setAttribute("src", videopicture);
    
            mediaArticle.appendChild(videoInput);
            return(getVideoMedia)
        }
    
        function getPictureMedia() {
            
            const pictureInput = document.createElement('img');
            pictureInput.className = 'PictureInput';
            pictureInput.setAttribute("src", imagepicture);
    
            mediaArticle.appendChild(pictureInput);
            return(getPictureMedia)
        }
    
        return { title, image, video, likes, getPictureMedia, getVideoMedia }
    }
        
    
    
    
}

/**
 * organisation des données de la page index
 */
export async function displayDataIndex(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}