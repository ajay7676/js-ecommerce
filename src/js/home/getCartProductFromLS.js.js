 const getupdateValue = document.querySelector(".add-to-cart-button i")
export const getCartProductFromLS = () => {
   
    let cartProduts = localStorage.getItem("product-cart");
     if(!cartProduts){
        return [];
     }
     cartProduts = JSON.parse(cartProduts);
        console.log(cartProduts)
        getupdateValue.innerText = cartProduts.length

      return  cartProduts;
    
}