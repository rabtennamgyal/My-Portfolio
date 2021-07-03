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
                <li className='projects'>Projects</li>
                <li className='about'>About</li>
                <li className='contact'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar