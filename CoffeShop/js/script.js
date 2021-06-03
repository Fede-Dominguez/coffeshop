let cart = [];

class Coffe {
    constructor(coffeName,coffeDescription,coffePrice, coffeStock, coffeImage){
      this.name = coffeName;
      this.description = coffeDescription;
      this.price = coffePrice;
      this.stock = coffeStock;
      this.image = coffeImage;
      this.tid = NaN;
    }
  };

  
let dataBase = [];

dataBase.push(new Coffe('Brasil','Cafe molido Brasil de primera calidad - MARTINEZ',830,12,'https://http2.mlstatic.com/D_NQ_NP_642623-MLA41161817609_032020-O.jpg'));
dataBase.push(new Coffe('Colombia','Cafe molido Colombia de primera calidad - Juan Valdez',1200,20,'https://http2.mlstatic.com/D_NQ_NP_891351-MLA44700774081_012021-O.webp'));
dataBase.push(new Coffe('Moka','Cafe molido Moka de primera calidad - MARTINEZ',860,2,'https://cafemartinez.com/images/cafe_moka.png'));
dataBase.push(new Coffe('Tostado Natural','Cafe tostado natural Brasil = Montibello',780,5,'https://http2.mlstatic.com/D_NQ_NP_760195-MLA44127909371_112020-O.webp'));
dataBase.push(new Coffe('Tostado Natural','Cafe tostado natural Colombia = Montibello',1280,6,'https://http2.mlstatic.com/D_NQ_NP_612474-MLA44064271419_112020-O.webp'));
dataBase.push(new Coffe('Capsula Compatibles Nespresso','Cortado - Italian Coffe',1530,12,'https://m.media-amazon.com/images/I/41PnFbDYANL.jpg'));
dataBase.push(new Coffe('Granos de Café','Cafe 100% Tostado Espresso - Bonafide',930,20,'https://http2.mlstatic.com/D_NQ_NP_783875-MLA43553489901_092020-O.webp'));
dataBase.push(new Coffe('Verona','Cafe molido Verona "Dark Rost" - STARBUCKS',910,24,'https://http2.mlstatic.com/D_NQ_NP_735730-MLA43932266150_102020-O.webp'));
dataBase.push(new Coffe('Qualitá Rossa','Café Italiano "Italy favorite coffe" - Sentite Natural',1530,12,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BufM-lrJcA1PUtBAoBtNAleiGsmzrUx2WcVHndenWAoi-jpdSFrCTTAGl6ZP_0wZbc0&usqp=CAU'));
dataBase.push({name:'Bonafide SUPERIOR',description:'Cafe calidad superior - Bonafide',price:619,stock:0,image:'https://http2.mlstatic.com/D_NQ_NP_910298-MLA43610165066_092020-O.webp'});

if (localStorage.getItem('cart') != null) {
     let JSONCart = JSON.parse(localStorage.getItem('cart'));
     cart = JSONCart;
   }

function addCart(product) {
      product.tid = cart.length;
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }

function encontrarEnter(){
    if(event.which == 13 || event.keyCode == 13){
        verBuscador();
      }
    };

function verBuscador(){
  let bool = false;
  let aux;
  for(let i = 0;i < dataBase.length;i++){
  if($('#search').val() === dataBase[i].name){
      aux = dataBase[i];
      bool = true;
    };
    if(bool == true){
      buscarCafe(aux);
     };
  };
  if(bool == false){
    aux = $('#search').val();
    alert(aux + ' no se encuentra disponible');
  };
};

let aux = ``;
  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].stock > 0) {
      aux += `
      <div class="card">
      <center><b><span class="price">$${dataBase[i].price}</span></b></center>
        <center><img src="${dataBase[i].image}" id="image1"></center>
          <div class="card-info">
            <h4 class="has-text-black has-text-centered has-text-weight-bold">${dataBase[i].name}</h4>
            <p class="has-text-centered">${dataBase[i].description}</p>
            <div class="card-buttons">
            <button class="btn btn--mini-rounded zmdi zmdi-shopping-cart" 
            onclick='addCart(${JSON.stringify(dataBase[i])})'></button>
          </div>
          </div>
        </div>          
      `;
    } 
  }
document.getElementById("productos").innerHTML = aux;

  



function buscarCafe(product){
  let pe = ``;
      pe += `
      <a href="index.html?"></a>
      <div class="card">
      <center><b><span class="price">$${product.price}</span></b></center>
        <center><img src="${product.image}" id="image1"></center>
          <div class="card-info">
            <h4 class="has-text-black has-text-centered has-text-weight-bold">${product.name}</h4>
            <p class="has-text-centered">${product.description}</p>
            <div class="card-buttons">
            <button class="btn btn--mini-rounded zmdi zmdi-shopping-cart" 
            onclick='addCart(${JSON.stringify(product)})'></button>
          </div>
          </div>
        </div>          
      `;
      document.getElementById("productos").innerHTML = pe;
}