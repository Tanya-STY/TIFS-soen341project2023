import React, {useState} from "react";
import './StudProfile.css';






function MainStudProfile() {
  const [name, setName] = useState('John Doe'); // Initialize the user's name
  const [image, setImage] = useState('https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg'); // Initialize the profile pic
    
    
    // This function handles the click event of the edit button
    function handleEdit() {
      const newName = prompt('Enter a new name'); // Display a prompt to enter a new name
      if (newName) {
        setName(newName); // Update the user's name
      }
    }

    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState("");
    const [uploadDate, setUploadDate] = useState("");
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
      setTitle(event.target.files[0].name.substring(0, 80));
      setUploadDate(new Date().toLocaleString());
    };
  
    const handleDownload = () => {
      const url = URL.createObjectURL(selectedFile);
      window.open(url, '_blank');
      console.log("Downloading file...");
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
              <h1 style={{color:'black', fontFamily:'Montserrat', fontSize:'25px'}}>Pratt and Whitney • </h1>
            </div>
            
            <div className="list-jobs" style={{display:'flex'}}>
              <div style={{ width: 70, height: 70, borderRadius: '10rem', backgroundColor: '#ccc', overflow: 'hidden', margin:"15px" }}>
                  <img src={image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> {/* Display the profile pic */}
              </div>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&family=Montserrat&display=swap');
              </style>
              <h1 style={{color:'black', fontFamily:'Montserrat', fontSize:'25px'}}>Pratt and Whitney • </h1>
            </div>

            <div className="list-jobs" style={{display:'flex'}}>
              <div style={{ width: 70, height: 70, borderRadius: '10rem', backgroundColor: '#ccc', overflow: 'hidden', margin:"15px" }}>
                  <img src={image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> {/* Display the profile pic */}
              </div>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&family=Montserrat&display=swap');
              </style>
              <h1 style={{color:'black', fontFamily:'Montserrat', fontSize:'25px'}}>Pratt and Whitney • </h1>
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
        <div className="butt-download"><button onClick={handleDownload} disabled={!selectedFile} className="downlaod-butt" style={{height:'30px', width:'130px', zIndex:'1', borderRadius:'0.8rem', position:'absolute', marginLeft:'325px', marginTop:'180px'}}>Download CV</button></div> {/* Display the edit button */}
        <div classNam="upload-cv" style={{height:'200px', width:'200px', zIndex:'1', position:'absolute', marginLeft:'550px', marginTop:'150px'}}>
          <input type="file" onChange={handleFileChange} />
          {selectedFile && (
            <div className="file-info">
              {/* <p>{title}</p> */}
              <p>{uploadDate}</p>
            </div>
          )}
          {/* <button onClick={handleDownload} disabled={!selectedFile}>
            Download
          </button> */}
        </div>
         
      </div>

    );
  }
  
  export default MainStudProfile;


 
