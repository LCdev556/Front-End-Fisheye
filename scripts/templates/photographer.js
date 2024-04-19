

export function photographerTemplate(photographer) {
    const {name, portrait, city, tagline, price, country, id } = photographer;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const localisation = document.createElement( 'p' );
        localisation.textContent = city + ', ' + country;
        localisation.className = 'localisation';

        const description = document.createElement( 'p' );
        description.textContent = tagline ;
        description.className = 'description';

        const prices = document.createElement('p');
        prices.textContent = price + '€/jour';
        prices.className = 'prices';

        const link = document.createElement( 'a');
        link.setAttribute("href", `http://127.0.0.1:5500/photographer.html?id=${id}`);
        link.className = 'photographersUrlLink';

        const imgContainer = document.createElement( 'div' )
        imgContainer.className = 'imgContainer';

        
        link.appendChild(imgContainer);
        imgContainer.appendChild(img);
        article.appendChild(link);
        article.appendChild(h2);
        article.appendChild(localisation);
        article.appendChild(description);
        article.appendChild(prices);
        return (article);
    }

    function getUserDescriptionDOM() {
        const imgContainer = document.querySelector( ".photograph-header__img");
        const descriptionContainer = document.querySelector(".photograph-header__description");
        const formPhotographerName = document.querySelector(".formPhotographerName");

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.className = 'picture';

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.className = 'name';

        const localisation = document.createElement( 'p' );
        localisation.textContent = city + ', ' + country;
        localisation.className = 'localisation';

        const description = document.createElement( 'p' );
        description.textContent = tagline ;
        description.className = 'description';

        formPhotographerName.textContent= 'Contactez-moi ' + name

         
        
        imgContainer.appendChild(img);
        descriptionContainer.appendChild(h2);
        descriptionContainer.appendChild(localisation);
        descriptionContainer.appendChild(description);
        //return (article);
    }

    

    return { name, picture, city, country, tagline, price, getUserCardDOM, getUserDescriptionDOM }
}

export function mediaTemplate(media, selectedPhotographers) {
    const {name} = selectedPhotographers;
    const { title, image, video, likes } = media;
    const photographerName = name.split(' ');
    const photographerFirstName = photographerName[0];

    
    

    const imagepicture = `assets/images/sample photos/${photographerFirstName}/${image}`;
    const videopicture = `assets/images/sample photos/${photographerFirstName}/${video}`;

    const mediaSection = document.querySelector(".photographe-media");

    const mediaArticle = document.createElement('article');
    mediaArticle.className = 'media';

    const mediaDescription = document.createElement('div');
    mediaDescription.className = 'mediaDescription';

    const mediaTitle = document.createElement('p');
    mediaTitle.className = 'mediaTitle';
    mediaTitle.textContent = title;

    const mediaLikeScore = document.createElement('p');
    mediaLikeScore.className = 'mediaLikeScore';
    mediaLikeScore.textContent = likes

    const heartIcon  = document.createElement('i');
    heartIcon.className = /**'heartIcon '+*/'fa-solid fa-heart';
    

    mediaDescription.appendChild(mediaTitle);
    mediaDescription.appendChild(mediaLikeScore);
    mediaDescription.appendChild(heartIcon);
    mediaArticle.appendChild(mediaDescription);
    mediaSection.appendChild(mediaArticle);

    
   function getVideoMedia() {

        const videoInput = document.createElement('video');
        videoInput.className = 'mediaInput videoInput';
        videoInput.setAttribute("src", videopicture);
        videoInput.onclick = function() {
            displayLightBox(this);};
        //videoInput.setAttribute("onclick",`displayLightBox(this)`)
//'${videopicture}'
        mediaArticle.appendChild(videoInput);
    }

    function getPictureMedia() {
        const pictureInput = document.createElement('img');
        pictureInput.className = 'mediaInput pictureInput';
        pictureInput.setAttribute("src", imagepicture);
        pictureInput.onclick = function() {
            displayLightBox(this);}
       // pictureInput.setAttribute('onclick',`displayLightBox(this)`);
//'${imagepicture}'
        mediaArticle.appendChild(pictureInput);
    }

    return { title, image, video, likes, getPictureMedia, getVideoMedia }
}

export function getPhotographerScore(selectedMedia, selectedPhotographers){
    
    const {price} = selectedPhotographers

    var sum = 0;
    
    for(var item in selectedMedia){
        sum += (selectedMedia[item].likes)
    }
    console.log(sum)


    const likesScoreAndPriceContainer = document.querySelector(".likesScoreAndPrice")

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
