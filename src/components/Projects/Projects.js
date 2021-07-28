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
                            <div className={i === current ? 'project active' : 'project slide'} key={i}>
                                <div className='title'>
                                    {i === current && (<h1>{el.name}</h1>)}
                                    {i === current && (<p>{el.text}</p>)}
                                </div>
                                <div className='links'>
                                    <button className={i === current ? 'show' : 'noshow'}>
                                        {i === current && (<a href={el.link} target='_blank' rel='noopener noreferrer'>See Project</a>)}
                                    </button>
                                    <button className={i === current ? 'show' : 'noshow'}>
                                        {i === current && (<a href={el.code} target='_blank' rel='noopener noreferrer'>See Code</a>)}
                                    </button>
                                </div>
                            </div>
                        )
                    })}
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


