export let cart = [];

export function addtocart(productId){
    let matchingitem; // to calculate the number of same items bought
        cart.forEach((item)=>{
          if(productId == item.productId){
            matchingitem = item;
          }
        });
        if(matchingitem){
          matchingitem.quantity++;
        }
        else{
          cart.push({
            productId:productId,
            quantity: 1
          });
        }
  }