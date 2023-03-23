/* eslint-disable */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { create } from "../services/productService";
import { useMinLenght, useUrlValidator } from "../hooks/useValidation"

export const Create = () => {
    const navigate = useNavigate();
    const [ lengthErr, setLengthErr ] = useMinLenght({});
    const [ urlErr, setUrlErr ] = useUrlValidator({});
    const [values, setValues] = useState({
        name: '',
        price: '',
        stock: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        description: '',
        category: 'Men\'s Shoes',
        size: '36',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    }
    const onSubmit = async (e) => {
        e.preventDefault();

        const productData = {
            name: values.name,
            price: Number(values.price),
            stock: Number(values.stock),
            img: [
                values.image1,
                values.image2,
                values.image3,
                values.image4,
            ],
            description: values.description,
            category: values.category,
            size: values.size,
        }

        console.log(productData);
        try {
            const data = await create(productData);
            console.log('the product data >>>', data);
            navigate(`/catalog/${data._id}`);
        } catch (error) {
            swal({
                icon: "error",
                text: error.message,
            });
        }   
    };

    return (
        <section id="create-section">
        <div className="form-part">
            <form onSubmit={onSubmit} >
                <h2>Create listing</h2>
                <div className="form-element">
                    <label  htmlFor="name">Name:</label>
                    {lengthErr.name && 
                    <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Name shoud be atleast 3 charter!</p>
                    }
                    <input 
                    className={lengthErr.name ? "error-input" : undefined} 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter name"  
                    value={values.name} 
                    onChange={onChangeHandler} 
                    onBlur={(e) => setLengthErr(e, 2, values)}
                    />
                </div>
                <div className="form-element">
                    <label htmlFor="price">Price:</label>
                    {lengthErr.price && 
                    <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Price is requred!</p>
                    }
                    <input className={lengthErr.price ? "error-input" : undefined} type="number" id="price" name="price" value={values.price} onChange={onChangeHandler} onBlur={(e) => setLengthErr(e, 0, values)}/>
                </div>
                <div className="form-element">
                    {lengthErr.stock && 
                    <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Stock is requred!</p>
                    }
                    <label htmlFor="stock">Stock:</label>
                    <input className={lengthErr.stock ? "error-input" : undefined} type="number" id="stock" name="stock" value={values.stock} onChange={onChangeHandler} onBlur={(e) => setLengthErr(e, 0, values)}/>
                </div>
          
                {/* <div className="form-element">
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image"/>
                </div> */}
                {/* TODO temporary img */}
                <div className="form-element">
                    <label  htmlFor="image1">Image:</label>
                    {urlErr.image1 && 
                    <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Invalid URL!</p>
                    }
                    <input className={urlErr.image1 ? "error-input" : undefined} type="text" id="image1" name="image1" placeholder="Img URL" value={values.image1} onChange={onChangeHandler} onBlur={(e) => setUrlErr(e, values)}/>
                </div>

                <div className="form-element">
                    <label  htmlFor="image2">Image:</label>
                    {urlErr.image2 && 
                    <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Invalid URL!</p>
                    }
                    <input className={urlErr.image2 ? "error-input" : undefined} type="text" id="image2" name="image2" placeholder="Img URL" value={values.image2} onChange={onChangeHandler} onBlur={(e) => setUrlErr(e, values)}/>
                </div>

                <div className="form-element">
                    <label  htmlFor="image3">Image:</label>
                    {urlErr.image3 && 
                    <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Invalid URL!</p>
                    }
                    <input className={urlErr.image3 ? "error-input" : undefined} type="text" id="image3" name="image3" placeholder="Img URL" value={values.image3} onChange={onChangeHandler} onBlur={(e) => setUrlErr(e, values)}/>
                </div>

                <div className="form-element">
                    <label  htmlFor="image4">Image:</label>
                    {urlErr.image4 && 
                    <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Invalid URL!</p>
                    }
                    <input className={urlErr.image4 ? "error-input" : undefined} type="text" id="image4" name="image4" placeholder="Img URL" value={values.image4} onChange={onChangeHandler} onBlur={(e) => setUrlErr(e, values)}/>
                </div>
                {/* End img */}
          
                <div className="form-element">
                    <label htmlFor="description">Description</label>
                    {lengthErr.description && 
                    <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Description shoud be atleast 15 charter!</p>
                    }
                    <textarea className={lengthErr.description ? "error-input" : undefined} name="description" id="description" cols="5" rows="5" value={values.description} onChange={onChangeHandler} onBlur={(e) => setLengthErr(e, 14, values)}></textarea>
                </div>

                <div className="form-element">
                    <label htmlFor="category">Choose a category:</label>

                    <select name="category" id="category" value={values.category} onChange={onChangeHandler}>
                      <option value="Men's Shoes">Men's Shoes</option>
                      <option value="Womans's Shoes">Womans's Shoes</option>
                      <option value="Kids's Shoes">Kids's Shoes</option>
                    </select> 
                </div>

                <div className="form-element">
                    <label htmlFor="size">Choose a size:</label>

                    <select name="size" id="size" value={values.size} onChange={onChangeHandler}>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                    </select> 
                </div>
                <input className="btn primary-btn" type="submit" value="Create"/>
            </form>
        </div>
        <div className="preview">
            <h2>Preview</h2>
            <article className="product-card">
                <img src={values.image1 ? values.image1 : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1edb606b-0474-4096-959d-817fc0f399d4/air-force-1-low-retro-shoes-dGZSL6.png"} alt=""/>
                <p>{values.name ? values.name : "Air Force 1 Low Retro"}</p>
                <p>{values.category ? values.category : "Men's Shoes"}</p>
                <p>BGN {values.price ? values.price : "249"}</p>
            </article>
        </div>
    </section>
    );
} 