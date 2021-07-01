import me from '../../Assets/me.jpg'

function Intro() {
    return (
        <div className='Intro'>
            <div className='one'>
                <h1>
                    Rabten Samphel
                </h1>
                <h2>
                    Front-End Developer
                </h2>
            </div>

            <div className='two'>
                <img src={me} />
            </div>
        </div>
    )
}

export default Intro