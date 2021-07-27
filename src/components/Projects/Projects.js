import img from '../../Assets/arrowDown.svg'

function Projects() {

    const one = document.getElementsByClassName('project one')

    const log = () => {
        console.log(one)
    }

    return (
        <div className='Projects' id='projects'>
            <div className='head'>
                <img src={img} />
                <h1>
                    Projects
                </h1>
            </div>
            <div className='content'>
                <div className='left arrow'>
                    <p onClick={log}>
                        &larr;
                    </p>
                </div>

                <div className='carousel'>

                    {/* Project One*/}
                    <div className='project one'>
                        <div className='title'>
                            <h1>
                                Babylon 
                            </h1>
                            <p>
                                An 
                                    <a href='https://www.acorns.com/' target='_blank' id='acorn'>
                                    Acorn
                                    </a> 
                                inspired Brokerage type website showcasing my 
                                Front-End Skills. Build using React and Sass; 
                                fully responsive.
                            </p>
                        </div>
                        <div className='links'>
                            <button>
                                <a 
                                href='https://babylon123.herokuapp.com/'
                                target='_blank'
                                >
                                    See Project
                                </a>
                            </button>
                            
                            <button>
                                <a 
                                href='https://github.com/rabtennamgyal/babylon'
                                target='_blank'
                                >
                                See Code
                                </a>
                            </button>
                        </div>
                    </div>
                    
                    {/* Project Two*/}
                    <div className='project two'>
                        <div className='title'>
                            <h1>
                                E-Commerce
                            </h1>
                            <p>
                                An E-commerce site build using React.
                            </p>
                        </div>
                        <div className='links'>
                            <button>
                                <a 
                                href='https://e-com-fas.herokuapp.com/'
                                target='_blank'
                                >
                                    See Project
                                </a>
                            </button>
                            
                            <button>
                                <a 
                                href='https://github.com/rabtennamgyal/e-com-fashion'
                                target='_blank'
                                >
                                See Code
                                </a>
                            </button>
                        </div>
                    </div>

                </div>
                
                <div className='right arrow'>
                    <p>
                        &rarr;
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects