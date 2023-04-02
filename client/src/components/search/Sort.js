import { useState } from "react";
import './sort.css';
export const Sort = ({ setSortValue }) => {
    const [ values, setValue ] = useState('')

    const onChangeHandler = (e) => {
        setValue(state => ({...state, [e.target.name]: e.target.value}));
        setSortValue(state => ({...state, [e.target.name]: e.target.value}));
    }

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