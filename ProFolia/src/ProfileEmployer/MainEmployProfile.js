import React, {useState} from "react";
import './EmployProfile.css';






function MainEmployProfile() {
    const [name, setName] = useState('John Doe'); // Initialize the user's name
    const [image, setImage] = useState('https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg'); // Initialize the profile pic
    
    
    // This function handles the click event of the edit button
    function handleEdit() {
      const newName = prompt('Enter a new name'); // Display a prompt to enter a new name
      if (newName) {
        setName(newName); // Update the user's name
      }
    }

    

    

  // This function handles the change event of the file input
    function handleImageChange(event) {
        const file = event.target.files[0]; // Get the selected file
        const reader = new FileReader(); // Create a FileReader object
        reader.readAsDataURL(file); // Convert the file to base64 string
        reader.onload = () => {
        setImage(reader.result); // Update the profile pic
    }
}
  
    return (
      <div className="container">
        <div className="rectangle1"></div>
        <div className="rectangle2" style={{display:'flex', justifyContent:'center'}}>
          <div className="applied-jobs" style={{display:'flex', justifyContent:'flex-start', flexDirection:'column', alignItems:'center'}}>
            
            <div className="list-jobs" style={{display:'flex'}}>
              <div style={{ width: 70, height: 70, borderRadius: '10rem', backgroundColor: '#ccc', overflow: 'hidden', margin:"15px" }}>
                  <img src={image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> {/* Display the profile pic */}
              </div>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&family=Montserrat&display=swap');
              </style>
              <h1 style={{color:'black', fontFamily:'Montserrat', fontSize:'25px'}}>Front End • Intern</h1>
            </div>

            <div className="list-jobs" style={{display:'flex'}}>
              <div style={{ width: 70, height: 70, borderRadius: '10rem', backgroundColor: '#ccc', overflow: 'hidden', margin:"15px" }}>
                  <img src={image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> {/* Display the profile pic */}
              </div>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&family=Montserrat&display=swap');
              </style>
              <h1 style={{color:'black', fontFamily:'Montserrat', fontSize:'25px'}}>Back End • Intern</h1>
            </div>

            <div className="list-jobs" style={{display:'flex'}}>
              <div style={{ width: 70, height: 70, borderRadius: '10rem', backgroundColor: '#ccc', overflow: 'hidden', margin:"15px" }}>
                  <img src={image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> {/* Display the profile pic */}
              </div>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&family=Montserrat&display=swap');
              </style>
              <h1 style={{color:'black', fontFamily:'Montserrat', fontSize:'25px'}}>Software Developer • Full-Time</h1>
            </div>
          </div>
          
        </div>
        <div className="profile-round">
            <div style={{ width: 150, height: 150, borderRadius: '2rem', backgroundColor: '#ccc', overflow: 'hidden' }}>
                <img src={image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> {/* Display the profile pic */}
            </div>
        </div>
        <div>
            <button id="upload-butt">
                <label htmlFor="upload-btn">
                    {/* Display the upload button */}
                    <input type="file" id="upload-btn" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                    Edit Picture
                </label>
            </button>
        </div>
        
        <div className="profile-round2" style={{color:'black'}}>{name}</div>
        <div className="butt-edit"><button onClick={handleEdit} className="edit-butt">Edit Name</button></div> {/* Display the edit button */}
        <div><button className="addJob-butt">Add Job</button></div> {/* Display the edit button */}


        
        
      </div>

    );
  }
  
  export default MainEmployProfile;


 