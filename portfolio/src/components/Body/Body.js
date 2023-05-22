import React from 'react'
import {about, social} from '../../portfolio'
import './Body.css'

const Body = () => {
    const {name, description, image, linkedin, github} = about
    return (
        <div className='card'>
            <img src={image} alt='profile' className='card-image' />
            <h3 className='card-title'>Hi there my name is {name}</h3>
            <p className='card-text'>{description}</p>
            <div className='card-social'>
                    <a href={linkedin} className='card-link'>{linkedin}</a>
                    <a href={github} className='card-link'>{github}</a>
            </div>
        </div>
    )
}

export default Body