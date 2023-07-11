import React from 'react';
import { getStoredCart } from '../../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import StoredCard from '../../StoredCard/StoredCard';

const Applied_Jobs = () => {
    // const cartData = localStorage.getItem('job-cart');
    // console.log(cartData)
    // const cart = getStoredCart()

    const {cartArray} = useLoaderData()
    console.log(cartArray)
    return (
        <div className='min-h-[75vh]'>
            <div>
                <h1 className='font-bold text-2xl text-center py-12'>Applied Jobs</h1>
            </div>
            <div>
                {
                    cartArray.map((cart) =>(<StoredCard key={cart.id}
                    cart={cart}></StoredCard>))
                }
            </div>
            
        </div>
    );
};

export default Applied_Jobs;