import React from 'react'
import './Faq.css'

const Faq = () => {
  return (
    <div id='faq' className='landing w-[90vw] mx-auto pt-10'>
        <div className='font-semibold'>
            | FAQs
        </div>
      <div className='text-6xl py-8 font-extrabold'>
        What can we help you <br/> find?
      </div>

      <div className='faq questions flex gap-8 pt-8 pb-16'>
        <div className='col flex flex-col gap-4 w-[50%]'>
            <div className='border-t-2 border-[#6D01B6] pt-4'>
                <div className='font-semibold'>
                    What is JobFitAI?
                </div>
                <p>
                    JobFitAI is an AI-powered platform designed to help specially-abled individuals find tailored job opportunities by eliminating barriers and providing personalized support.
                </p>
            </div>

            <div className='border-t-2 border-[#6D01B6] pt-4'>
                <div className='font-semibold'>
                How does JobFitAI match jobs to my abilities?
                </div>
                <p>
                Our platform uses advanced AI algorithms and accessibility-focused assessments to understand your unique strengths and match them with suitable roles from our extensive job database.
                </p>
            </div>

            <div className='border-t-2 border-[#6D01B6] pt-4'>
                <div className='font-semibold'>
                    Is JobFitAI free to use?
                </div>
                <p>
                    Yes, JobFitAI is completely free for job seekers. We believe in creating equal opportunities for everyone without financial constraints.
                </p>
            </div>
        </div>

        <div className='col flex flex-col gap-4 w-[50%]'>
            <div className='border-t-2 border-[#6D01B6] pt-4'>
                <div className='font-semibold'>
                    What types of disabilities does JobFitAI support?
                </div>
                <p>
                    JobFitAI is designed to accommodate a wide range of disabilities, including mobility, sensory, and cognitive challenges. Our tools are inclusive and tailored to diverse needs.
                </p>
            </div>

            <div className='border-t-2 border-[#6D01B6] pt-4'>
                <div className='font-semibold'>
                    How does JobFitAI ensure data security?
                </div>
                <p>
                    We prioritize your privacy and use secure cloud storage to protect your data. Our systems comply with industry-standard security protocols.
                </p>
            </div>

            <div className='border-t-2 border-[#6D01B6] pt-4'>
                <div className='font-semibold'>
                    Can JobFitAI suggest remote job opportunities?
                </div>
                <p>
                    Yes! JobFitAI identifies both on-site and remote job opportunities to suit your preferences and needs.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
