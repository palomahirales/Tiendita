class Articulos{
    constructor(name,url, precio){
        this.name = name;
        this.url = url;
        this.precio = precio;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setImg(url){
        this.url = url;
    }
    getImg(){
        return this.url;
    }
    setPrecio(precio){
        this.precio = precio;
    }
    getPrecio(){
        return this.precio;
    }
}

const articulo = document.getElementsByClassName("articulo")[0];
let articulos = [new Articulos("Cien años de soledad","./Statics/Images/cienañosdesoledad.jpg" , "$250"),new Articulos("")];



let html = '';
for(let i=0; i<articulos.length; i++){
    html+= `<div class=articulo id="${i+1}"><h2>${articulos[i].getName()}</h2><img src="${articulos[i].getImg()}">${articulos[i].getPrecio()}</div>`
    console.log(html)
}

articulo.innerHTML = html;

addBtn = document.getElementById();

