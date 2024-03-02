function photographerTemplate(data) {
    const { name, portrait, city, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const localisation = document.createElement( 'p' );
        localisation.textContent = city ;
        const description = document.createElement( 'p' );
        description.textContent = tagline ;
        const prices = document.createElement('p');
        prices.textContent = price;
        

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(localisation)
        article.appendChild(description)
        return (article);
    }
    return { name, picture, city, tagline, price, getUserCardDOM }
}