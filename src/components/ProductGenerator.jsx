import React, { useState, useEffect } from 'react';
import ItemGenerateButton from './ItemGenerateButton';


function ProductGenerator() {
    const [products, setProducts] = useState("");

    useEffect(() => {
        const url = "https://dummyjson.com/products";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.products);
                setProducts(json.products)
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [])

    const generateItems = () => {
        let productIndex = Math.floor(Math.random() * products.length)
        let ranValue = products[productIndex];
        setProducts([ranValue, ...products]);
    }
  return (
      <div className='border-b-4 border-indigo-500 transition-all'>
          <h1 className='underline p-2 font-bold '>Product Generator</h1>
          <ItemGenerateButton onClick={generateItems}/>
          {products.length > 20 && (
                <div key={products[0].id}>
                    <p>{products[0].id}</p>
                    <p>{products[0].title}</p>
                    <p>{products[0].description}</p>
                    <p>${products[0].price}</p>
                    <p>${products[0].discountPercentage}</p>
                </div>
            )}
    </div>
  )
}

export default ProductGenerator