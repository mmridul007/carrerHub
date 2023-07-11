const addToDB = id =>{
    console.log(id)
    let jobCart ={}
    const storedCart = localStorage.getItem('job-cart')
    if(storedCart){
        jobCart = JSON.parse(storedCart)
    }

    const quantity = jobCart[id]
    if(quantity){

    }else{
        jobCart[id]=1
    }

    localStorage.setItem('job-cart',JSON.stringify(jobCart))
}


const getStoredCart = () =>{
    let shoppingCart = {}

    const storedCart = localStorage.getItem('job-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    return shoppingCart
}

export{addToDB,getStoredCart}