
/**
 * Construction des elements contenent les informations des photographes
 * 
 * @param {*} photographer 
 * @returns 
 */
export function photographerTemplate(photographer) {
    const {name, portrait, city, tagline, price, country, id } = photographer;

    const picture = `assets/photographers/${portrait}`;

    /**
     * Construction des elements de presentation des photographes de la page index
     * 
     * @returns 
     */
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const localisation = document.createElement( 'p' );
        localisation.textContent = city + ', ' + country;
        localisation.className = 'localisation';
        localisation.tabIndex = 0;
        localisation.ariaLabel = "localisation" + city + ', ' + country;

        const description = document.createElement( 'p' );
        description.textContent = tagline ;
        description.className = 'description';
        description.tabIndex = 0;

        const prices = document.createElement('p');
        prices.textContent = price + '€/jour';
        prices.className = 'prices';
        prices.tabIndex = 0;
        prices.ariaLabel = "Tarif" + price + " euros par jour";

        const link = document.createElement( 'a');
        link.setAttribute("href", `http://127.0.0.1:5500/photographer.html?id=${id}`);
        link.setAttribute("aria-label", name)
        link.className = 'photographersUrlLink';

        const imgContainer = document.createElement( 'div' )
        imgContainer.className = 'imgContainer';

        
        link.appendChild(imgContainer);
        imgContainer.appendChild(img);
        article.appendChild(link);
        link.appendChild(h2);
        article.appendChild(localisation);
        article.appendChild(description);
        article.appendChild(prices);
        return (article);
    }

    /**
     * Construction des element de presentation du photographer selectionné pour la page photographe
     */
    function getUserDescriptionDOM() {
        const imgContainer = document.querySelector( ".photograph-header__img");
        const descriptionContainer = document.querySelector(".photograph-header__description");
        const formPhotographerName = document.querySelector(".formPhotographerName");

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.className = 'picture';
        img.setAttribute("aria-label", name)
        img.tabIndex = 0;

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.className = 'name';
        h2.tabIndex = 0;

        const localisation = document.createElement( 'p' );
        localisation.textContent = city + ', ' + country;
        localisation.className = 'localisation';
        localisation.tabIndex = 0;
        localisation.ariaLabel = "localisation" + city + ', ' + country;
        

        const description = document.createElement( 'p' );
        description.textContent = tagline ;
        description.className = 'description';
        description.tabIndex = 0;

        formPhotographerName.textContent=  name;
        
      

         
        
        imgContainer.appendChild(img);
        descriptionContainer.appendChild(h2);
        descriptionContainer.appendChild(localisation);
        descriptionContainer.appendChild(description);
        
    }

    

    return { name, picture, city, country, tagline, price, getUserCardDOM, getUserDescriptionDOM }
}

/**
 * Construction des media affichés sur la page photographe
 * 
 * @param {*} media 
 * @param {*} selectedPhotographers 
 * @returns 
 */
export function mediaTemplate(media, selectedPhotographers) {
    const {name} = selectedPhotographers;
    const { title, image, video, likes, id, date } = media;
    const photographerName = name.split(' ');
    const photographerFirstName = photographerName[0];

    
    

    const imagepicture = `assets/images/sample photos/${photographerFirstName}/${image}`;
    const videopicture = `assets/images/sample photos/${photographerFirstName}/${video}`;

    const mediaSection = document.querySelector(".photographe-media");

    const mediaArticle = document.createElement('article');
    mediaArticle.className = 'media';
    mediaArticle.dataset.mediaId = id
    mediaArticle.dataset.mediaTitle = title;
    mediaArticle.dataset.mediaDate = date;
    mediaArticle.dataset.mediaLike = likes;
    mediaArticle.tabIndex = -1;

    const mediaDescription = document.createElement('div');
    mediaDescription.className = 'mediaDescription';
    mediaDescription.tabIndex = 0
    mediaDescription.ariaLabel = "Nom de l'oeuvre: " + title + " Nombre de like: " + likes;

    const mediaTitle = document.createElement('p');
    mediaTitle.className = 'mediaTitle';
    mediaTitle.textContent = title;

    const mediaLikeScore = document.createElement('p');
    mediaLikeScore.className = 'mediaLikeScore';
    mediaLikeScore.textContent = likes

    const heartIcon  = document.createElement('i');
    heartIcon.className = 'fa-solid fa-heart';
    
    
    mediaArticle.tabIndex = 0;

    let liked = false;
    heartIcon.onclick = function() {
        likeHandler(media, mediaLikeScore, liked);
    };
    

    
    

    mediaDescription.appendChild(mediaTitle);
    mediaDescription.appendChild(mediaLikeScore);
    mediaDescription.appendChild(heartIcon);
    mediaArticle.appendChild(mediaDescription);
    mediaSection.appendChild(mediaArticle);

   /**
    * construction des elements de type video
    */
   function getVideoMedia() {

        const videoInput = document.createElement('video');
        videoInput.className = 'mediaInput videoInput';
        videoInput.setAttribute("src", videopicture);
        videoInput.onclick = function() {indexOfMedia()};
        videoInput.dataset.mediaId = id;
        videoInput.dataset.mediaTitle = title;
        videoInput.dataset.mediaDate = date;
        videoInput.dataset.mediaLike = likes;
        videoInput.tabIndex = 0
        

        const videoIcon  = document.createElement('i');
        videoIcon.className = 'fa-solid fa-video';
        
        videoInput.setAttribute("aria-label", title + "Cliquer pour ouvrire dans une fenetre contextuelle")
        mediaArticle.appendChild(videoInput);
        mediaArticle.appendChild(videoIcon)
    }

    /**
     * Construction des elements de type image
     */
    function getPictureMedia() {
        const pictureInput = document.createElement('img');
        pictureInput.className = 'mediaInput pictureInput';
        pictureInput.setAttribute("src", imagepicture);
        pictureInput.onclick = function() {indexOfMedia()};
        pictureInput.dataset.mediaId = id
        pictureInput.dataset.mediaTitle = title;
        pictureInput.dataset.mediaDate = date;
        pictureInput.dataset.mediaLike = likes;
        pictureInput.tabIndex = 0
        pictureInput.ariaLabel = title + "Cliquer pour ouvrire dans une fenetre contextuelle"
        mediaArticle.appendChild(pictureInput);
    }

    return { title, image, video, likes, getPictureMedia, getVideoMedia }
}

/**
 * Construction de l'element de la page photographe contenant le nombre de like total et le tarif 
 * 
 * @param {*} selectedMedia 
 * @param {*} selectedPhotographers 
 * @returns 
 */
export function getPhotographerScore(selectedMedia, selectedPhotographers){
    
    const {price} = selectedPhotographers

    var sum = 0;
    
    for(var item in selectedMedia){
        sum += (selectedMedia[item].likes)
    }
    


    const likesScoreAndPriceContainer = document.querySelector(".likesScoreAndPrice")
    likesScoreAndPriceContainer.setAttribute("aria-label", sum + "likes pour l'ensemble des photos "   + "tarif de " + price + " euros par jour" )

    const likeScoreContainer = document.createElement('div')
    likeScoreContainer.className = 'likesScoreAndPrice__likeContainer'

    const likeScore = document.createElement('p');
    likeScore.className = 'likesScoreAndPrice__likesScore';
    likeScore.textContent = sum;

    const heartIcon  = document.createElement('i');
    heartIcon.className = 'likesScoreAndPrice__heartIcon fa-solid fa-heart';

    const photographerPrice = document.createElement('p');
    photographerPrice.className = 'likesScoreAndPrice__price';
    photographerPrice.textContent = price + '€/jour';
    
    likeScoreContainer.appendChild(likeScore)
    likeScoreContainer.appendChild(heartIcon)
    likesScoreAndPriceContainer.appendChild(likeScoreContainer)
    likesScoreAndPriceContainer.appendChild(photographerPrice)

    return {price}
}
