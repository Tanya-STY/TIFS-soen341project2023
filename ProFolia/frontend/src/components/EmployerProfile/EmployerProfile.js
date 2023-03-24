import React, { useState } from "react";
// import { IconContext } from "react-icons";
// import { FaEdit } from "react-icons/fa";
import './EmployerProfile.css';


function EmployerProfile() {
    const [name, setName] = useState('John Doe'); // Initialize the user's name
    const [image, setImage] = useState('https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg'); // Initialize the profile pic
  const [isEditing, setIsEditing] = useState(false);

  const [formValues, setFormValues] = useState({
    positionTitle: "Intern",
    location: "Montreal",
    jobDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
    jobRequirements: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
    dayToDay: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem "
  });


  const [formValues2, setFormValues2] = useState({
    positionTitle2: "Web Developer",
    location2: "Ottawa",
    jobDescription2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
    jobRequirements2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
    dayToDay2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem "
  });

  

 
  
  const handleClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };


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



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }
      ));
    setFormValues2((prevValues2) => ({
      ...prevValues2,
      [name]: value,
    }
    ));
  }
  
  ;

  return (
    <div>
     <div className="profile-round">
        <div style={{ width: 150, height: 150, borderRadius: '2rem', backgroundColor: '#ccc', overflow: 'hidden' }}>
            <img src={image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> {/* Display the profile pic */}
        </div>
    </div>
    <div className="company-name">{name}</div>
    <div className="edit-button"><button className="edit-button" onClick={handleEdit}>Edit Name</button></div>
    <div>
    <button id="upload-butt">
                <label htmlFor="upload-btn">
                    {/* Display the upload button */}
                    <input type="file" id="upload-btn" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                    Edit Picture
                </label>
            </button>
    </div>
    <div><button className="addJob-butt">Add Job</button></div> {/* Display the edit button */}
    <div className="profile-head">
    </div>
    <div className="profile-head" style={{marginTop:'5px'}}>
    </div>
    
    
    <div className="job-list">
        <>
        <div className="one-job">
        <div className="form-wrapper">
            <div className="form-values">
            <p>Position Title: {formValues.positionTitle}</p>
            <p>Location: {formValues.location}</p>
            <p className="job-descrip">Job Description: {formValues.jobDescription}</p>
            <p className="job-descrip">Job Requirements: {formValues.jobRequirements}</p>
            <p className="job-descrip">Day-to-Day: {formValues.dayToDay}</p>
            </div>
            <div>
            <button className="edit-icon" onClick={handleClick}>
            Edit
            </button>
            </div>
            

        </div>
        {isEditing && (
            <div className="overlay">
            <div className="form-popup">
                <form onSubmit={handleSubmit}>
                <label>
                    Position Title:
                    <input
                    type="text"
                    name="positionTitle"
                    value={formValues.positionTitle}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Location:
                    <input
                    type="text"
                    name="location"
                    value={formValues.location}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Job Description:
                    <textarea
                    name="jobDescription"
                    value={formValues.jobDescription}
                    onChange={handleChange}
                    ></textarea>
                    
                </label>
                <br />
                <label>
                    Job Requirements:
                    <textarea
                    name="jobRequirements"
                    value={formValues.jobRequirements}
                    onChange={handleChange}
                    ></textarea>
                </label>
                <br />
                <label>
                    Day-to-Day:
                    <textarea
                    name="dayToDay"
                    value={formValues.dayToDay}
                    onChange={handleChange}
                    ></textarea>
                </label>
                <br />
                <button type="submit">Save</button>

                </form>
            </div>
            </div>
        )}
        </div>
        </>
        <>
        <div className="one-job">
        <div className="form-wrapper">
            <div className="form-values">
            <p>Position Title: {formValues2.positionTitle2}</p>
            <p>Location: {formValues2.location2}</p>
            <p className="job-descrip">Job Description: {formValues2.jobDescription2}</p>
            <p className="job-descrip">Job Requirements: {formValues2.jobRequirements2}</p>
            <p className="job-descrip">Day-to-Day: {formValues2.dayToDay2}</p>
            </div>
            <div>
            <button className="edit-icon" onClick={handleClick}>
            Edit
            </button>
            </div>
            

        </div>
        {isEditing && (
            <div className="overlay">
            <div className="form-popup">
                <form onSubmit={handleSubmit}>
                <label>
                    Position Title:
                    <input
                    type="text"
                    name="positionTitle2"
                    value={formValues2.positionTitle2}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Location:
                    <input
                    type="text"
                    name="location2"
                    value={formValues2.location2}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Job Description:
                    <textarea
                    name="jobDescription2"
                    value={formValues2.jobDescription2}
                    onChange={handleChange}
                    ></textarea>
                    
                </label>
                <br />
                <label>
                    Job Requirements:
                    <textarea
                    name="jobRequirements2"
                    value={formValues2.jobRequirements2}
                    onChange={handleChange}
                    ></textarea>
                </label>
                <br />
                <label>
                    Day-to-Day:
                    <textarea
                    name="dayToDay2"
                    value={formValues2.dayToDay2}
                    onChange={handleChange}
                    ></textarea>
                </label>
                <br />
                <button type="submit">Save</button>

                </form>
            </div>
            </div>
        )}
        </div>
        </>

    </div>
    </div>
  );
}

export default EmployerProfile;
