import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { clearCart } from "../../redux/CartSlice";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.cart.cartList);
  const totalPrice = useSelector((state) => state.cart.total);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deliveryChecked, setDeliveryChecked] = useState(false);

  const handleConfirm = () => {
    dispatch(clearCart());
    setShowConfirmation(false);
    setDeliveryChecked(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
    setDeliveryChecked(false);
  };

  const finalPrice = deliveryChecked ? (+totalPrice + 30).toFixed(2) : totalPrice;

  return (
    <div className="cart-container">
      <h1>My Cart</h1>

      {itemsList.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {itemsList.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </tbody>
        </table>
      ) : (
        <h4>Cart is empty! Go fill it!</h4>
      )}

      <p>Total Price: ${finalPrice}</p>
      
      
      <button
        onClick={() => setShowConfirmation(totalPrice > 0 ? true : null)}
        disabled={totalPrice === 0} 
      >
        Proceed to checkout
      </button>

      {showConfirmation && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirm Your Order</h2>
            <p>
              Total Price: <strong>${finalPrice}</strong>
            </p>
            <label>
              <input
                type="checkbox"
                checked={deliveryChecked}
                onChange={(e) => setDeliveryChecked(e.target.checked)}
              />
              Home Delivery (+$30)
            </label>
            <div className="modal-buttons">
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;