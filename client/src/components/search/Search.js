import { useEffect, useState } from 'react';
import './search.css';

export const Search = ({products, filtered}) => {

    const [values, setValues] = useState(''
    // {
    //     nema: '',
    //     'min-price': '',
    //     'max-price': '',
    //     sizes: [],
    // }
    );
    // let filterdProducts ='';
    // let fp2 = '';
    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
        // console.log(e.target.name, "  ",  e.target.value);
        // console.log(values);
        // console.log(Object.keys(values).length);

        // const { name, value } = e.target;
        // if (name === 'sizes') {
            
        //     const isChecked = e.target.checked;
        //     const size = e.target.value;
        //     console.log(isChecked, "->>", size);
        //     if (isChecked) {
        //         setValues(prevValues => ({
        //             ...prevValues,
        //             sizes: [...prevValues.sizes, size]
        //         }));
        //     } else {
        //         setValues(prevValues => ({
        //             ...prevValues,
        //             sizes: prevValues.sizes.filter(s => s !== size)
        //         }));
        //     }
        // } else {
        //     setValues(prevValues => ({
        //         ...prevValues,
        //         [name]: value
        //     }));
        // }
    }

    useEffect(() => {
        console.log(values)
        const filterdProducts = products.filter(product => {
            return Object.entries(values).every(([key, value]) => {
              if (key === "min-price") {
                // console.log(parseFloat(value))
                return product.price >= Number(value);
              } else if (key === "max-price") {
                if(value.length === 0){
                    value = 9999999999;
                }
                return product.price <= Number(value);
              } else if (key === "sizes") {
                // console.log(key, "->>>>", value)
                // return value.length === 0 || value.includes(product.size);
                // // return product.price <= Number(value);
            } else {
                return product[key].toLowerCase().includes(value.toLowerCase());
              }
            });
          });

        filtered(filterdProducts);
        
        // const filteredProducts = products.filter(product => {
        //     return Object.entries(values).every(([key, value]) => {
        //       if (key === 'min-price') {
        //         console.log('min-price -->', key, value )
        //         return product.price >= parseFloat(value);
        //       } else if (key === 'max-price') {
        //         return product.price <= parseFloat(value);
        //       } else if (key === 'sizes') {
        //         return value.length === 0 || value.some(size => product.size.includes(size));
        //       } else {
        //         return product[key].toLowerCase().includes(value.toLowerCase());
        //       }
        //     });
        //   });
        // console.log(filteredProducts)
        // console.log(values)
        // filtered(filteredProducts);

    }, [values])

    return (
        <section id="search">
            <div className="seach-by-name">
                <label htmlFor="name">Search:</label>
                <input onChange={onChangeHandler} value={values.name}  name="name" type="text" />
            </div>
            <div className="seach-by-price">
                <label htmlFor="seach-by-price">Price range:</label>
                <div className='input-price'>
                <input className='price' step="0.01" name="min-price" type="number" placeholder='Min' onChange={onChangeHandler} value={values["min-price"]} />
                <input className='price' step="0.01" name="max-price" type="number" placeholder='Max' onChange={onChangeHandler} value={values["max-price"]} />
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
                    <input type="checkbox" name="size" value="37" onChange={onChangeHandler} />
                    37
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="size" value="38" onChange={onChangeHandler} />
                    38
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="size" value="39" onChange={onChangeHandler} />
                    39
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="size" value="40" onChange={onChangeHandler} />
                    40
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="size" value="41" onChange={onChangeHandler} />
                    41
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="size" value="42" onChange={onChangeHandler} />
                    42
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="size" value="43" onChange={onChangeHandler} />
                    43
                </label>
                 <label className="container">
                    <span className="checkmark"></span>
                    <input type="checkbox" name="size" value="44" onChange={onChangeHandler} />
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