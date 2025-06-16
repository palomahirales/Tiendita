class Articulos{
    constructor(name,url, precio, dinero){
        this.name = name;
        this.url = url;
        this.precio = precio;
        this.dinero = dinero;
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
let articulos = [new Articulos("Cien años de soledad","./Statics/Images/cienañosdesoledad.jpg" , "$250"),
    new Articulos("After Man","./Statics/Images/manafterman.jpg","$865"),
    new Articulos("Harry Potter y el Prisionero de Azkaban","./Statics/Images/harrypotter.jpg", "$299"),
    new Articulos("El visitante", "./Statics/Images/elvisitante.jpg", "$340"),
    new Articulos("No Longer Human","./Statics/Images/nolongerhuman.jpg","$400"),
    new Articulos("La caída de la Casa Usher","./Statics/Images/lacaidadelacasausher.jpg","$250"),
    new Articulos("El Pequeño Cerdo Capitalista", "./Statics/Images/pequeñocerdocapitalista.jpg","310"),
    new Articulos("Veinte mil leguas de viaje submarino", "./Statics/Images/veintemilleguasdeviajesubmarino.jpg","$180"),
    new Articulos("Los tres cerditos","./Statics/Images/lostrescerditos.jpg", "$25")];



let html = '';
for(let i=0; i<articulos.length; i++){
    html+= `<div class=producto ><h2>${articulos[i].getName()}</h2><img src="${articulos[i].getImg()}"><p>${articulos[i].getPrecio()}<\p><button id="${i+1}">"Agregar al carrito"</button></div>`
    articulos[i].setId((i+1));
    console.log(articulos[i].getId())
}

articulo.innerHTML = html;

let t = 0
let total = document.getElementById("total");
let lista = document.getElementById("listacarrito");

let addBtn1 = document.getElementById("1")
let addBtn2 = document.getElementById("2")
let addBtn3 = document.getElementById("3")
let addBtn4 = document.getElementById("4")
let addBtn5 = document.getElementById("5")
let addBtn6 = document.getElementById("6")
let addBtn7 = document.getElementById("7")
let addBtn8 = document.getElementById("8")
let addBtn9 = document.getElementById("9")

let c =1;
addBtn1.addEventListener("click",()=>{
    t += 250
    
    lista.textContent = "X"+c +"Cien años de soledad"
    total.textContent = String(t)
    c++;
});

addBtn2.addEventListener("click",()=>{
    t += 865
    total.textContent = String(t)
});

addBtn3.addEventListener("click",()=>{
    t += 299
    total.textContent = String(t)
});

addBtn4.addEventListener("click",()=>{
    t += 340
    total.textContent = String(t)
});

addBtn5.addEventListener("click",()=>{
    t += 400
    total.textContent = String(t)
});

addBtn6.addEventListener("click",()=>{
    t += 250
    total.textContent = String(t)
});

addBtn7.addEventListener("click",()=>{
    t += 310
    total.textContent = String(t)
});

addBtn8.addEventListener("click",()=>{
    t += 180
    total.textContent = String(t)
});

addBtn9.addEventListener("click",()=>{
    t += 25
    total.textContent = String(t)
});


