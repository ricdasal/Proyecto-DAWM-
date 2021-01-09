const ajax = request => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()
        xhr.open(request.method, request.url, true);
        xhr.addEventListener('load', e => {
            resolve(e.target)
        })
        xhr.send()
    })
}

const showMarvel = async () => {
    const hash = '48c85474dada2a5b396f3dff77ae5dae';
    const apikey = '7e232c2d12fa937c5f7f46f40a6e52a1';
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=doctor&apikey=${apikey}`;
    const r = {method: 'GET', url: url}

    const response = await ajax(r)
    switch (response.status) {
        case 200:
            console.log(JSON.parse(response.responseText))
            draw(JSON.parse(response.responseText).data.results)
            break
        case 400:
            setText('Error de cliente ' + response.status)
            break
        case 401:
            setText('Invalid Hash ' + response.status)
        default:
            setText('Error desconocido ' + response.status)
    }
}

const setText = data => {
    myContent.textContent = data
}

const draw = data =>{
    const fragment = document.createDocumentFragment()
    data.forEach(comic => {
        const container = document.createElement('div')
        const title = document.createElement('h2')
        const image = document.createElement('img')

        title.textContent = comic.name
        image.src = 
        `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`
        
        container.appendChild(title)
        container.appendChild(image)

        fragment.appendChild(container)
    })
    
    myContent.appendChild(fragment)
}

btn.addEventListener('click', e => {showMarvel()});