function Projects() {
    return (
        <div className='Projects' id='projects'>
            <div className='head'>
                <h1>
                    These are my projects
                </h1>
            </div>
            <div className='content'>
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
                            inspired brokerage type website showcasing my 
                            Front-End Skills. Build using React and Sass.
                        </p>
                    </div>
                    <div className='links'>
                        <a 
                            href='https://babylon123.herokuapp.com/'
                            target='_blank'
                            className='plink'
                        >
                            See Project
                        </a>
                        <a 
                            href='https://github.com/rabtennamgyal/babylon'
                            target='_blank'
                            className='plink'
                        >
                            See Code
                        </a>
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
            </div>
        </div>
    )
}

export default Projects