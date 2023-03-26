import React, { useState } from 'react';
import './Posting.css';

const Posting = () => {
  const [postings, setPostings] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const addPosting = () => {
    const newPosting = {
      id: Date.now(),
      title,
      description,
      location
    };
    setPostings([...postings, newPosting]);
    setTitle('');
    setDescription('');
    setLocation('');
  };

  const deletePosting = (id) => {
    const updatedPostings = postings.filter(posting => posting.id !== id);
    setPostings(updatedPostings);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPosting();
  };

  return (
    <div>
      <h1>Postings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
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
        <button type="submit">Add Posting</button>
      </form>
      <ul>
        {postings.map(posting => (
          <li key={posting.id}>
            <h2>{posting.title}</h2>
            <p>{posting.description}</p>
            <p>{posting.location}</p>
            <button onClick={() => deletePosting(posting.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posting;
