async function getEntities() {
    const response = await fetch('/api/deportes');
    const data = await response.json();
    return data
}

function fillEntities() {
    localStorage.setItem('item','hola')
    getEntities().then(data => {
        console.log(data.results.bindings);
        const ulEntities = document.getElementById("entities");
        //const item = data.results.bindings [0];
        //localStorage.setItem(item.deporteLabel.value, JSON.stringify(item))
        data.results.bindings.forEach(entity => {
          const liEntity = document.createElement('li');
          const imageEntity = document.createElement("img");
          const deporteLabel = document.createTextNode(entity.deporteLabel.value);
          liEntity.appendChild(deporteLabel);
          imageEntity.setAttribute("src",entity.deporteImage.value);
          imageEntity.setAttribute("width",'50px');
          imageEntity.setAttribute("height",'50px');
          liEntity.appendChild(imageEntity);
          ulEntities.appendChild(liEntity);
        })
    })
}

function mostrar() {
    const item = localStorage.getItem('item');
    console.log("item",item)
}

function seter() {
    localStorage.setItem('item','hola')
}

function borrar(){
localStorage.removeItem('item')
}