function deleteProduct(product) {
  const newCart = [];
  for(let i = 0; i < cart.length; i++){
    if(cart[i].tid != product){
      newCart.push(cart[i]);
    }
  }
  localStorage.setItem('cart', JSON.stringify(newCart));
  cart = newCart;
  location.reload();
}

function deleteTotalProduct() {
  const newCart = [];
  for(let i = 0; i < cart.length; i++){
      newCart.push();
    }
  localStorage.setItem('cart', JSON.stringify(newCart));
  cart = newCart;
  location.reload();
}

 let total = 0;
 let num;

 for(let i = 0;i < cart.length;i++){
   total = (total + cart[i].price);
   console.log(total);
 }

function totalProd(){
  let aux = ``;
      aux += `
      <div id="totalprecio">
        <h4 id="total">TOTAL</h4>
        <h4 id="price2">$${total}</h4> 
      </div>
    `;
  document.getElementById("carta").innerHTML = aux;
};

let cartaux = ``;
    for(let i = 0;i < cart.length; i++){
      cartaux += `
      <div id="carrito" class="table-responsive">
      <table>
        <div id="productos">
            <tr id="tt">
              <td id="tdimage"><img src="${cart[i].image}" id="image"></td>
              <td id="pname"><b><span>${cart[i].name}</span></b></td>
              <td id="price"><b><span>$${cart[i].price}</span></b></td>
              <td><button id="button" onclick='deleteProduct(${JSON.stringify(cart[i].tid)})'>❎</button></td>
            </tr>
        </div>
     </table>
  </div>
    `;
    totalProd();
  };
  document.getElementById("cart").innerHTML = cartaux;
