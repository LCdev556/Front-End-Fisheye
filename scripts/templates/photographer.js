 export function photographerTemplate(photographer) {
    const { name, portrait, city, tagline, price, country, id } = photographer;

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