import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {


    const { id } = useParams();
    const navigate = useNavigate();

  const productId = parseInt(id);


    const products = [
        {
          id: 1,
          name: "iPhone 14 Pro",
          brand: "Apple",
          price: 1099,
          description: "The iPhone 14 Pro features a 6.1-inch Super Retina XDR display...",
          image: "https://example.com/iphone14pro.jpg"
        },
        {
          id: 2,
          name: "Samsung Galaxy S23 Ultra",
          brand: "Samsung",
          price: 1199,
          description: "Samsung Galaxy S23 Ultra comes with a 6.8-inch Dynamic AMOLED...",
          image: "https://example.com/s23ultra.jpg"
        }
      ];


      const product = products.find((item) => item.id === productId);


 
  return (
    <div>
      <h1>Deatil Page</h1>
      <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "300px", borderRadius: "10px" }} />
      <h2>Brand: {product.brand}</h2>
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>

      <button onClick={() => navigate(-1)} style={{ padding: "10px 20px", cursor: "pointer", marginTop: "20px" }}>
        Go Back
      </button>
    </div>

    </div>
  )
}

export default Product
