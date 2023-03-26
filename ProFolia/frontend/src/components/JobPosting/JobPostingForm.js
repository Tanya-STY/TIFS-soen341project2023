import React, { useState, useEffect, useRef } from "react";

function JobPostingForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
        {props.edit ? ( 
        <>
        <input
        type="text"
        placeholder="Update your job posting"
        value={input}
        name="text"
        className="job-input edit"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="job-button edit">Update</button> 
      </>
      ) : 
      ( 
      <>
      <input
        type="text"
        placeholder="Add a job posting (Company, Position and Location)"
        value={input}
        name="text"
        className="job-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="job-button">Add</button>
      </>
      )
      }
     
    </form>
  );
}

export default JobPostingForm;
