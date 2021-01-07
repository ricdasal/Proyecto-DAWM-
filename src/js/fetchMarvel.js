
const STATUS_OK = 200
const STATUS_CREATED = 201
const STATUS_NOT_FOUND = 404

const hash = '48c85474dada2a5b396f3dff77ae5dae';
const apikey = '7e232c2d12fa937c5f7f46f40a6e52a1';
const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=doctor&apikey=${apikey}`;

btn.addEventListener('click', () => {
    loadComics()
})

// const loadComics = async () => {
//     const response = await fetch(url)
//     .then(response =>{
//         switch (response.status){
//             case STATUS_OK:
//                 return response.json()    
//             case STATUS_NOT_FOUND:
//                 console.log('No se encontró informacion')
//                 break
//         }
//     })
//     .then(response => {
//         draw(response.data.results)
//     })
//     .catch(error => console.log(error))
// }

// con async await
const loadComics = async () => {
    const response = await fetch(url)
    switch (response.status){
        case STATUS_OK:
            const data = response.json();  
            draw(data.data.results);  
        case STATUS_NOT_FOUND:
            console.log('No se encontró informacion')
            break
    }
    // .catch(error => console.log(error))
}

const draw = data => {
    const container = document.createElement('div')
    data.forEach(comic => {
        const comicHTML = `
        <div>
            <h2>${comic.name}</h2>
            <img src="${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}" alt="$comic.name">
        </div>`
        container.insertAdjacentHTML('beforeend', comicHTML);
    });

    myContent.appendChild(container);
}