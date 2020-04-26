import React from 'react';

const Experience = (props) => (
  <div className = "Experience">
    <div className = "Experience-container">
      {
        props.data.map((exp, index) => (
          <div key = {index} className = "Experience-item">
          <h2>{exp.company}</h2>
          <p>{exp.jobTitle}</p>
          <p>{exp.jobDescription}</p>
        </div>
        ))
      }
    </div>
  </div>
);

export default Experience;