import React, { useState } from "react";
import JobPostingForm from "./JobPostingForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function JobPosting({ jobs, completeJob, removeJob, updateJob }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateJob(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <JobPostingForm edit={edit} onSubmit={submitUpdate} />;
  }

  return jobs.map((job, index) => (
    <div
      className={job.isComplete ? "job-row complete" : "job-row"}
      key={index}
    >
      <div key={job.id} onClick={() => completeJob(job.id)}>
        {job.text}
      </div>

      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeJob(job.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: job.id, value: job.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default JobPosting;
