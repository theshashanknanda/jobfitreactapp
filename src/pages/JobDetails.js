import React from 'react'
import marker from '../img/marker.png'
import clock from '../img/clock.png'
import dollar from '../img/dollar.png'
import './JobDetails.css'

const JobDetails = () => {
  return (
    <div>
      <div className='bg-[#0281A7] flex flex-col justify-center items-center p-4 py-12'>
        <h1 className='text-white font-semibold text-3xl text-center'>Job Details: Front End Developer</h1>
        <p className='text-white text-xl font-medium py-4'>UIColony Pvt Ltd</p>
        <div className='flex gap-8'>
            <div className='flex items-center gap-2 text-white'>
                <img src={marker} alt='marker'/>
                <p>Toronto, ON</p>
            </div>
            <div className='flex items-center gap-2 text-white'>
                <img src={clock} alt='marker'/>
                <p>3-6 Years</p>
            </div>
            <div className='flex items-center gap-2 text-white'>
                <img src={dollar} alt='marker'/>
                <p>80k-90k</p>
            </div>
        </div>
      </div>

      <div className='container w-[80%] mx-auto'>
        <button className='bg-[#6D01B6] py-3 px-6 rounded-lg text-white font-semibold ml-3 mt-6 mb-6'>AUTO APPLY</button>

        <div>
            <h2 className='font-semibold p-4'>About this role</h2>
            <p className='container pl-4 pr-4 w-[80vw]'>
            We are seeking a skilled and passionate Front-End Developer to join our dynamic team in Toronto. As a Front-End Developer, you will work closely with our UX/UI designers, backend developers, and product managers to build intuitive, responsive, and visually stunning web applications. Your work will directly impact the user experience of our clients, ensuring our platform is accessible, functional, and engaging.
            </p>
        </div>

        <div>
            <h2 className='font-semibold p-4'>Qualifications</h2>
            <p className='pl-4 pr-4 w-[80vw]'>
            Proficiency in HTML5, CSS3, and JavaScript/TypeScript.
            Experience with modern front-end frameworks like React, Angular, or Vue.js.
            Familiarity with CSS preprocessors like SASS or LESS.
            Knowledge of RESTful APIs and integration with backend services.
            Familiarity with version control systems, particularly Git/GitHub.
            Experience with performance optimization and responsive desig
            </p>
        </div>

        <div>
            <h2 className='font-semibold p-4'>Responsibilities</h2>
            <p className='pl-4 pr-4 w-[80vw]'>
            Develop, test, and maintain high-quality, scalable, and maintainable front-end code.
            Collaborate with designers to ensure the technical feasibility of UI/UX designs.
            Optimize web applications for performance, speed, and scalability.
            Ensure cross-browser compatibility and mobile responsiveness.
            Implement and maintain reusable components and libraries.
            </p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default JobDetails
