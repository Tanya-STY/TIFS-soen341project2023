import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import Searchbar from './Searchbar'
import HomePagePic from '/Users/Shamma/Desktop/web/ProFolia/frontend/src/img/HomePage.jpeg'
import './HomePage.css'


function HomePage(){
    return(
        <div>
            <Navbar/>
            
            <div class="container">
                <img src={HomePagePic} id="imageCover" alt={''}></img>
                {/* <div class="overlay"><Searchbar/></div> */}
            </div>

            <Footer/>
        </div>
    )
}

export default HomePage;