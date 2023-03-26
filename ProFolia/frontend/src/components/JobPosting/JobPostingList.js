import React, { useState } from "react";
import JobPosting from "./JobPosting";
import JobPostingForm from "./JobPostingForm";

function JobPostingList() {
  const [jobs, setJobs] = useState([]);

  const addjob = (job) => {
    if (!job.text || /^\s*$/.test(job.text)) {
      return;
    }

    const newJobs = [job, ...jobs];

    setJobs(newJobs);
  };

  const updateJob = (jobId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setJobs((prev) =>
      prev.map((item) => (item.id === jobId ? newValue : item))
    );
  };

  const removeJob = (id) => {
    const removeArr = [...jobs].filter((job) => job.id !== id);

    setJobs(removeArr);
  };

  const completeJob = (id) => {
    let updatedJobs = jobs.map((job) => {
      if (job.id === id) {
        job.isComplete = !job.isComplete;
      }
      return job;
    });
    setJobs(updatedJobs);
  };

  return (
    <div>
      <h1>Your Job Posting List</h1>
      <JobPostingForm onSubmit={addjob} />
      <JobPosting
        jobs={jobs}
        completeJob={completeJob}
        removeJob={removeJob}
        updateJob={updateJob}
      />
    </div>
  );
}

export default JobPostingList;
