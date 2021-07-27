import img from '../../Assets/arrowDown.svg'
import Arr from './ProjectsArr'
import { useState } from 'react'

function Projects() {
    const [current, setCurrent] = useState(0)
    const length = Arr.length

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    return (
        <div className='Projects' id='projects'>
            <div className='head'>
                <img src={img} alt='Down Arrow' />

                <h1>
                    Projects
                </h1>
            </div>

            <div className='content'>
                <div className='left arrow'>
                    <p onClick={prev}>
                        &larr;
                    </p>
                </div>

                <div className='carousel'>

                    {Arr.map((el, i) => {
                        return (
                            <div id='el' className={i === current ? 'active' : 'slide'} key={i}>
                                {i === current && (<p>{el.name}</p>)}
                                {i === current && (<p id='text'>{el.link}</p>)}
                            </div>
                        )
                    })}

                    {/* <div className='project' id='one'>
                        <div className='title'>
                            <h1>
                                Babylon
                            </h1>
                            <p>
                                An Acorn inspired Brokerage type website showcasing my 
                                Front-End Skills. Build using React and Sass; 
                                fully responsive.
                            </p>
                        </div>
                            
                        <div className='links'>
                            <button>
                                <a 
                                href='https://babylon123.herokuapp.com/'
                                target='_blank'
                                rel="noopener noreferrer"
                                >
                                    See Project
                                </a>
                            </button>
                            
                            <button>
                                <a 
                                href='https://github.com/rabtennamgyal/babylon'
                                target='_blank'
                                rel="noopener noreferrer"
                                >
                                See Code
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className='project' id='two'>
                        <div className='title'>
                            <h1>
                                E-Commerce
                            </h1>
                            <p>
                                An Acorn inspired Brokerage type website showcasing my 
                                Front-End Skills. Build using React and Sass; 
                                fully responsive.
                            </p>
                        </div>
                            
                        <div className='links'>
                            <button>
                                <a 
                                href='https://e-com-fas.herokuapp.com/'
                                target='_blank'
                                rel="noopener noreferrer"
                                >
                                    See Project
                                </a>
                            </button>
                            
                            <button>
                                <a 
                                href='https://github.com/rabtennamgyal/e-com-fashion'
                                target='_blank'
                                rel="noopener noreferrer"
                                >
                                See Code
                                </a>
                            </button>
                        </div>
                    </div> */}
                </div>
                
                <div className='right arrow'>
                    <p onClick={next}>
                        &rarr;
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects


