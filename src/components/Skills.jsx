import React from 'react';

const Skills = (props) => (
  <div className = "Skills">
    <div className = "Skills-container">
      {
        props.data.map((skill, index) => {
        return<div key = {index} className = "Skillzss-item">
          <h5>{skill.name}</h5>
          <div className = "Skills-line">
            <span>{skill.percentage}</span>
          </div>
        </div>
        })
      }
    </div>
  </div>
);

export default Skills;