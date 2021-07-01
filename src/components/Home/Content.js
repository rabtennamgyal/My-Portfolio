import img from '../../Assets/arrow.gif'

function Content() {
    return (
        <div className='content'>
            <div className='one'>
                <img src={img} />
            </div>

            <div className='two'>
                <h1>
                    Hello, my name is Rabten. It's a Tibetan name if you are wondering.
                    I have listed my skills and the tools I used below. I will let my projects
                    do most of the talking. If interested on my background
                    and about me in general, then please do check about😁. 
                </h1>
            </div>
        </div>
    )
}

export default Content