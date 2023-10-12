import heroImage from '../assets/hero-image.png'

export default function HeroSection() {
    return (
        <section className="hero-section h-[41vw] bg-cover" style={{backgroundImage: `url(${heroImage})`}}>
            <div className='container h-full relative'>
                <div className='w-5/12 absolute bottom-20'>
                    <h1 className='text-white font-bold text-5xl mb-7'>Live with Confidence</h1>
                    <p className='text-white text-xl mb-12'>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                    <a href='#' className='py-2.5 px-5 rounded-3xl bg-accenture-700 block w-fit text-sm font-bold'>View project</a>
                </div>
            </div>
        </section>
    )
}
