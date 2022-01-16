import React from 'react'
import './details.css';


function details({list,match}) {
    const Found=list.find((el)=>el.id==match.params.id)
    return (
        <div className='bodyOpacity'>
            
            <span className='detailsImage'><img src={Found.image} alt="pictures" /></span> 
           <h1 className='detailsname'>{Found.name}</h1> 
           <span className='detailsDescription'>{Found.Description}</span> 
           <span className='detailsepisodes'>Episodes : {Found.episodes}</span> 
           <span className='detailsSeason'>Season : {Found.Season}</span> 
           {/* <button className='detailsbtn' onClick={()=>list.history.push('/')} >Home</button> */}
           

        </div>
    )
}

export default details
