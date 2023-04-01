import { useEffect, useState } from "react";
import './sort.css';
export const Sort = ({products, setProducts, filtered }) => {
    const [ values, setValue ] = useState('')
    const onChangeHandler = (e) => {
        setValue(state => ({...state, [e.target.name]: e.target.value}));
    }

    useEffect(() => {
        console.log(products, values.sort);
        let sorted = []
        if(values.sort === "Name"){
            sorted = products.sort((a, b) => a.name.localeCompare(b.name));
            // setProducts(sorted);
            // filtered(sorted); 
        }else if(values.sort === "Price acending"){
            sorted = products.sort((a, b) => a.price - b.price)
            // setProducts(sorted);
            // filtered(sorted); 
        }else if(values.sort === "Price decending"){
            console.log('down')
            sorted = products.sort((a, b) => b.price - a.price)
        }
        console.log('why dont fire on every change ', values.sort)
        // sorted.pop();
        if(sorted.length === 0) {
            sorted = products;
        }
        
        // filtered(sorted); 
        setProducts(sorted);
    }, [values, products, setProducts])

    return (
        <div className='sort-dropdown'>
        <label htmlFor="sort">Sort by:</label>
           <select name="sort" id="sort" onChange={onChangeHandler} value={values.sort}>
               <option value="" hidden></option>
               <option value="Name">Name</option>
               <option value="Price acending">Price Low-High</option>
               <option value="Price decending">Price High-Low</option>
           </select> 
       </div>
    )
}