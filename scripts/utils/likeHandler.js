/**
 * Fonction pour gérer le clic sur l'icône de cœur
 * @param  media 
 * @param  likesElement 
 */
function likeHandler(media, likesElement) {
    let currentLikes = parseInt(likesElement.textContent);
    // Fonction pour gérer le clic sur l'icône de cœur
   let totalLikeScore = document.querySelector(".likesScoreAndPrice__likesScore")
    if (!media.liked) {
        // On incrémente le nombre de likes
        currentLikes++;
        //On modifie en consequance le nombre de like total
        totalLikeScore.textContent= parseInt(totalLikeScore.textContent) + 1; 
        // On marque le média comme aimé
        media.liked = true;
    } else {
        // Sinon, si l'utilisateur a déjà aimé ce média
        // On décrémente le nombre de likes
        currentLikes--;
        //On modifie en consequance le nobre de like total
        totalLikeScore.textContent= parseInt(totalLikeScore.textContent) - 1; 
        // On marque le média comme non aimé
        media.liked = false;
    }

    // On met à jour le contenu du paragraphe avec le nouveau nombre de likes
    likesElement.textContent = currentLikes;
}
