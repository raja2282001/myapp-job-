import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Userproduct = () => {

    const navigate = useNavigate();

 
    const userProfile = JSON.parse(localStorage.getItem("Profile"));
  
    const [cart, setCart] = useState(() => {
      return JSON.parse(localStorage.getItem("cartvalue"))
    });
  
    const [wishlist, setWishlist] = useState(() => {
      return JSON.parse(localStorage.getItem("wishlist"))
    });
  
    const products = JSON.parse(localStorage.getItem("cartvalue"))
  
  
    useEffect(() => {
      localStorage.setItem("cartvalue", JSON.stringify(cart));
    }, [cart]);
  
    
    useEffect(() => {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);
  
  
    const handleAddToCart = (product) => {
      if (!userProfile) {
        alert("Please login to add items to cart!");
        navigate("/login");
        return;
      }
  
      setCart((prevCart) => {
        const exists = prevCart.find((item) => item.id === product.id);
        if (exists) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });
    };
  
    const handleRemoveFromCart = (product) => {
      setCart((prevCart) => {
        return prevCart
          .map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0);
      });
    };
    const handleAddToWishlist = (product) => {
      setWishlist((prevWishlist) => {
        const exists = prevWishlist.some((item) => item.id === product.id);
        if (exists) {
          return prevWishlist.filter((item) => item.id !== product.id);
        }
        return [...prevWishlist, product];
      });
    };

  return (
    <div>
      <div>
        <h1>Profile Page</h1>
      </div>
      <div className='profilemain'>
        <ul>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/userproduct">Product</Link>
            </li>
            <li>
                <Link to="/wishlistdetail">Wishlist</Link>
            </li>
        </ul>
        <div className='detail' style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "250px",
                textAlign: "center"
              }}
            >
              <img src={product.image} alt={product.name} width="100%" />
              <h3>{product.name}</h3>
              <p>{product.brand}</p>
              <p>${product.price}</p>

              {cartItem ? (
                <div>
                  <button onClick={() => handleRemoveFromCart(product)}>-</button>
                  <span style={{ margin: "0 10px" }}>{cartItem.quantity}</span>
                  <button onClick={() => handleAddToCart(product)}>+</button>
                </div>
              ) : (
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              )}

              <button onClick={() => handleAddToWishlist(product)}>
                {wishlist.some((item) => item.id === product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  )
}

export default Userproduct
