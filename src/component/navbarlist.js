import React from 'react'
const navbarlist = () => {
    return (
    <div className="bacgnav">
        <div className="mynavbar">
          <span className='logo'>MyAnimeList</span>
            <ul> 
               <div className="group">
                    <li className='icons' ><i class="fas fa-home"></i></li>
                    <li className='text' >Home</li>
                </div>
               <div className="group">
                    <li className='icons' ><i class="fas fa-film"></i></li>
                    <li className='text' >Anime</li>
                </div>
               <div className="group">
                    <li className='icons' ><i class="far fa-user-circle"></i></li>
                    <li className='text' >Profile</li>
                </div>
                <div className="group">
                    <li className='icons' ><i class="fas fa-sign-in-alt"></i></li>
                    <li className='text' >Sign In</li>
                </div>
            </ul>
        </div>
        </div>
    )
}

export default navbarlist
