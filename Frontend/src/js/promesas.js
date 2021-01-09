const { Button } = require("bootstrap")

const setText = data => {
    myContent.textContent = data
}

const getData = () => {
    return new Promise((resolve, reject) =>{
        setText('Solicitando informacion')
        setTimeout(() => {
            resolve(true)
        }, 2000)   
    })
}

const showData = () => {
    return new Promise((resolve, reject) =>{
        setText('Esperando a mostrar la informacion')
        setTimeout(()=> {
            resolve({name: 'Carol'})
        }, 2000)
    })
    
}

btn.addEventListener('click', () => {
    getData()
    .then(autorizado => {
        if (autorizado){
            return showData()           
        }
    }).then(user => {
        setText(user.name)
    })
})