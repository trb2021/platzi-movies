const API_URL = `https://test.cu/3?api_key=${API_KEY}`;

async function getTrendingMoviesPreview(){
    //Conexion a la API para obtener las peliculas en tendencia
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();

    const movies = data.results;
    
    //Iteracion en el arreglo de peliculas en tendencia para crear los elementos html
    const trendingPreviewMovieList = document.querySelector('.trendingPreview-movieList');
    trendingPreviewMovieList.innerHTML = "";
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        movieContainer.appendChild(movieImg);
        trendingPreviewMovieList.appendChild(movieContainer);
    });
}

async function getCategoriesPreview(){
    
    //Conexion a la API para obtener la lista de categorias
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    const data = await res.json();

    const categories = data.genres;

    const categoriesPreviewList = document.querySelector('.categoriesPreview-list');
    categoriesPreviewList.innerHTML = "";
    
    
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

getTrendingMoviesPreview();
getCategoriesPreview();

