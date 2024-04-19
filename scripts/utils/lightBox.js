//const mediaDisplayedOnThePage = document

function openLightBox() {
    const lightBox = document.getElementById("lightBox_modal");
	lightBox.style.display = "block";
}

function closeLightBox(){
    const lightBox = document.getElementById("lightBox_modal");
    document.querySelector('.lightBoxMediaContainer').innerHTML = ""
    lightBox.style.display = "none";
}


function displayLightBox(element) {
    openLightBox();

    if (element.tagName === 'IMG') {
        const lightboxMediaImg = document.createElement('img');
        lightboxMediaImg.setAttribute("src", element.src);
        // Ajoutez l'image à votre lightbox
        document.querySelector('.lightBoxMediaContainer').appendChild(lightboxMediaImg);
    } else if (element.tagName === 'VIDEO') {
        const lightboxMediaVideo = document.createElement('video');
        lightboxMediaVideo.setAttribute("src", element.src);
        // Ajoutez la vidéo à votre lightbox
        document.querySelector('.lightBoxMediaContainer').appendChild(lightboxMediaVideo);
    }
}



    
