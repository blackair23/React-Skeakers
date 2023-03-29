import { useEffect, useState } from 'react';
import './search.css';

export const Search = ({products, filtered}) => {

    const [values, setValues] = useState("");

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
        const filterdProducts = products.filter(product => {
            return product.name.toLowerCase().includes((values["search-by-name"] ? values["search-by-name"] : e.target.value).toLocaleLowerCase())
        }) 
        filtered(filterdProducts);
    }

    return (
        <section id="search">
            <div className="seach-by-name">
                <label htmlFor="seach-by-name">Search:</label>
                <input onChange={onChangeHandler} value={values["search-by-name"]}  name="seach-by-name" type="text" />
            </div>
            <div className="seach-by-price">
                <label htmlFor="seach-by-price">Price range:</label>
                <div className='input-price'>
                <input className='price' step="0.01" name="min-price" type="number" placeholder='Min' />
                <input className='price' step="0.01" name="max-price" type="number" placeholder='Max' />
                </div>
            </div>
            <div className="size">
            <label htmlFor="seach-by-size">Size:</label>

                 <label className="container">
                <span className="checkmark"></span>
                <input type="checkbox"/>
                36</label>

                <label className="container">
                <span className="checkmark"></span>
                <input type="checkbox"/>37
                </label>

                <label className="container">
                <span className="checkmark"></span>
                <input type="checkbox"/>38
                </label>

                <label className="container">
                <span className="checkmark"></span>
                <input type="checkbox"/>39
                </label> 
                <label className="container">
                <span className="checkmark"></span>
                <input type="checkbox"/>40
                </label> 
                <label className="container"> 
                <span className="checkmark"></span>
                <input type="checkbox"/>41
                </label> 
                <label className="container"> 
                <span className="checkmark"></span>
                <input type="checkbox"/>42
                </label> 
                <label className="container">
                <span className="checkmark"></span>
                <input type="checkbox"/>43
                </label> 
                <label className="container">
                <span className="checkmark"></span>
                <input type="checkbox"/>
                44</label> 
            </div>

            <div className='category-dropdown'>
             <label htmlFor="category">Category:</label>
                <select name="category" id="category">
                    <option value="Men's Shoes">Men's Shoes</option>
                    <option value="Womans's Shoes">Womans's Shoes</option>
                    <option value="Kids's Shoes">Kids's Shoes</option>
                </select> 
            </div>
        </section>
    )
}