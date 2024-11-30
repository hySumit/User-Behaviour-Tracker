import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const url = "https://reliance-digital-clone-full-stack.onrender.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const fetchedProducts = resp.data.products;
        setProducts(fetchedProducts);
        
        const uniqueCategories = [...new Set(fetchedProducts.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.log("Error Fetching data", error);
      }
    };
    fetchData();
  }, []);

  const renderProductCard = (product) => (
    <div key={product._id} className="product-card">
      <img
        src={product.product_image}
        alt={product.product_name}
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-name">{product.product_name}</h2>
        <p className="product-category">Category: {product.category}</p>
        <div className="product-rating">
          <span>Rating: </span>
          <span>{product.stars} <i className="fas fa-star"></i></span>
        </div>
        <p className="product-price">₹{product.price}</p>
        <p className="product-mrp">MRP: ₹{product.mrp}</p>
        {product.offer && (
          <p className="product-discount">
            Discount: ₹{product.disscount}
          </p>
        )}
        <p className="product-description">{product.description}</p>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );

  return (
    <div className="product-container">
      <h1 className="main-heading">Our Products</h1>
      {categories.map((category) => (
        <section key={category} className="category-section">
          <h2 className="section-heading">{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>
          <div className="product-grid">
            {products
              .filter(product => product.category === category)
              .map(renderProductCard)
            }
          </div>
        </section>
      ))}
    </div>
  );
};

export default Product;