const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json;chartset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    }
});

async function getTrendingMoviesPreview(){
    //Conexion a la API para obtener las peliculas en tendencia
    const {data} = await api(`/trending/movie/day`);
    const movies = data.results;
    
    //Limpieza del elemento contenedor de la sección
    trendingMoviesPreviewList.innerHTML = "";
    
    //Iteración sobre el array de datos devueltos para renderizar nuevos elementos
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
    });
}

async function getCategoriesPreview(){
    
    //Conexion a la API para obtener la lista de categorias
    const {data} = await api(`/genre/movie/list`);
    const categories = data.genres;

    //Limpieza del elemento contenedor de la sección
    categoriesPreviewList.innerHTML = "";
    
    //Iteración sobre el array de datos devueltos para renderizar nuevos elementos
    categories.forEach(category =>{
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', `id${category.id}`);
        categoryTitle.innerText = category.name;

        categoryContainer.appendChild(categoryTitle); 
        categoriesPreviewList.appendChild(categoryContainer);
    });

}


