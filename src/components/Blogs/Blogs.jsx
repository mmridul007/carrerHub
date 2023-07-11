import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='font-bold text-2xl text-center py-12'>Blogs</h1>

            </div>
            <div className='mb-6'>
            <h2 className='font-bold text-2xl text-blue-400 mb-2'>When you shoud use Context API?</h2>
            <p>Context API is a feature in React that allows for managing application state in a more centralized and organized way, and can be useful in situations where you have data or state that needs to be accessed by many components, complex data dependencies, creating themes/styles, and managing application-level state. It helps avoid prop drilling and provides a centralized location for storing and accessing application-level data.</p>
            </div>
            <div className='mb-6'>
            <h2 className='font-bold text-2xl text-blue-400 mb-2'>What is Custom Hook?</h2>
            <p>A custom hook is a reusable piece of code logic in React that encapsulates common functionality and can be shared across multiple components, making it easier to manage and reuse code. Custom hooks can help abstract away complex logic and state management, making code more modular and easier to maintain. They are created using the useEffect, useState, and other hooks provided by React.</p>
            </div>
            <div className='mb-6'>
            <h2 className='font-bold text-2xl text-blue-400 mb-2'>What is useRef and where was it works?</h2>
            <p>useRef is a built-in hook in React that creates a reference object to access and manipulate a specific element or property. It can be used to get a reference to a DOM element, store an arbitrary value that persists between renders, or manage state and interact with the DOM outside of the normal component lifecycle. Unlike state variables, it doesn't trigger re-renders when the value changes. useRef can be used in functional components, including those that use React's hooks.</p>
            </div>
            <div className='mb-2'>
            <h2 className='font-bold text-2xl text-blue-400 mb-2'>What is useMemo?</h2>
            <p>useMemo is a built-in hook in React that can memoize the result of a function to avoid unnecessary re-computations. It's a performance optimization that can improve the efficiency of functional components by avoiding unnecessary re-renders. useMemo takes two arguments - a function and a dependencies array - and returns a memoized value that will only be recomputed when the dependencies change. It can be useful for expensive computations or calculations that don't need to be re-run on every render.</p>
            </div>
            
        </div>
    );
};

export default Blogs;