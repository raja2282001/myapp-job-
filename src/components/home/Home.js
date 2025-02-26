import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

 
  const userProfile = JSON.parse(localStorage.getItem("Profile"));

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cartvalue"))
  });

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist"))
  });

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
      <h1>All Products</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
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
              <div style={{display:"flex",justifyContent:"end"}} onClick={()=>navigate(`/product/${product?.id}`)}>
                 More
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
