import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const templateProduct = document.querySelector("#templateProduct");

export const showProductCon = (products) => {
  if (!products) {
    return;
  }
  products.forEach((currProd) => {
    const { id, name, image, category, price, stock, description } = currProd;
    const productClone = document.importNode(templateProduct.content, true);
    productClone.querySelector("#cardValue").setAttribute("id" , `card${id}`)
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${price*4}`;
    const stockElement= productClone.querySelector('.stockElement');
      stockElement.addEventListener("click" , (e) => {
           homeQuantityToggle(e , id , stock);
      })
    productClone.querySelector(".add-to-cart-button").addEventListener("click" , (e) => {
           addToCart(e , id , stock);
      })
      // getAutodataLS();
    productContainer.append(productClone);
  });
};
