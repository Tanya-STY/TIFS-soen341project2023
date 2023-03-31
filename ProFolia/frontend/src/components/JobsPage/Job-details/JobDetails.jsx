
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jobs from "../data/data";
import './JobDetails.css';


function JobDetails(){
  const { position } = useParams();

  const job = jobs.find((job) => job.position === position);

  const [showForm, setShowForm] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResumeChange = (e) => {
    setFile(e.target.files[0]);
  };

 
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append('fullName', fullName);
  //   formData.append('email', email);
  //   formData.append('file', file);

  //   fetch('http://localhost:3000/submit-form', {
  //     method: 'POST',
  //     body: formData
  //   })
  //     .then(response => response.text())
  //     .then(result => {
  //       console.log(result);
  //     })
  //     .catch(error => {
  //       console.error('Error submitting form: ', error);
  //     });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('position', job.position);
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('file', file);
    
      const response = await fetch('http://localhost:5000/jobs/:position', {
        method: 'POST',
        body: formData,
      });
    
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setShowForm(false);

    };


  

  return (
    <section>
      <div className="container">
        <div className="details__wrapper">
          <div className="details__top">
            <div>
              <h1>{job.company}</h1>
            </div>

            {/* <button>
              <Link to={job.companySite}>Company Site</Link>
            </button> */}
          </div>

          <div className="job__details">
            <div className="about__job">
              <div>
                <h6>
                  {job.postedAt} - {job.contract}
                </h6>
                <h1>{job.position}</h1>
                <span>{job.location}</span>
              </div>

              <button className="btn" onClick={handleApplyClick}>
                Apply
              </button>
            </div>

            <p className="job__desc">{job.desc}</p>
            <div className="requirements">
              <h1>Requirements</h1>
              <p>{job.requirements.reqTitle}</p>

              <ul className="requirement__item">
                {job.requirements.reqItem.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="responsibility">
              <h1>What you will do?</h1>
              <p>{job.responsibility.resTitle}</p>

              <ol type="1" className="responsibility__item">
                {job.responsibility.resItem.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="pop-upWindow" style={{opacity:"1"}}>
          <div className="form__wrapper">
            <form onSubmit={handleSubmit}>
              <div>
              <label htmlFor="name" className="formApply">Name</label>
              <input type="text" id="name" onChange={handleNameChange}/>
              </div>
              <div>
              <label htmlFor="email" className="formApply">Email</label>
              <input type="email" id="email" onChange={handleEmailChange}/>
              </div>
              <div>
              <label htmlFor="resume" className="formApply">Resume</label>
              <input type="file" id="resume" onChange={handleResumeChange}/>
              </div>
              <div>
              <button type="submit" className="formApply" onClick={handleSubmit}>Submit</button>
              <button className="close__btn" onClick={() => setShowForm(false)}>
              X
              </button>
              </div>
            </form>

            
            
          </div>
        </div>
      )}
    </section>
  );
};

export default JobDetails;
