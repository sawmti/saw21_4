//const { get } = require("express/lib/response");

async function getEntities() {
    const response = await fetch('/api/entities');
    const data = await response.json();
    return data
}

async function inputEntities(body) {
    const response = await fetch('/api/entities/:id',body);
    const data = await response.json();
    return data
}

function fillEntities() {
    //alert("hola");
    getEntities().then(data => {
        localStorage.setItem('datos',JSON.stringify(data));
        pos=1;
        data.results.bindings.forEach(element => {
        
          row = document.createElement('tr');
          row2 = document.createElement('th');
          row2.innerHTML = pos;
          pos = pos+1;
          row3 = document.createElement('td');
          row3.innerHTML = element.deporte.value;
          row4 = document.createElement('td');
          
          row5 = document.createElement('td');
          img = document.createElement('img');
          img.src =element.deporteImage.value;
          img.style.width = "200px";
          img.style.height = "100px";
          
          row5.appendChild(img);
          row6 = document.createElement('td');
          row6.innerHTML = element.deporteLabel.value;
         row.appendChild(row2);
         row.appendChild(row3);
         row.appendChild(row5);
         row.appendChild(row6);
          document.getElementById("bodyy").appendChild(row);

         tdbtn = document.createElement('td');
         btnadd = document.createElement("button");
         btnadd.type = "button";
         btnadd.classList.add("btn", "btn-primary");
         btnadd.onclick = function(){addEntities(this.id)};   
         btnadd.id=element.deporte.value;
         btniadd = document.createElement('i');
         btniadd.classList.add("far", "fa-eye");
         btniadd.innerHTML = "AGREGAR";
         btnadd.appendChild(btniadd);

         btndelete = document.createElement("button");
         btndelete.type = "button";
         btndelete.classList.add("btn", "btn-primary");
         btndelete.onclick = function(){deleteEntities(this.id)}; 
         btndelete.id=element.deporte.value;
         btnidelete = document.createElement('i');
         btnidelete.classList.add("far","fa-trash-alt"); 
         btnidelete.innerHTML ="ELIMINAR";
         btndelete.appendChild(btnidelete);

         tdbtn.appendChild(btnadd);
         tdbtn.appendChild(btndelete);
         row.appendChild(tdbtn);
     
        });     
    })
}
function deleteEntities(param){
    elementli = document.getElementById(param+"li");
    elementli.remove();
}

function addEntities(param){
    const id = param;
    

    const item = JSON.parse(localStorage.getItem('datos'));

    item.results.bindings.forEach(element=>{
     
      if (element.deporte.value == id) {
          if(document.getElementById(id+'li') != null){
             if(document.getElementById(id+'li').id == id+"li"){
                alert("Entidad ya agregada!");
             }else{
                listitem = document.getElementById("additem");
            
                liitem = document.createElement('li');
                liitem.classList.add("span4");
                liitem.id=element.deporte.value+"li";
                imgitem = document.createElement('img');
                imgitem.src = element.deporteImage.value;
                imgitem.classList.add("rounded");
                imgitem.style.width = "100px";
                imgitem.style.height ="100px";
                liitem.appendChild(imgitem);
    
                txtitem = document.createElement('div');
                txtitem.classList.add("txt_info");
                pitem = document.createElement('p');
                pitem.innerHTML= element.deporteLabel.value;

                btnedit = document.createElement('button');
            btnedit.innerHTML = "EDITAR";
            btnedit.id = "myBtn";
            btnedit.onclick = function(){editEntities(this.id)}; 
    
                txtitem.appendChild(pitem);
                liitem.appendChild(txtitem);
                liitem.appendChild(btnedit);
    
                listitem.appendChild(liitem);

                
                return;
             }
          }else{
            listitem = document.getElementById("additem");
            
            liitem = document.createElement('li');
            liitem.classList.add("span4");
            liitem.id=element.deporte.value+"li";
            imgitem = document.createElement('img');
            imgitem.src = element.deporteImage.value;
            imgitem.classList.add("rounded");
            imgitem.style.width = "100px";
            imgitem.style.height ="100px";
            liitem.appendChild(imgitem);

            txtitem = document.createElement('div');
            txtitem.classList.add("txt_info");
            pitem = document.createElement('p');
            pitem.innerHTML= element.deporteLabel.value;

            btnedit = document.createElement('button');
        btnedit.innerHTML = "EDITAR";
        btnedit.id = "myBtn";
        btnedit.onclick = function(){editEntities(this.id)}; 

            txtitem.appendChild(pitem);
            liitem.appendChild(txtitem);
            liitem.appendChild(btnedit);

            listitem.appendChild(liitem);
    
            return;
          }
        
            
        } 
    });

}

function editEntities(param){
//Crear Modal
alert("FALTA IMPLEMENTAR");
/*modal1 = document.createElement('div');
modal1.id = "myModal";
modal1.classList.add("modal");

modalcontent = document.createElement('div');
modalcontent.classList.add("modal-content"); 

spanmodal = document.createElement('span');
spanmodal.classList.add("close"); 
spanmodal.innerHTML = "&times";

pmodal = document.createElement('p');

inputtxt = document.createElement('input');
inputtxt.type = "text";

btntxt = document.createElement('button');
btntxt.onclick = function(){editCode()}; 
btntxt.innerHTML = "EDITAR CODIGO";
container = document.getElementById('container');

modalcontent.appendChild(spanmodal);
modalcontent.appendChild(pmodal);
modalcontent.appendChild(inputtxt);
modalcontent.appendChild(btntxt);

modal1.appendChild(modalcontent);

container.appendChild(modal1);
 // Get the modal
var modal = document.getElementById("myModal");
 // Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}*/

}



                    