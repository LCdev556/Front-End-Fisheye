

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
    
    
    
    let mediaInputs = []

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

        const checkId = (element) => element === clikedMediaId;

        dataIds.findIndex(checkId);

        //const index = dataIds.indexOf(event.currentTarget);
        //console.log(index);
        displayMedia(dataIds.findIndex(checkId)); // Appel de la fonction displayMedia avec l'index du média cliqué
        openLightBox(); // Ouvrir la lightbox lorsque le média est cliqué
        console.log(dataIds.findIndex(checkId))
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
        const lightBoxMediaTitle = document.querySelector('.lightBoxMediaTitle');
        lightBoxMediaContainer.innerHTML = ""; // Vide le contenu précédent de la lightbox
        lightBoxMediaTitle.innerHTML = "";

    
        if (media.tagName === 'IMG') {
            const lightboxMediaImg = document.createElement('img');
            lightboxMediaImg.className = 'lightboxMedia lightboxMediaImg';
            lightboxMediaImg.setAttribute("src", media.src);
            lightBoxMediaContainer.appendChild(lightboxMediaImg);
            lightBoxMediaTitle.textContent = media.dataset.mediaTitle;
        } else if (media.tagName === 'VIDEO') {
            const lightboxMediaVideo = document.createElement('video');
            lightboxMediaVideo.setAttribute("src", media.src);
            lightboxMediaVideo.className = 'lightboxMedia lightboxMediaVideo'
            lightBoxMediaContainer.appendChild(lightboxMediaVideo);
            lightBoxMediaTitle.textContent = media.dataset.mediaTitle;
            console.log(media.dataset.mediaTitle)

        }
    }
    
    // Fonction pour afficher le média précédent dans la lightbox
    function showPreviousMedia() {
        if (currentIndex > 0) {
            displayMedia(currentIndex - 1);
        }else{
            displayMedia(currentIndex = mediaInputs.length - 1)
        }
    }
    
    // Fonction pour afficher le média suivant dans la lightbox
    function showNextMedia() {
        if (currentIndex < mediaInputs.length - 1) {
            displayMedia(currentIndex + 1);
        }else {
            displayMedia(currentIndex = 0)
        }
    }
    
    // Récupérez les boutons précédent et suivant
    const previousButton = document.getElementById('previousButton');
    const nextButton = document.getElementById('nextButton');
    
    // Ajoutez des gestionnaires d'événements aux boutons
    previousButton.addEventListener('click', showPreviousMedia);
    nextButton.addEventListener('click', showNextMedia);
    window.addEventListener(
        "keydown",
        (event) => {
          if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
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

    