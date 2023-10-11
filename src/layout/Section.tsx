interface Props {
    id?: string;
    title?: string;
    subtitle?: string;
    content: React.ReactNode;
}

export default function Section({
    id,
    title,
    subtitle,
    content
}: Props) {
    return (
        <section className='section-wrapper' id={id}>
            <div className='container'>
                {(title || subtitle) && (
                    <div className='section-header'>
                        { subtitle && <span className='subtitle text-2xl font-normal'>{subtitle}</span>}
                        <h2 className='font-bold text-5xl leading-snug'></h2>
                    </div>
                )}
                {content && (
                    <div className='section-content'>
                        {content}
                    </div>
                )}
            </div>
        </section>
    )
}