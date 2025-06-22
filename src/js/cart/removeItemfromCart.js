 export const removeItemfromCart = (id) =>{
     let localPrdoduct = JSON.parse(localStorage.getItem("product-cart"));

       const filtetPrduct = localPrdoduct.filter((product) => product.id !== id);
        localStorage.setItem("product-cart" , JSON.stringify(filtetPrduct));
         let removeCard = document.getElementById(`card${id}`)
          removeCard.remove();
        return filtetPrduct;
 }