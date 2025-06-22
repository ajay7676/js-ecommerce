import { getCartProductFromLS } from "../home/getCartProductFromLS";

export const updateCartQuantity = (e, id, productPirce, stock) => {
  const currentCard = document.querySelector(`#card${id}`);
  const currentQuantity = currentCard.querySelector(".productQuantity");
  const currentPrice = currentCard.querySelector(".productPrice");
 console.log(productPirce)
  let quantity = 1;
  let localStoragePrice = 0;

  let localPrdoduct = getCartProductFromLS();
  console.log(localPrdoduct);

  let existingProduct = localPrdoduct.find((product) => product.id === id);
  if (existingProduct) {
    quantity = existingProduct.productQuantity;
    localStoragePrice = existingProduct.productPirce;
  } else {
    localStoragePrice = productPirce;
    productPirce = productPirce;
  }

  if (e.target.className === "cartIncrement") {
    console.log("cartIncrement");
    if (quantity < stock) {
      quantity += 1;
      localStoragePrice = productPirce * quantity
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = productPirce * stock;
    }
  }

  if (e.target.className === "cartDecrement") {
    console.log("cartDecrement");
    if (quantity > 1) {
      quantity -= 1;
    }
  }
  localStoragePrice = productPirce * quantity;
   console.log(localStoragePrice)
    console.log(productPirce)

  
};
