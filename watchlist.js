var watchlistJSON = localStorage.getItem('watchlist');
var watchlist = JSON.parse(watchlistJSON);


function renderwatchlist(watchlist){
   let watchlistMovieHTML = watchlist.map(function(movie){
       return `<div class="card movie m-1
       " style="width: 18rem;
       ">
       <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
       <div class="card-body movie-title">${movie.Title}
       <p>${movie.Year}</p></div>
       </div>`
   })
   return `${watchlistMovieHTML.join('')}`

}

document.addEventListener('DOMContentLoaded',function(){
    var content = document.getElementById('movies-container');

    
        content.innerHTML = renderwatchlist(watchlist);
    })

