import { useEffect } from 'react';
import './pagination.css';

export const Pagination = ({currentPage, setCurrentPage, products}) => {

    // const [currentPage, setCurrentPage] = useState('');
    const recordsPerPage = 2; 
    const lastIndex = currentPage * recordsPerPage;
    const firstindex = lastIndex - recordsPerPage;
    const records = products.slice(firstindex, lastIndex);
    const npage = Math.ceil(products.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    // console.log(records);

    const prevPage = () => {
        if(currentPage-1 !== 0){
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
    }
    const changeCurrentPage = (page) => {
        setCurrentPage(page);
    }
    useEffect(() => {
        setCurrentPage(1);
    }, []); // eslint-disable-line

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);// eslint-disable-line


    return(
        <div className="pagination">
            {/* eslint-disable-next-line  */}
            <ul role='list'>
                <li className='page-btn' onClick={prevPage}><i className="fa-solid fa-angle-left"></i></li>
                
                {numbers.map((n, i) => (
                    <li className={currentPage === n ? 'active' : '' } 
                    onClick={() => changeCurrentPage(n)}
                    key={i}
                        >
                        {n}
                    </li>
                    
                ))}
                <li className='page-btn' onClick={nextPage}><i className="fa-solid fa-angle-right"></i></li>
            </ul>

        </div>
    )
}