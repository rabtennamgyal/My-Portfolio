
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
                    <img src={html} />
                    <img src={css} />
                    <img src={js} />
                    <img id='sass' src={sass} />
                    <img src={react} />
                </div>
            </div>

            <div className='backend box'>
                <h2>
                    Back End : 
                </h2>
                <div className='imgs'>
                    <img src={Node} />
                    <img id='express' src={express} />
                    <img src={mongo} />
                    <img id='mongoose' src={mongoose} />
                </div>
            </div>

            <div className='tools box'>
                <h2>
                    Tools : 
                </h2>
                <div className='imgs'>
                    <img src={git} />
                    <img src={github} />
                    <img src={npm} />
                    <img src={jest} />
                </div>
            </div>
        </div>
    )
}

export default Skills