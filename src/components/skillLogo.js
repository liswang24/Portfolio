import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

// TODO: Display skill name on hover (SyntheticEvent)
// TODO: Update logo images 

const SkillLogo = ({skill}) => {
    // More skills to be added as needed
    switch(skill) {
        case "3D Printing":
            return <StaticImage src="../images/logos/3D.png" 
                    alt="3D Printing" 
                    loading="eager"
                    />
        case "C":
            return <StaticImage src="../images/logos/C.png" 
                    alt="C" 
                    loading="eager"
                    />
        case "C++":
            return <StaticImage src="../images/logos/C++.png" 
                    alt="C++" 
                    loading="eager"
                    />
        case "CSS":
            return <StaticImage src="../images/logos/CSS.png" 
                    alt="Graphql" 
                    loading="eager"
                    />
        case "GraphQL":
            return <StaticImage src="../images/logos/GraphQL.png" 
                    alt="Graphql" 
                    loading="eager"
                    />
        case "HTML":
            return <StaticImage src="../images/logos/HTML.png" 
                    alt="Graphql" 
                    loading="eager"
                    />
        case "JavaScript":
            return <StaticImage src="../images/logos/JavaScript.png" 
                    alt="JavaScript" 
                    loading="eager"
                    />
        case "JSON":
            return <StaticImage src="../images/logos/JSON.png" 
                    alt="JSON" 
                    loading="eager"
                    />
        case "Python":
            return <StaticImage src="../images/logos/Python.png" 
                    alt="Python"
                    loading="eager"
                    />
        case "React":
            return <StaticImage src="../images/logos/React.png" 
                    alt="React" 
                    loading="eager"
                    />
        default:
            return null
    }
    
}

export default SkillLogo