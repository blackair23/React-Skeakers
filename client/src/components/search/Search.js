import { useEffect, useState } from 'react';
import './search.css';

export const Search = ({products, filtered}) => {

    const [values, setValues] = useState(
        {name: "",
        "min-price": "",
        "max-price": "",
        sizes: [],
        category: ""}
        );

    const onChangeHandler = (e) => {
        // setValues(state => ({...state, [e.target.name]: e.target.value}));
        const { name, value, checked } = e.target;
        if (name === 'sizes') {
            if (checked) {
              setValues(state => ({ ...state, [name]: [...(state[name] || []), value] }));
            } else {
              setValues(state => ({ ...state, [name]: state[name].filter(val => val !== value) }));
            }
        } else {
            setValues(state => ({ ...state, [name]: value }));
        }
    }

    useEffect(() => {
        const filterdProducts = products.filter(product => {
            return Object.entries(values).every(([key, value]) => {
              if (key === "min-price") {
                return value === "" || product.price >= Number(value);
              } else if (key === "max-price") {
                // if(value.length === 0){
                //     value = 9999999999;
                // }
                return value === "" || product.price <= parseFloat(value);
              } else if (key === "sizes") {
                return value.length === 0 || value.includes(String(product.size));
            } else {
                return value === "" || product[key].toLowerCase().includes(value.toLowerCase());
              }
            });
          });
          filtered(filterdProducts);
          
          
    }, [values, products])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section id="search">
            <div className="seach-by-name">
                <label htmlFor="name">Search:</label>
                <input onChange={onChangeHandler} value={values.name}  name="name" type="text" />
            </div>
            <div className="seach-by-price">
                <label htmlFor="seach-by-price">Price range:</label>
                <div className='input-price'>
                <input className='price' step="1" name="min-price" type="number" placeholder='Min' onChange={onChangeHandler} value={values["min-price"] } />
                <input className='price' step="1" name="max-price" type="number" placeholder='Max' onChange={onChangeHandler} value={values["max-price"] } />
                </div>
            </div>
            <div className="size">
            <label htmlFor="size" name="seach-by-size">Size:</label>

                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="sizes" value="36" onChange={onChangeHandler} />
                    36
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="sizes" value="37" onChange={onChangeHandler} />
                    37
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="sizes" value="38" onChange={onChangeHandler} />
                    38
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="sizes" value="39" onChange={onChangeHandler} />
                    39
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="sizes" value="40" onChange={onChangeHandler} />
                    40
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="sizes" value="41" onChange={onChangeHandler} />
                    41
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="sizes" value="42" onChange={onChangeHandler} />
                    42
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="sizes" value="43" onChange={onChangeHandler} />
                    43
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="sizes" value="44" onChange={onChangeHandler} />
                    44
                </label>

            </div>

            <div className='category-dropdown'>
             <label htmlFor="category">Category:</label>
                <select name="category" id="category" onChange={onChangeHandler} value={values.category}>
                    <option value=""></option>
                    <option value="Men's Shoes">Men's Shoes</option>
                    <option value="Womans's Shoes">Womans's Shoes</option>
                    <option value="Kids's Shoes">Kids's Shoes</option>
                </select> 
            </div>
        </section>
    )
}