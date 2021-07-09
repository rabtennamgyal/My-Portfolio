import { Link } from 'react-scroll'

function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li className='home'>Home</li>
                <Link
                    activeClass='active'
                    to='skill'
                    smooth={true}
                    duration={1000}
                >
                    <li className='skill'>Skills</li>
                </Link>
                <Link
                    activeClass='active'
                    to='projects'
                    smooth={true}
                    duration={1000}
                >
                    <li className='projects'>Projects</li>
                </Link>
                
                <li className='about'>About</li>
                <li className='contact'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar