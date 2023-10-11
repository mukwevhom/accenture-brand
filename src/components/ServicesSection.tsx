export default function ServicesSection () {
    const Content = () => {
        return (
            <>Test</>
        )
    }

    return (
        <ServicesSection
            id={"services-section"}
            title="We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces"
            subtitle="What we do"
            content={<Content /> } />
    )
}