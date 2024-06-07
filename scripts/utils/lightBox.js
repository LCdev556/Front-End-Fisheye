
    /**
     * Ouverture de la lightbox
     */
    function openLightBox() {
        const lightBox = document.getElementById("lightBox_modal");
        lightBox.style.display = "block";
        main.setAttribute("inert","")
    }
    
    /**
     * Fermeture de la lightbox
     */
    function closeLightBox(){
        const lightBox = document.getElementById("lightBox_modal");
        document.querySelector('.lightBoxMediaContainer').innerHTML = ""
        lightBox.style.display = "none";
        main.removeAttribute("inert","")
    }
    
    let mediaInputs = []

    /**
     * Recuperation de l'id du media selectioner pour étre ouvert dans la lightbox
     */
    function indexOfMedia () {
        mediaInputs = document.querySelectorAll(".mediaInput");
        const dataIds = []
        mediaInputs.forEach(mediaInput => {
            const dataId = mediaInput.dataset.mediaId;
            
                dataIds.push(dataId);
            
        });
        
        const clickedMedia = event.currentTarget
        
        const clikedMediaId = clickedMedia.getAttribute('data-media-id');

        const checkId = (element) => element === clikedMediaId;

        dataIds.findIndex(checkId);

        displayMedia(dataIds.findIndex(checkId)); 

        openLightBox(); 
        
    }
    
    let currentIndex = 0;
    
    /**
     * construction du media dans la lightbox 
     * @param {number} index 
     */
    function displayMedia(index) {
        
    
        currentIndex = index;
        const media = mediaInputs[currentIndex];
        const lightBoxMediaContainer = document.querySelector('.lightBoxMediaContainer');
        const lightBoxMediaTitle = document.querySelector('.lightBoxMediaTitle');
        lightBoxMediaContainer.innerHTML = ""; 
        lightBoxMediaTitle.innerHTML = "";

    
        if (media.tagName === 'IMG') {
            const lightboxMediaImg = document.createElement('img');
            lightboxMediaImg.className = 'lightboxMedia lightboxMediaImg';
            lightboxMediaImg.setAttribute("src", media.src);
            lightBoxMediaContainer.appendChild(lightboxMediaImg);
            lightboxMediaImg.ariaLabel = "image" + media.dataset.mediaTitle
            lightboxMediaImg.tabIndex = 0
            lightBoxMediaTitle.textContent = media.dataset.mediaTitle;
            lightBoxMediaTitle.tabIndex = 0
            lightBoxMediaTitle.ariaLabel = media.dataset.mediaTitle
        } else if (media.tagName === 'VIDEO') {
            const lightboxMediaVideo = document.createElement('video');
            lightboxMediaVideo.setAttribute("controls", "controls")
            lightboxMediaVideo.setAttribute("src", media.src);
            lightboxMediaVideo.className = 'lightboxMedia lightboxMediaVideo'
            lightBoxMediaContainer.appendChild(lightboxMediaVideo);
            lightboxMediaVideo.ariaLabel = "Video" + media.dataset.mediaTitle
            lightboxMediaVideo.tabIndex = 0
            lightBoxMediaTitle.textContent = media.dataset.mediaTitle;
            lightBoxMediaTitle.tabIndex = 0
            lightBoxMediaTitle.ariaLabel = media.dataset.mediaTitle
            

        }
    }
    
    /**
     * Affichage dasn la lightbox du media précédent 
     */
    function showPreviousMedia() {
        if (currentIndex > 0) {
            displayMedia(currentIndex - 1);
        }else{
            displayMedia(currentIndex = mediaInputs.length - 1)
        }
    }
    
    /**
     * Affichage dasn la lightbox du media suivant
     */
    function showNextMedia() {
        if (currentIndex < mediaInputs.length - 1) {
            displayMedia(currentIndex + 1);
        }else {
            displayMedia(currentIndex = 0)
        }
    }
    
    // Récupérez les boutons précédent et suivant
    const previousButton = document.getElementById('previousButton');
    previousButton.tabIndex = 0
    previousButton.ariaLabel = "Revenir au media précédant "
    const nextButton = document.getElementById('nextButton');
    nextButton.tabIndex = 0
    nextButton.ariaLabel = "Passer au media suivant"
    
    // Ajoutez des gestionnaires d'événements aux boutons
    previousButton.addEventListener('click', showPreviousMedia);
    nextButton.addEventListener('click', showNextMedia);
    window.addEventListener(
        "keydown",
        (event) => {
          if (event.defaultPrevented) {
            return; 
          }
      
          switch (event.key) {
            
            case "ArrowLeft":
              showPreviousMedia()
              break;
            case "ArrowRight":
              showNextMedia()
              break;
            case "Escape":
                closeLightBox()
            break;
          }})
    
///////////////////////////////////////////////////////////////////////////////////////

    