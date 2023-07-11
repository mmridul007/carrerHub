import { getStoredCart } from "../utils/fakeDB"


const productsAndCartData = async()=>{
    const productsData = await fetch('/jobCartData.json')
    const products = await productsData.json()
    const savedCart = getStoredCart()
    let cartArray = []
    for(const id in savedCart){
        const foundProduct = products.find(product => product.id == id)
        if(foundProduct){
            cartArray.push(foundProduct)
        }
    }
    return {cartArray, products}
}

export {productsAndCartData}