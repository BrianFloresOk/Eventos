window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitle = document.querySelector('#titulo')
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    inputTitle.addEventListener('keydown', (event) => {
        let key = event.key.toLowerCase()
        let estadoSecreto = 0

        switch (true) {
            case inputTitle.value.length === 0 && key === "s":
                estadoSecreto = 1 
                break;
            case inputTitle.value.length === 1 && key === "e":
                estadoSecreto = 2 
                break;
            case inputTitle.value.length === 2 && key === "c":
                estadoSecreto = 3 
                break;
            case inputTitle.value.length === 3 && key === "r":
                estadoSecreto = 4 
                break;
            case inputTitle.value.length === 4 && key === "e":
                estadoSecreto = 5 
                break;
            case inputTitle.value.length === 5 && key === "t":
                estadoSecreto = 6 
                break;
            case inputTitle.value.length === 6 && key === "o":
                estadoSecreto = 0
                alert("SECRETO MÁGICO")
                break;
            default:
                estadoSecreto = 0
                break;
        }

    })

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = "#e91b3f"
    })

    titulo.addEventListener('mouseout', () => {
        titulo.style.color = "initial"
    })

}