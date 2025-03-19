import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '/src/redux/CartSlice';
const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {

    dispatch(addItem(product));
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card bg-light shadow-sm h-100">
        <img
          src={product.images[0]}
          className="card-img-top img-small"
          alt={product.title}
        />
        <div className="card-body">
          <div className="title-container">
            <h5 className="card-title">{product.title}</h5>
          </div>
          <p className="card-text description">{product.description}</p>
          <div className="price-container">
            <p className="price">
              <strong>Price:</strong> ${product.price.toFixed(2)}
            </p>
          </div>

          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

