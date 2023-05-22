import React from 'react'
import {project} from '../../portfolio'
import './Body.css'

const body = () => {
    return (
    <div className='card'>
    {project.map((project) => (
        <div className='card-body'>
            <h3 className='card-title'>{project.name}</h3>
            <p className='card-text'>{project.description}</p>
            <a href={project.homepage} className='card-link'>Link to project</a>
            <a href={project.repository} className='card-link'>Link to repository</a>
        </div>
    ))}
</div>
    )
}

    export default body