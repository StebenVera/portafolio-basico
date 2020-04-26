import React from 'react';

const Certificates = (props) => (
  <div className = "Certificates">
    <div className = "Certificates-container">
      {
        props.data.map((certificate, index) => (
          <div key = {index} className = "Certificates-item">
          <h3>{certificate.name}</h3>
          <p>{certificate.description}</p>
          <p>{certificate.institution}</p>
          <p>{certificate.date}</p>
        </div>
        ))
      }
    </div>
  </div>
)

export default Certificates;