document.addEventListener('DOMContentLoaded', () => {

    
 getBeerData()
 
})



function getBeerData() {
       
    fetch('https://api.punkapi.com/v2/beers/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            displayBeerLists(data)
            displayDescriptions(data[0])
            
        })
        .catch(error => console.log(error))
}
function displayBeerLists (beers) {
    const beerLists = document.getElementById('beer-lists')
    beers.forEach(beer => {
        const li = document.createElement('li')
        li.innerText = beer.name
        beerLists.appendChild(li)
        li.addEventListener('click', () => {
            displayDescriptions(beer)
        })
        
    })
}

function displayDescriptions (beer) {
    const description = document.querySelector('.description')
    const image = document.getElementById('beer-image')
    const name = document.getElementById('beer-title')
    const details = document.getElementById('details')
    image.src = beer.image_url
    name.innerText = beer.name
    details.innerText = beer.description
    const like = document.getElementById('like')
    like.src = './empty.png'
    let isRed = false 
    like.addEventListener('click', () => {
        if (! isRed) {
            like.src = './red.png'
            isRed = true
        } else{
            like.src = './empty.png'
            isRed = false
        }

            localStorage.setItem('template', document.getElementById('allComments').innerHTML);
    
        
    })
}


