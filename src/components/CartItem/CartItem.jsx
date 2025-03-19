import { useDispatch } from "react-redux";
import { plusItem, minusItem, deleteItem } from "../../redux/CartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(plusItem(cartItem.id));
  };

  const handleMinus = () => {
    dispatch(minusItem(cartItem.id));
  };

  const handleDelete = () => {
    dispatch(deleteItem(cartItem.id));
  };

  return (
    <tr>
      <td>
        <img
          src={cartItem.item.images[0]}
          alt={cartItem.item.title}
          className="cart-item-img"
        />
        {cartItem.item.title}
      </td>
      <td>${cartItem.item.price.toFixed(2)}</td>
      <td>
        <button onClick={handleMinus}>-</button>
        {cartItem.amount}
        <button onClick={handlePlus}>+</button>
      </td>
      <td>${cartItem.cost}</td>
      <td>
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CartItem;