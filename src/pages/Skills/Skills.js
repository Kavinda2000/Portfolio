import React from 'react'
import './Skills.css'
import { SkillsList } from '../../utils/SkillsList'



function Skills() {
  return (
    <>
        <div className='container skills'>
            <h2 className='skills-heading'>Skills</h2>
            <hr/>
            <p className='skills-content'>
            I am skilled in web development, specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I have experience in HTML, CSS, JavaScript, and backend technologies. Additionally, I have knowledge of cybersecurity, cloud computing, database management, 3D modeling, and telecommunications, allowing me to build efficient, secure, and scalable applications.
            </p>
        <div className='row'>
            {SkillsList.map(skill => (
                <div key={skill._id} className='col-md-3'>
                    <div className='card m-2'>
                        <div className='card-content'>
                            <div className='card-body'>
                                <div className='media d-flex justify-content-center'>
                                    <div className='alig-self-center'>
                                    <skill.icon className='skill-icon'/>
                                    </div>
                                    <div className='media-body'>
                                        <h5>{skill.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </>
  )
}

export default Skills