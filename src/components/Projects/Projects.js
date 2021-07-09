import img from '../../Assets/arrowDown.svg'

function Projects() {
    return (
        <div className='Projects' id='projects'>
            <div className='head'>
                <img src={img} />
                <h1>
                    Projects
                </h1>
            </div>
            <div className='content'>
                {/* <div className='right'>
                    <p>
                        &rarr;
                    </p>
                </div> */}

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
                {/* <div className='project two'>
                    two
                </div>
                <div className='project three'>
                    three
                </div>
                <div className='project four'>
                    four
                </div> */}
                
                {/* <div className='left'>
                    <p>
                        &larr;
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default Projects