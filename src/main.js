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

getTrendingMoviesPreview();

