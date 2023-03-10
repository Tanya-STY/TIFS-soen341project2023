import React from 'react'
import CoverPic from '/Users/Mohamed/Desktop/SOEN 341/ProFolia/src/img/MainPage.png'
import './MainPage.css'
import NavBarMain from './NavBarMain'
import FooterMain from './FooterMain'




function MainPage(){
    return(
        <div>
            
            <NavBarMain/>
            <div class="container">
                <img src={CoverPic} id="imageCover"></img>
                {/* <div class="overlay"><Searchbar/></div> */}
            </div>
            <FooterMain/>
        </div>
    )
}

export default MainPage;