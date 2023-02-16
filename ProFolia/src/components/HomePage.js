import Navbar from './Navbar'
import Footer from './Footer'
import Searchbar from './Searchbar'
import coverPic from '/Users/tanyaso/Documents/TIFS-soen341project2023/ProFolia/src/img/Mainpage.jpeg'
import './HomePage.css'



function HomePage(){
    return(
        <div>
            <Navbar/>
            {/* <div class="wrapper" id="container">
                <img src="https://turing.com/blog/wp-content/uploads/2021/03/4203236-scaled.jpg" className="MainPage"></img>
                <div id="abc"><center>This is my div!</center></div>
                
            </div> */}
            
            <div class="container">
                <img src={coverPic} id="imageCover"></img>
                <div class="overlay"><Searchbar/></div>
            </div>


            <Footer/>
        </div>
    )
}

export default HomePage;