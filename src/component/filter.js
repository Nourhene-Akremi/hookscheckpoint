import './filter.css';
import React from 'react'
import Rate from './rating'

function Filter ({setsearch, setrating, rating}) {
    return (
        <div className="serchRate">
            <div className="gather">
            <div className='serch'>
                <span className='serchicons'><i class="fas fa-search"></i></span>
                <input className='serchinput' type="text" placeholder='Welcome'
                onChange={ (e)=>setsearch((e.target.value))}/>
            </div>
            <Rate rating={rating} setrating={setrating}/>
        </div></div>
    )
}

export default Filter



