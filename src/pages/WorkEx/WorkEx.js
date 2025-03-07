import React from 'react'
import './WorkEx.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";


const WorkEx = () => {
  return (
    <>
       <div className='container WorkEx'>
            <div className='work-exp'>
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    WORK EXPERIENCE DETAILS
                </h2>
                <hr />
                <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                     contentStyle={{ background: 'white', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2018-2019"
                    iconStyle={{ background: '#223ca4', color: 'white' }}
                    icon={<FaReact />}
                    >
                    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                    <h5 className="vertical-timeline-element-subtitle" >XYZ, Pvt Ltd</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                     contentStyle={{ background: 'white', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2019-Present"
                    iconStyle={{ background: '#223ca4', color: 'white' }}
                    icon={<FaFileCode />}
                    >
                    <h3 className="vertical-timeline-element-title">MERN Stack Developer</h3>
                    <h5 className="vertical-timeline-element-subtitle" >GG & PG, Pvt</h5>
                </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
       </div>
    </>
  )
}

export default WorkEx