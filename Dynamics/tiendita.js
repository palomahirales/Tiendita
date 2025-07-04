class Articulos{
    constructor(name,url, precio, dinero){
        this.name = name;
        this.url = url;
        this.precio = precio;
        this.dinero = dinero;
    }
    getDn(){
        return this.dinero;
    }
    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
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

const articulo = document.getElementsByClassName("contenedorproductos")[0];
let articulos = [new Articulos("Cien años de soledad","./Statics/Images/cienañosdesoledad.jpg" , "$250",250),
    new Articulos("After Man","./Statics/Images/manafterman.jpg","$865",865),
    new Articulos("Harry Potter y el Prisionero de Azkaban","./Statics/Images/harrypotter.jpg", "$299",299),
    new Articulos("El visitante", "./Statics/Images/elvisitante.jpg", "$340",340),
    new Articulos("No Longer Human","./Statics/Images/nolongerhuman.jpg","$400",400),
    new Articulos("La caída de la Casa Usher","./Statics/Images/lacaidadelacasausher.jpg","$250",250),
    new Articulos("El Pequeño Cerdo Capitalista", "./Statics/Images/pequeñocerdocapitalista.jpg","310",310),
    new Articulos("Veinte mil leguas de viaje submarino", "./Statics/Images/veintemilleguasdeviajesubmarino.jpg","$180",180),
    new Articulos("Los tres cerditos","./Statics/Images/lostrescerditos.jpg", "$25",25)];



let html = '';
for(let i=0; i<articulos.length; i++){
    html+= `<div class=producto ><h2>${articulos[i].getName()}</h2><img src="${articulos[i].getImg()}"><p>${articulos[i].getPrecio()}</p><button id="${i+1}">Agregar al carrito</button></div>`
    articulos[i].setId((i+1));
    console.log(articulos[i].getId())
}

articulo.innerHTML = html;

let t = 0
let c =1;
let total = document.getElementById("total");
let lista = document.getElementById("listacarrito");

for(let i = 0;i<articulos.length;i++){
    let btn = document.getElementById((i+1).toString());
    
    btn.addEventListener("click",()=>{
        t+= articulos[i].getDn();
        total.textContent = "$"+t.toString();

        lista.innerHTML += `<ul>X${c} ${articulos[i].getName()}</ul>`
        c++;
    });

}
