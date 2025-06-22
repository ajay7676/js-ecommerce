import { getCartProductFromLS } from "../home/getCartProductFromLS"

export const getActualProductQuantity  = (id ) =>{
     let localPrdoduct = getCartProductFromLS();
     const actualQuantitly= localPrdoduct.find((product) => product.id === id);
      return actualQuantitly
       
}