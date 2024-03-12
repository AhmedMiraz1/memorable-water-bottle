import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import "./Bottles.css";
import { addToLs, getStoredCart, removeFromLs } from "../../Utilitis/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage

  useEffect(() => {
    if (bottles.length) {
      const storedCart = getStoredCart();
const savedCart= []
      for (const id of storedCart) {
        const bottle = bottles.find(bottle =>  bottle.id === id)
        if(bottle){
            savedCart.push(bottle)
        }
      }
      setCart(savedCart)
    }
  }, [bottles]);

  const handelAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLs(bottle.id);
  };


  const handelRemoveFromCart= id =>{
    const remainingCart = cart.filter(bottle => bottle.id !== id )
    setCart(remainingCart)
    removeFromLs(id)

  }
  return (
    <div>
      <h2>Bottles here:{bottles.length} </h2>
      <Cart cart={cart} handelRemoveFromCart={handelRemoveFromCart}></Cart>

      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handelAddToCart={handelAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
