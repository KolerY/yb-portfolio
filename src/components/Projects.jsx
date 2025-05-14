import React from 'react'
import { PROJECTS } from '../constants'
import { FaGithub } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projets</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-col lg:flex-row lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <img src={project.image} alt={project.title} className='mb-6 rounded' />
            </div>
            <div className='w-full max-w-xl lg:w-3/4 lg:ml-20'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                  {tech}
                </span>
              ))}
              <div className='mt-4 flex items-center'>
                <div className='ml-auto flex gap-4'>
                  {project.site && (
                    <a href={project.site} target="_blank" rel="noopener noreferrer">
                      <FaGlobe className='text-4xl text-white hover:text-neutral-400 transition' />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className='text-4xl text-white hover:text-neutral-400 transition' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects