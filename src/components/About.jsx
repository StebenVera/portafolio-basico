import React from 'react';
import Social from '../components/Social'
const About =  (props) => {
  console.log(props.avatar)
  return(
    <div className = "About">
      <div className = "About">
        <div className = "About-avatar">
          <figure>
            <img src={props.avatar} alt=""/>
          </figure>
        </div>
        <div className = "About-name">
          <h2>{props.name}</h2>
        </div>
        <div className = "About-profesion">
          <p>{props.profession}</p>
        </div>
        <div className = "About-des">
          <p>{props.bio}</p>
        </div>
        <div className = "About-location">
          <p>{props.address}</p>
        </div>
        <div className = "About-social">
          <Social social = {props.social}/>
        </div>
      </div>
    </div>
  )
}

export default About;