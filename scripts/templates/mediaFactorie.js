function factoryMedia (media){
    switch (media.type) {
        case 'image' in media:
            mediaTemplate(media).getPictureMedia()
        break;

        case 'video' in media:
            mediaTemplate(media).getVideoMedia()
        break;

    }
}

function mediaTemplate() {

    const { title, image, video, likes } = media;

    const imagepicture = `assets/images/sample photos/${image}`;
    const videopicture = `assets/images/sample photos/${video}`;

    const mediaSection = document.querySelector(".photographe-media");

    const mediaArticle = document.createElement('article');

    const mediaDescription = document.createElement('div');
    description.className = 'mediaDescription';

    const mediaTitle = document.createElement('p');
    mediaTitle.className = 'mediaTitle';
    mediaTitle.textContent = title;

    const mediaLikeScore = document.createElement('p');
    mediaLikeScore.className = 'mediaLikeScore';
    mediaLikeScore.textContent = likes

   /** const heartIcon  = document.createElement('p');
    heartIcon.className = 'heartIcon';
    heartIcon.textContent = <i class="fa-solid fa-heart"></i>;*/ 

    mediaArticle.appendChild(videoInput);
    mediaDescription.appendChild(mediaTitle);
    mediaDescription.appendChild(mediaLikeScore);
    mediaDescription.appendChild(heartIcon);
    mediaArticle.appendChild(mediaDescription);
    mediaSection.appendChild(mediaArticle);

    
    function getVideoMedia() {

        const videoInput = document.createElement('video');
        videoInput.className = 'videoInput';
        videoInput.setAttribute("src", videopicture);

        mediaArticle.appendChild(videoInput);
    }

    function getPictureMedia() {
        
        const pictureInput = document.createElement('img');
        pictureInput.className = 'PictureInput';
        pictureInput.setAttribute("src", imagepicture);

        mediaArticle.appendChild(pictureInput);
    }

    return { title, image, video, likes, getPictureMedia, getVideoMedia }
}
    


