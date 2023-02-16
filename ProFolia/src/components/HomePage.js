import Navbar from './Navbar'
import Footer from './Footer'
import Searchbar from './Searchbar'
import coverPic from '/Users/tanyaso/Documents/TIFS-soen341project2023/ProFolia/src/img/Mainpage.jpeg'
import './HomePage.css'



function HomePage(){
    return(
        <div>
            <Navbar/>
            
            <div class="container">
                <img src={coverPic} id="imageCover"></img>
                <div class="overlay"><Searchbar/></div>
            </div>


            <Footer/>
        </div>
    )
}

export default HomePage;