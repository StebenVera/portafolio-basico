import React from 'react';

const Education = (props) => (
  <div className = "Education">
    <div className = "Education-container">
      {props.data.map((edu, index) => (
            <div key = {`Edu-${index}`} className = "Education-item">
              <h3>{edu.degree}</h3>
              <p>{edu.description}</p>
            </div>
      ))}
    </div>
  </div>
);

export default Education;