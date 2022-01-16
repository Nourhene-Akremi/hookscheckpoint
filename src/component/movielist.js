import React from 'react'
import MovieCard from './moviecard'
import Rating from './rating'
function movielist({movieList,search,rating}) {
    return (
        <div className='movieList'>
            {
             movieList.filter(el=>el.name.includes(search.toUpperCase().trim())&& el.rating>=rating)
            .map((el,key) =><MovieCard key={el.id} movie={el}/>)
            }
 
        </div>
    )
}

export default movielist
