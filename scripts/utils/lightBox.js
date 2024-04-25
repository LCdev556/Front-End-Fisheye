/**function openLightBox() {
    const lightBox = document.getElementById("lightBox_modal");
	lightBox.style.display = "block";
}

function closeLightBox(){
    const lightBox = document.getElementById("lightBox_modal");
    document.querySelector('.lightBoxMediaContainer').innerHTML = ""
    lightBox.style.display = "none";
}
*/



/**function displayLightBox(element) {
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
*/



    // Votre code JavaScript ici
    // Vous pouvez placer ici le code qui nécessite que le DOM soit entièrement chargé
    
    function openLightBox() {
        const lightBox = document.getElementById("lightBox_modal");
        lightBox.style.display = "block";
    }
    
    function closeLightBox(){
        const lightBox = document.getElementById("lightBox_modal");
        document.querySelector('.lightBoxMediaContainer').innerHTML = ""
        lightBox.style.display = "none";
    }
    
    
    
        // Vous pouvez maintenant utiliser displayedMedia pour accéder à tous les médias sélectionnés
    
        
    // Parcourez chaque élément displayedMedia et ajoutez un gestionnaire d'événements pour le clic
/**     mediaInputsList.forEach(mediaInput => {
        mediaInput.addEventListener('click', event => {
            const index = mediaInputsList.indexOf(event.currentTarget);
            displayMedia(index); // Appel de la fonction displayMedia avec l'index du média cliqué
            openLightBox(); // Ouvrir la lightbox lorsque le média est cliqué
        });
    });
*/  let mediaInputs = []
    function indexOfMedia () {
        mediaInputs = document.querySelectorAll(".mediaInput");
        const dataIds = []
        mediaInputs.forEach(mediaInput => {
            const dataId = mediaInput.dataset.mediaId;
            // Vérifier si l'attribut data-id existe
            //if (data-media-id) {
                // Ajouter l'attribut data-id à la liste
                dataIds.push(dataId);
            //}
        });
        console.log(dataIds)
        console.log(mediaInputs);
        console.log(event.currentTarget);
        const clickedMedia = event.currentTarget
        console.log(clickedMedia)
        const clikedMediaId = clickedMedia.getAttribute('data-media-id');
        console.log(clikedMediaId)

        dataIds.findIndex(checkId);

        function checkId(id) {
        return id = clikedMediaId;
        }
        console.log(checkId)
        //const index = dataIds.indexOf(event.currentTarget);
        //console.log(index);
        displayMedia(dataIds.findIndex(checkId)); // Appel de la fonction displayMedia avec l'index du média cliqué
        openLightBox(); // Ouvrir la lightbox lorsque le média est cliqué
    }
    
    let currentIndex = 0;
    
    // Fonction pour afficher le média dans la lightbox
    function displayMedia(index) {
        // Assurez-vous que l'index reste dans les limites des médias affichés
        //if (index < 0 || index >= mediaInputs.length) {
        //    return;
        //}
    
        currentIndex = index;
        const media = mediaInputs[currentIndex];
        const lightBoxMediaContainer = document.querySelector('.lightBoxMediaContainer');
        lightBoxMediaContainer.innerHTML = ""; // Vide le contenu précédent de la lightbox
    
        if (media.tagName === 'IMG') {
            const lightboxMediaImg = document.createElement('img');
            lightboxMediaImg.setAttribute("src", media.src);
            lightBoxMediaContainer.appendChild(lightboxMediaImg);
        } else if (media.tagName === 'VIDEO') {
            const lightboxMediaVideo = document.createElement('video');
            lightboxMediaVideo.setAttribute("src", media.src);
            lightBoxMediaContainer.appendChild(lightboxMediaVideo);
        }
    }
    
    // Fonction pour afficher le média précédent dans la lightbox
    function showPreviousMedia() {
        if (currentIndex > 0) {
            displayMedia(currentIndex - 1);
        }
    }
    
    // Fonction pour afficher le média suivant dans la lightbox
    function showNextMedia() {
        if (currentIndex < mediaInputs.length - 1) {
            displayMedia(currentIndex + 1);
        }
    }
    
    // Récupérez les boutons précédent et suivant
    const previousButton = document.getElementById('previousButton');
    const nextButton = document.getElementById('nextButton');
    
    // Ajoutez des gestionnaires d'événements aux boutons
    previousButton.addEventListener('click', showPreviousMedia);
    nextButton.addEventListener('click', showNextMedia);
    



    
