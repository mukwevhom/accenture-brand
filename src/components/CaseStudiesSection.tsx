import { useEffect, useRef, useState } from "react"
import BlazeSlider from 'blaze-slider'
import type { BlazeConfig } from "blaze-slider";
import Section from "../layout/Section"
import "blaze-slider/dist/blaze.css";

interface CaseStudy {
    imageUrl: string;
    description: string;
    title: string;
}

function useBlazeSlider(config: BlazeConfig) {
    const sliderRef = useRef<BlazeSlider>()
    const elRef = useRef<HTMLDivElement | null>(null)
  
    useEffect(() => {
        if (!sliderRef.current) {
            sliderRef.current = new BlazeSlider(elRef.current!, config)
        }

        // if (sliderRef.current) {
        //     sliderRef.current.destroy()
        //     sliderRef.current = new BlazeSlider(elRef.current!, config)
        // }
    }, [])
  
    return elRef
}

function Content () {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[] | []>([])
    const elRef = useBlazeSlider({ 
        all: {
            enableAutoplay: true,
            slidesToShow: 3,
        },
        "(max-width: 575px)": {
            slidesToShow: 1,
        }
    })

    const fetchCaseStudies = () => {
        return fetch(import.meta.env.VITE_CASE_STUDIES_API)
            .then(res => res.json())
            .then(data => setCaseStudies(data))
    }
    
    useEffect(() => {
        fetchCaseStudies()
    }, [])

    return (
        <div className="blaze-slider" ref={elRef}>
            <div className="blaze-container">
                <div className="blaze-track-container">
                    <div className="case-studies blaze-track">
                        { caseStudies.map((caseStudy, idx) => (
                            <div className="case-study-item" key={`case-study-${idx}`} style={{backgroundImage: `url(${caseStudy?.imageUrl})`}}>
                                <a href="#" className="case-study-content">
                                    <h3>{caseStudy?.title}</h3>
                                    <p>{caseStudy?.description}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CaseStudiesSection () {

    return (
        <Section
            id="case-studies-section"
            subtitle="Case studies"
            content={<Content />} />
    )
}
