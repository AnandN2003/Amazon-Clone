export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

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