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

  
function buscarCafe(product){
    console.log(product);
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
        document.getElementById("pbuscado").innerHTML = pe;
  }