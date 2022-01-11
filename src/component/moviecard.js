import React from 'react'
import {Card} from 'react-bootstrap'
import Rate from './rating' 
function moviecard({movie}) {
    return (
        <div>
           <Card >
            <div className='headacke'>
            <Card.Img className='cardcontenu' variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title className='cardcontenu'>{movie.name}</Card.Title>
                <Card.Text className='cardcontenu'>{movie.Description} </Card.Text>
                <Card.Text className='cardcontenu'>episodes:{movie.episodes} </Card.Text>
                <Card.Text className='cardcontenu'>Season:{movie.Season} </Card.Text>
                <Card.Text className='cardcontenu'><Rate rating={movie.rating}/> </Card.Text>
            </Card.Body>
            </div>
            
            </Card> 
        </div>
    )
}

export default moviecard
