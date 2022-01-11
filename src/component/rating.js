import React from 'react'

function rating({rating,setrating}) {
  const rates=[1,2,3,4,5]
    return (
        <div>
            {rates.map((el)=><span onClick={()=>{setrating(el)}}>
            {el<= rating ?(<i class="fas fa-star"></i>) : (<i class="far fa-star"></i>)}
            </span>
            )}
           
            </div>
    )
}

export default rating 
