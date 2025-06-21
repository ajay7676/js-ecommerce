import { getCartProductFromLS } from "./getCartProductFromLS.js";

getCartProductFromLS();
export const addToCart = (e, id , stock) => {
    let  arrLocalStorageProduct = getCartProductFromLS();
     console.log(arrLocalStorageProduct)
    const currentCard = document.querySelector(`#card${id}`);
    let productQuantity = Number(currentCard.querySelector(".productQuantity").innerText);
    let productPirce = currentCard.querySelector(".productPrice").innerText;
    let productActualPirce = currentCard.querySelector(".productActualPrice").innerText;
    productPirce = productPirce.replace("₹" , "")
     productPirce = (productPirce * productQuantity).toFixed(2);
      let updatedProducts = {id , productQuantity , productPirce }
       console.log("Buuton was Clciked")
     let productIndex = arrLocalStorageProduct.findIndex((product) => product.id === id )
     if(productIndex !== -1 ) {
       arrLocalStorageProduct[productIndex].productQuantity += productQuantity;
     }else{
             arrLocalStorageProduct.push(updatedProducts);
     }
    localStorage.setItem("product-cart" , JSON.stringify(arrLocalStorageProduct));
    
}