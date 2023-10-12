import logo from '../assets/logo.svg'

export default function NavBar() {
    return (
        <header className='navbar'>
            <div className='container'>
            <a className='block' href='#'>
                <img src={logo} alt='Accenture Brand' />
            </a>
            <nav className='nav-menu'>
                <ul>
                    <li>
                        <a href='#services-section'>Services</a>
                    </li>
                    <li>
                        <a href='#' className='py-2 px-4 text-white font-bold text-sm block'>Industries</a>
                    </li>
                    <li>
                        <a href='#case-studies-section' className='py-2 px-4 text-white font-bold text-sm block'>Cases</a>
                    </li>
                    <li>
                        <a href='#footer' className='py-2 px-4 text-white font-bold text-sm block'>Contact</a>
                    </li>
                </ul>
            </nav>
            <div>
                <a href='#footer' className='py-2 px-4 bg-white rounded-3xl font-bold text-sm block'>Let's talk</a>
            </div>
            </div>
        </header>
    )
}
