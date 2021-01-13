import React from 'react';
import '../.././assets/css/pagination/Pagination.css';

const paginate = () => {
    return (
        <ul className="pagination">
            <li className="pagination-item current">
                <button>1</button>
            </li>
            <li className="pagination-item">
                <button>2</button>
            </li>
            <li className="pagination-item">
                <button>3</button>
            </li>
            <li className="pagination-item">
                <button>4</button>
            </li>
            <li className="pagination-item">
                <button>5</button>
            </li>
            <li className="pagination-item">
                <button>6</button>
            </li>
            <li className="pagination-item">
                <button>&gt&gt</button>
            </li>
        </ul>
    );
}

export default paginate;