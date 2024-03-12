import PropTypes from 'prop-types';

import './bottle.css'

const Bottle = ({bottle,handelAddToCart}) => {
    console.log(bottle)
   

    const {name, img, price, category, ratings, seller}=bottle
    return (
        <div className="bottle">
            <h4>{name}</h4>
            <p><img src={img} alt="" /></p>
            <div className='price-container'>
            <p>Water: {category}</p>
            <p>Price:${price}</p>
           
            </div>
            <div className='rating-container'>
                <p>Rating: {ratings}</p>
                <p>Brand : {seller}</p>
            </div>
            <button onClick={()=>handelAddToCart(bottle)}>Purchase </button>

        </div>
    );
};

Bottle.propTypes ={
    bottle :PropTypes.object.isRequired ,
    handelAddToCart : PropTypes.func.isRequired 
}
export default Bottle;