async function getEntities() {
    const response = await fetch('/api/deportes');
    const data = await response.json();
    return data
}

function fillEntities() {
    localStorage.setItem('item','hola')
    getEntities().then(data => {
        console.log(data.results.bindings);
        // Obtener la referencia del elemento body
        const body = document.getElementsByTagName("body")[0];
         // Crea un elemento <table> y un elemento <tbody>
        const tabla   = document.createElement("table");
        const tblBody = document.createElement("tbody");
        const titulo = document.createElement("th")
        const ulEntities = document.getElementById("entities");
        //const item = data.results.bindings [0];
        //localStorage.setItem(item.deporteLabel.value, JSON.stringify(item))
        data.results.bindings.forEach(entity => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const hilera = document.createElement("tr");
        const celda = document.createElement("td");
        const textoCelda = document.createTextNode(entity.deporteLabel.value);
          //var textoCelda1 = document.createTextNode(entity.deporteDescription.value);
          //const liEntity = document.createElement('li');
          const imageEntity = document.createElement("img");
          //const deporteLabel = document.createTextNode(entity.deporteLabel.value);
          //liEntity.appendChild(deporteLabel);
          imageEntity.setAttribute("src",entity.deporteImage.value);
          imageEntity.setAttribute("width",'100px');
          imageEntity.setAttribute("height",'100px');
          //liEntity.appendChild(imageEntity);
          //ulEntities.appendChild(liEntity);
          //celda.appendChild(textoCelda1);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
          hilera.appendChild(imageEntity);
          hilera.appendChild(checkbox);
          tblBody.appendChild(hilera);
        })
        tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
    })
}

function mostrar() {
    const item = localStorage.getItem('item');
    console.log("item",item)
}


function borrar(){
localStorage.removeItem('item');
}