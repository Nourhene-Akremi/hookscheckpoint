import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function moviecard({movie}) {
    return (
        <div>
           <Card >
            <div className='headacke'>
            <Card.Img className='cardcontenu' variant="top" src={movie.image} />
            <Card.Body>
            <Card.Title className='cardcontenu'>{movie.name}</Card.Title>
               <Link to ={`/details/${movie.id}`}><button>Details</button></Link> 
            </Card.Body>
            </div>
            
            </Card> 
            
        </div>
    )
}

export default moviecard
