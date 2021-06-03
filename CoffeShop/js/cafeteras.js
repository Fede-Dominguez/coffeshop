let dataBase2 = [];

$.get('../js/database.json', function(data, status){ 
  for(let i = 0;i < data.length;i++){
  dataBase2.push(data[i]);
  }
  caft1();
});

function encontrarEnter2(){
  if(event.which == 13 || event.keyCode == 13){
      verBuscador2();
    }
  };

function verBuscador2(){
    let bool = false;
    let aux;
    for(let i = 0;i < dataBase2.length;i++){
    if($('#search').val() === dataBase2[i].name){
        aux = dataBase2[i];
        bool = true;
      };
      if(bool == true){
        buscarCafe2(aux);
       };
    };
    if(bool == false){
      aux = $('#search').val();
      alert(aux + ' no se encuentra disponible');
    };
  };

function caft1(){
  let caft = ``;
  for (let i = 0; i < dataBase2.length; i++) {
    if (dataBase2[i].stock > 0) {
      caft += `
      <div class="card">
      <center><b><span class="price">$${dataBase2[i].price}</span></b></center>
        <center><img src="${dataBase2[i].image}" id="image1"></center>
          <div class="card-info">
            <h4 class="has-text-black has-text-centered has-text-weight-bold">${dataBase2[i].name}</h4>
            <p class="has-text-centered">${dataBase2[i].description}</p>
            <div class="card-buttons">
            <button class="btn btn--mini-rounded zmdi zmdi-shopping-cart" 
            onclick='addCart(${JSON.stringify(dataBase2[i])})'></button>
          </div>
          </div>
        </div>          
      `;
     }
  };
  document.getElementById("coffemaker").innerHTML = caft;
}
     
function buscarCafe2(product){
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
      document.getElementById("coffemaker").innerHTML = pe;
}

  