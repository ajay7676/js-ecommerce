import { getCartProductFromLS } from "./getCartProductFromLS.js";

getCartProductFromLS();
export const addToCart = (e, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();
  const currentCard = document.querySelector(`#card${id}`);
  let productQuantity = Number(
    currentCard.querySelector(".productQuantity").innerText
  );
  let productPirce = currentCard.querySelector(".productPrice").innerText;
  let productActualPirce = currentCard.querySelector(
    ".productActualPrice"
  ).innerText;
  productPirce = productPirce.replace("₹", "");
    productPirce = (productPirce * productQuantity).toFixed(2);
  let updatedProducts = { id, productQuantity, productPirce };
  let productIndex = arrLocalStorageProduct.findIndex(
    (product) => product.id === id
  );
   (productIndex !== -1)
    ? (arrLocalStorageProduct[productIndex].productQuantity += 1 ,
      arrLocalStorageProduct[productIndex].productPirce = productPirce
    )
   :  arrLocalStorageProduct.push(updatedProducts);
   localStorage.setItem("product-cart", JSON.stringify(arrLocalStorageProduct));
};
