const moiveAPI='http://localhost:3000/films'
const movieDetails=document.getElementById('showing')

fetch(moiveAPI)
    .then(res => res.json())
    .then(renderMoives)

function renderMoives(moives) {
    moives.forEach(renderMoivesDetail)
}
function renderMoivesDetail(movies) {
    const moviePic=movieDetails.queryselector('.poster')
    moviePic.src=movies.poster
    moviePic.alt=movies.title
    movieDetails.queryselector('.runtime').textContent=movies.runtime
    movieDetails.queryselector('.showtime').textContent=movies.showtime
    //capacity - tickets_sold = availableTickets
}