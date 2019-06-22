
function renderMovies(movieArray){
    var movieHTML = movieArray.map(function(currentMovie){
        console.log(currentMovie)
    return `<div class="card movie m-1
    " style="width: 18rem;
    id="${currentMovie.imdbID}info">
    <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
    <div class="card-body movie-title">${currentMovie.Title}
    <p>${currentMovie.Year}</p></div>
    <button onclick="saveToWatchList('${currentMovie.imdbID}')">Add</button>
    </div>`
    })
    return `${movieHTML.join('')}`
}

function saveToWatchList(imdbID){
    
    let movie = movieData.find(currentMovie=>{
        return currentMovie.imdbID == imdbID
    });
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null){
        watchlist = []
    };
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);

}

document.addEventListener('DOMContentLoaded',function(){
    var content = document.getElementById('movies-container');

    document.getElementById('myForm').addEventListener('submit', function(e){
        e.preventDefault();
    
    let searchString = document.getElementById('search-bar').value
    let urlEncodedSearchString = encodeURIComponent(searchString);

    axios.get(`http://www.omdbapi.com/?apikey=3430a78&s=${urlEncodedSearchString}`).then(
        function(response){
            console.log(response.data.Search)
            var movieHTML = renderMovies(response.data.Search);
            document.getElementById('movies-container').innerHTML = movieHTML;
                    }
    )





    })

})

