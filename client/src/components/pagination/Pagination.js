import { useState } from 'react';
import './pagination.css';

export const Pagination = ({products}) => {

    return(
        <div className="pagination">
            <ul role='list'>
                <li className='end-btn'><i class="fa-solid fa-angle-left"></i></li>
                <li>1</li>
                <li className='active' >2</li>
                <li>3</li>
                <li className='end-btn'><i class="fa-solid fa-angle-right"></i></li>
            </ul>

        </div>
    )
}