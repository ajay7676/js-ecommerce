import { getCartProductFromLS } from "../home/getCartProductFromLS";
import { updateCartQuantity } from "./updateCartQuantity";
import products from '../../api/products.json'
import { getActualProductQuantity } from "./getActualProductQuantity";
import { removeItemfromCart } from "./RemoveItemfromCart";

  const productCartContainer = document.getElementById("productCartContainer");
  const productCartTemplate = document.getElementById("productCartTemplate");

  const productcartCounter = document.querySelector(".add-to-cart-button i" );

 const showAddToCartCards = () =>{
//    const productcart =  JSON.parse(localStorage.getItem("product-cart"));
   const productcart = getCartProductFromLS();
    productcartCounter.textContent = productcart.length
     const filterPrdouctCartItem = products.filter((currProduct) => {
          return productcart.some((product) => product.id === currProduct.id)
     })
    filterPrdouctCartItem.forEach(product => {
         const {id  ,price ,category, stock  ,name , image } = product;
         const productCartClone = document.importNode(productCartTemplate.content , true);
          productCartClone.querySelector("#cardValue").setAttribute("id" , `card${id}`)
        productCartClone.querySelector(".category").textContent = `${category}`;
          productCartClone.querySelector(".productImage").src =image;
          productCartClone.querySelector(".productImage").alt =name;
          productCartClone.querySelector(".productName").textContent =name;
          const actualQuantitly = getActualProductQuantity(id , price ) 
          const {productPirce , productQuantity} =actualQuantitly
          productCartClone.querySelector(".productPrice").textContent = `₹${(productPirce*productQuantity).toFixed(2)}`;
            productCartClone.querySelector(".productQuantity").textContent = `${productQuantity}`;
            let dataInfo = productCartClone.querySelector(".productQuantity");
          dataInfo.dataset.quantity = `${productQuantity}`
           const removeElement= productCartClone.querySelector('.remove-to-cart-button');
          removeElement.addEventListener("click" , (e)=> {
             console.log("Remove Button was clicked")
             removeItemfromCart(id)
            //  updateCartQuantity( e ,id ,productQuantity , productPirce , stock );
          })
          const stockElement= productCartClone.querySelector('.stockElement');
          stockElement.addEventListener("click" , (e)=> {
             updateCartQuantity( e ,id  , productPirce , stock );
          })
          productCartContainer.append(productCartClone)
         
        //   console.log(productCartClone)
        
    });
}
 showAddToCartCards()