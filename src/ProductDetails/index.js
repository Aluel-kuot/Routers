import React,{useState, useEffect} from "react";
import { Link} from "react-router-dom";
import './style.css'




const ProductDetails=()=>{
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState ([false]);
  //   const [searchParams] = useSearchParams();
  // const productId = searchParams.get('productId');
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
    
        return (
            <div className="list">
              <h1>Details</h1>
              <div className="products">
                {products.map((item) => (
                  <div key={item.id} className="item">
                    <img src={item.thumbnail} className="image" />
                    <div className="details">
                      <h2 className="title">{item.title}</h2>
                      <h2 className="title">{item.id}</h2>
                      <p className="price">{item.price}</p>
                      <p className="discount">{item.discountPercentage}</p>
                      <p className="discount">{item.rating}</p>
                      <p className="discount">{item.discription}</p>
                      <p className="discount">{item.stock}</p>
                      <p className="discount">{item.category}</p>
                      <p className="discount">{item.brand}</p>

                      
v
                    </div>
                    <button className="view">Add to cart</button>
                  </div>
                ))}
              </div>
            </div>
          );
        };
        
        export default ProductDetails;
        
        
     