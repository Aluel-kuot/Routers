import React,{useState, useEffect} from "react";
import { Route } from "react-router";
import './style.css'


const Products=()=>{
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState ([false]);
    useEffect(()=>{
    (async()=>{
    await getProducts();
})()
    }, [])
    console.log({products});

    const getProducts=async()=>{
        try{
            setLoading(true)
            const response=await fetch('https://dummyjson.com/products')
            const result =await response .json();
            setProducts(result.products);
            setLoading(false);

        }
        catch(error){
            console.log(error.message);
        }
    };
    
        if(loading){
            return <h2>Loading...</h2>
        }
    
        return (
            <div className="list">
              <h1>All products</h1>
              <div className="products">
                {products.map((item) => (
                  <div key={item.id} className="item">
                    <img src={item.thumbnail} className="image" />
                    <div className="details">
                      <h2 className="title">{item.title}</h2>
                      <p className="price">{item.price}</p>
                      <p className="discount">{item.discountPercentage}</p>
                    </div>
                    <button className="view">View More</button>
                  </div>
                ))}
              </div>
            </div>
          );
        };
        
        export default Products;
        
        
     