import logo from '../assets/logo.svg'

export default function NavBar() {
    return (
        <header className='bg-accenture-700 py-2'>
            <div className='container flex items-center justify-between'>
            <a className='block' href='#'>
                <img src={logo} alt='Accenture Brand' />
            </a>
            <nav>
                <ul className='flex'>
                <li>
                    <a href='#' className='py-2 px-4 text-white font-bold text-sm block'>Services</a>
                </li>
                <li>
                    <a href='#' className='py-2 px-4 text-white font-bold text-sm block'>Industries</a>
                </li>
                <li>
                    <a href='#' className='py-2 px-4 text-white font-bold text-sm block'>Cases</a>
                </li>
                <li>
                    <a href='#' className='py-2 px-4 text-white font-bold text-sm block'>Contact</a>
                </li>
                </ul>
            </nav>
            <div>
                <a href='#' className='py-2 px-4 bg-white rounded-3xl font-bold text-sm block'>Let's talk</a>
            </div>
            </div>
        </header>
    )
}
