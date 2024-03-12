import PropTypes from 'prop-types';
import './cart.css'



const Cart = ({cart,handelRemoveFromCart}) => {
    return (
        <div>
            <h2>Cart : {cart.length}</h2>
            <div className="cart-image">
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img  src={bottle.img}></img>
                    <button onClick={() =>handelRemoveFromCart(bottle.id)}>Remove</button>
                </div>)
            }
            </div>
        </div>
    );
};

Cart.propTypes ={
    cart : PropTypes.array.isRequired,
    handelRemoveFromCart:PropTypes.func.isRequired
}

export default Cart;