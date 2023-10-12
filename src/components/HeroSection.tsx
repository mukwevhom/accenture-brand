import heroImage from '../assets/hero-image.png'

export default function HeroSection() {
    return (
        <section className="hero-section" style={{backgroundImage: `url(${heroImage})`}}>
            <div className='container'>
                <div className='hero-content'>
                    <h1>Live with Confidence</h1>
                    <p>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                    <a href='#'>View project</a>
                </div>
            </div>
        </section>
    )
}
