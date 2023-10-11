import { useEffect, useState } from "react"
import Section from "../layout/Section"

interface CaseStudy {
    imageUrl: string;
    description: string;
    title: string;
}

function Content () {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[] | []>([])

    const fetchCaseStudies = () => {
        return fetch(import.meta.env.VITE_CASE_STUDIES_API)
            .then(res => res.json())
            .then(data => setCaseStudies(data))
    }
    
    useEffect(() => {
        fetchCaseStudies()
    }, [])



    return (
        <div>
            { caseStudies.map((caseStudy, idx) => (
                <a className="block" href="#" key={`case-study-${idx}`} style={{backgroundImage: `url(${caseStudy?.imageUrl})`}}>
                    <h3>{caseStudy?.title}</h3>
                    <p>{caseStudy?.description}</p>
                </a>
            ))}
        </div>
    )
}

export default function CaseStudiesSection () {

    return (
        <Section
            id="case-studies-section"
            subtitle="Case studies"
            content={<Content />}
            />
    )
}
