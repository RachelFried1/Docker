import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeFilter } from "../../redux/ProductsSlice";
import './Search.css';
const Search = () => {

    
    const dispatch = useDispatch();
    const filter = useSelector(state => state.products.filter);

    const handleInputChange = (event) => {
        
        dispatch(changeFilter(event.target.value));
        
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for products..."
                value={filter}
                onChange={handleInputChange}
                className="form-control"
               
            />
        </div>
    );
};
export default Search;