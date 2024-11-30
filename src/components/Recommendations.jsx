import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const Recommendations = () => {
  const [visitedProducts, setVisitedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // get visited products
    const savedProducts = Cookies.get("visitedProducts")
      ? JSON.parse(Cookies.get("visitedProducts"))
      : [];

    if (savedProducts.length > 0) {
      setVisitedProducts(savedProducts); 
      setLoading(false); 
    } else {
      setVisitedProducts([]);
      setLoading(false); // if no products
    }
  }, []);


  if (loading) {
    return <p>Loading recommendations...</p>;
  }

  const orignalPrice = visitedProducts.map((product)=>{
    let res = product.price
    return res
  })

  console.log(orignalPrice)
  

  return (
    <div>
      <h2 className="heading" >Our Recommendations for you !</h2>
      <div className="recommended-products">
        {visitedProducts.length > 0 ? (
          visitedProducts.map((product) => (
            <div key={product.productId} className="product-card">
              <img
                src={product.productImage}
                alt={product.productName}
                className="product-image"
              />
              <h3>{product.productName}</h3>
              <p className="original-price">Orignal Price: ₹{product.price}</p>
              <p className="discounted-price">Disccounted Price : ₹ { parseFloat(product.price)  * 1000} </p>
              <p>Stars: {product.stars}</p>
              <button className="add-to-cart">Add To Cart</button>
            </div>
          ))
        ) : (
          <p>No visited products available</p>
        )}
      </div>
    </div>
  );
};
