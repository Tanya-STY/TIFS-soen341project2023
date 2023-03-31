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

  const [postings, setPostings] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [requirement, setRequirement] = useState('');
  const [dayToDay, setDayToDay] = useState('');

  const addPosting = () => {
    const newPosting = {
      id: Date.now(),
      title,
      location,
      description,
      requirement,
      dayToDay
    };
    setPostings([...postings, newPosting]);
    setTitle();
    setLocation('');
    setDescription('');
    setRequirement('');
    setDayToDay('');
    
  };

  const deletePosting = (id) => {
    const updatedPostings = postings.filter(posting => posting.id !== id);
    setPostings(updatedPostings);
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    addPosting();
    setIsEditing(false);
  };

 
  
  const handleClick = () => {
    setIsEditing(true);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setIsEditing(false);
  // };

  


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
    <div><button className="addJob-butt" onClick={handleClick}>Add Job</button></div> {/* Display the edit button */}
    <div className="profile-head">
    </div>
    <div className="profile-head" style={{marginTop:'5px'}}>
    </div>
    
    
    <div className="job-list">
        <>
        <div className="one-job">
        <div className="form-wrapper">
            <div className="form-values">
                  {postings.map(posting => (
                   
                <div key={posting.id} className="newJob-list">
                  <div><h2 style={{marginBottom:'10px'}}>{posting.title}</h2></div>
                  <div>{posting.location}</div>
                  <div style={{textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden', maxWidth:'80%'}}>{posting.description}</div>
                  <div style={{textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden', maxWidth:'80%'}}>{posting.requirement}</div>
                  <div style={{textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden', maxWidth:'80%'}}>{posting.dayToDay}</div>
                  <div><button onClick={() => deletePosting(posting.id)}>Delete</button></div>
                  <div><button>Edit</button></div>
                </div>
              ))}
            </div>
            <div>
            
            </div>
            

        </div>
        {isEditing && (
            <div className="overlay" style={{opacity:'1'}}>
            <div className="form-popup">
                <form onSubmit={handleSubmit2}>
                {/* <label>
                    Position Title:
                    <input
                    type="text"
                    name="positionTitle"
                    value={formValues.positionTitle}
                    onChange={handleChange}
                    />
                </label> */}
                <label>
                  Position Title:
                  <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </label>
                <label>
                    Location:
                    <input
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    />
                </label>
                <label>
                    Job Description:
                    <textarea
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    />
                    
                </label>
                <label>
                    Job Requirements:
                    <textarea
                    type="text"
                    value={requirement}
                    onChange={(event) => setRequirement(event.target.value)}
                    />
                </label>
                <label>
                    Day-to-Day:
                    <textarea
                    type="text"
                    value={dayToDay}
                    onChange={(event) => setDayToDay(event.target.value)}
                    />
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
