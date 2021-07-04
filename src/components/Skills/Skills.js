
// Front End
import html from '../../Assets/html5.png'
import css from '../../Assets/css3.png'
import js from '../../Assets/javascript.png'
import sass from '../../Assets/sass.png'
import react from '../../Assets/react.png'

// Back End
import Node from '../../Assets/nodejs.png'
import express from '../../Assets/express.png'
import mongo from '../../Assets/mongodb.png'
import mongoose from '../../Assets/mongoose.png'

// tools 
import git from '../../Assets/git.png'
import github from '../../Assets/github.png'
import npm from '../../Assets/npm.png'
import jest from '../../Assets/jest.png'

import { useState } from 'react'


function Skills() {
    return (
        <div className='skills' id='skill'>

            <div className='text box'>
                <h1>
                    Skills:
                </h1>
            </div>

            <div className='frontend box'>
                <h2>
                    Front End : 
                </h2>
                <div className='imgs'>
                    <div className='container'>
                        <img className='pic' src={html} />
                        <h3 className='txt'>HTML</h3>
                    </div>
                    <div className='container'>
                        <img src={css} />
                        <h3 className='txt'>CSS</h3>
                    </div>
                    <div className='container'>
                        <img src={js} />
                        <h3 className='txt'>JavaScript</h3>
                    </div>
                    <div className='container'>
                        <img src={sass} />
                        <h3 className='txt'>Sass</h3>
                    </div>
                    <div className='container'>
                        <img src={react} />
                        <h3 className='txt'>React</h3>
                    </div>
                </div>
            </div>

            <div className='backend box'>
                <h2>
                    Back End : 
                </h2>
                <div className='imgs'>
                    <div className='container'>
                        <img src={Node} />
                        <h3 className='txt'>Node JS</h3>
                    </div>
                    <div className='container'>
                        <img id='express' src={express} />
                        <h3 className='txt'>Express</h3>
                    </div>
                    <div className='container'>
                        <img src={mongo} />
                        <h3>Mongo DB</h3>
                    </div>
                    <div className='container'>
                        <img id='mongoose' src={mongoose} />
                        <h3>Mongoose</h3>
                    </div>
                </div>
            </div>

            <div className='tools box'>
                <h2>
                    Tools : 
                </h2>
                <div className='imgs'>
                    <div className='container'>
                        <img id='git' src={git} />
                        <h3>Git</h3>
                    </div>
                    <div className='container'>
                        <img src={github} />
                        <h3>GitHub</h3>
                    </div>
                    <div className='container'>
                        <img src={npm} />
                        <h3>npm</h3>
                    </div>
                    <div className='container'>
                        <img src={jest} />
                        <h3>Jest</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills