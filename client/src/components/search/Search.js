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
                <input name="min-price" type="number" />
                <input name="max-price" type="number" />
                </div>
            </div>
            <div className="size">
            <label htmlFor="seach-by-name">Size:</label>

                 <label className="container">36
                <span className="checkmark"></span>
                <input type="checkbox" checked="checked"/>
                </label>

                <label className="container">37
                <span className="checkmark"></span>
                <input type="checkbox"/>
                </label>

                <label className="container">38
                <span className="checkmark"></span>
                <input type="checkbox"/>
                </label>

                <label className="container">39
                <span className="checkmark"></span>
                <input type="checkbox"/>
                </label> 
                <label className="container">40
                <span className="checkmark"></span>
                <input type="checkbox"/>
                </label> 
                <label className="container">41 
                <span className="checkmark"></span>
                <input type="checkbox"/>
                </label> 
                <label className="container">42 
                <span className="checkmark"></span>
                <input type="checkbox"/>
                </label> 
                <label className="container">43
                <span className="checkmark"></span>
                <input type="checkbox"/>
                </label> 
                <label className="container">44
                <span className="checkmark"></span>
                <input type="checkbox"/>
                </label> 
            </div>
        </section>
    )
}