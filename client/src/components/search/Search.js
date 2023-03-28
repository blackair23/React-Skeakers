import './search.css';

export const Search = () => {

    return (
        <section id="search">
            <div className="seach-by-name">
                <label htmlFor="seach-by-name">Search:</label>
                <input name="seach-by-name" type="text" />
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
                <input type="checkbox" checked="checked"/>
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