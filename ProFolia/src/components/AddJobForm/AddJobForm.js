import { useState } from 'react';
import './AddJobForm.css';
// import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextArea] = useState ("Description of the job");
  const [jobType, setJobType] = useState ();
  const [requirements, setReq] = useState ("Requirements of the job");
  const [responsibility, setRespo] = useState ("What does a day-to-day look like?");


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))

    const description = event.target.description;
    setTextArea(description)

    const type = event.target.type;
    setJobType(type)

    const req = event.target.req;
    setReq(req)

    const respo = event.target.respo;
    setRespo(respo)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{padding: "20px", paddingLeft: "50px"}}><label  className='JobPosition'>Job Position Title:
      <input 
        className="textJob"
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label></div>
      <div style={{padding: "20px", paddingLeft: "50px"}}>
        <select type={jobType} onChange={handleChange} id="jobType">
            <option type="Full Time">Full Time</option>
            <option type="Part Time">Part Time</option>
            <option type="Freelance">Freelance</option>
            <option type="Contract">Contract</option>
        </select>
      </div>
      <div style={{padding: "20px", paddingLeft: "50px"}}><label>Location: 
        <input 
          className="textJob"
          type="text" 
          name="location" 
          value={inputs.location || ""} 
          onChange={handleChange}
        />
        </label></div>
        <div style={{padding: "20px", paddingLeft: "50px"}}>
            <textarea className="textJob" description={textarea} onChange={handleChange} placeholder=" Job Description"/>
        </div>
        <div style={{padding: "20px", paddingLeft: "50px"}}>
            <textarea className="textJob" req={requirements} onChange={handleChange} placeholder=" Job Requirements"/>
        </div>
        <div style={{padding: "20px", paddingLeft: "50px"}}> 
            <textarea className="textJob" respo={responsibility} onChange={handleChange} placeholder=" What does a day-to-day look like?"></textarea>
        </div>
        <input style={{marginLeft: "50px"}}type="submit" className="submit"/>
    </form>
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

export default MyForm;