import './App.scss'
import logo from './assets/logo.svg'
import heroImage from './assets/hero-image.png'

function App() {

  return (
    <>
      <header className='bg-accenture-900 py-2'>
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
      <section className="hero-section h-[41vw] bg-cover" style={{backgroundImage: `url(${heroImage})`}}>
        <div className='container h-full relative'>
          <div className='w-5/12 absolute bottom-20'>
            <h1 className='text-white font-bold text-5xl mb-7'>Live with Confidence</h1>
            <p className='text-white text-xl mb-12'>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
            <a href='#' className='py-2.5 px-5 rounded-3xl bg-accenture-900 block w-fit text-sm font-bold'>View project</a>
          </div>
        </div>
      </section>
      <section className='section-wrapper'>
        <div className='container'>
          <div className='section-header'>
            <span className='subtitle text-2xl font-normal'>What we do</span>
            <h2 className='font-bold text-5xl leading-snug'>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h2>
          </div>
          <div className='section-content'>
            <div className=''></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
