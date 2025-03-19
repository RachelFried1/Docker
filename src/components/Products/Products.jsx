import { useState } from "react";
import loadingIcon from '../../assets/Rainbow.gif';
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchDataAsyncAction } from "../../redux/Thunk";
import './Products.css';


const Products = () => {
  

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchDataAsyncAction())
  }, [])

  useEffect(() => {
    if(error) {
      navigate("/error");
    }
  }, [error])

  const filter = useSelector((state) => state.products.filter);
  
  const filteredProducts = products.filter(product => {
    if(filter === '') {
      return true;
    } 
    return product.title.toLowerCase().includes(filter.toLowerCase())
  });

  
 
    return (
      <div>
        <div className="container align-items-start p-0">
          <div className="row align-items-start mb-4">
            <div className="col-6"></div> 
           
          </div>
          {loading && (
            <div className="loading-wrapper">
              <img src={loadingIcon} alt="Loading" /> 
            </div>
          )}
          <div className="products"> 
            {filteredProducts.length &&
              filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    );
  };
  export default Products;