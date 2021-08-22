import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const SkillLogo = ({skill}) => {
    // More skills to be added as needed
    switch(skill) {
        case "3D Printing":
            return <StaticImage src="../images/logos/3d-printing.png" alt="3D Printing"/>
        case "Arduino":
            return <StaticImage src="../images/logos/arduino.png" alt="Arduino"/>
        case "C":
            return <StaticImage src="../images/logos/c.png" alt="C" />
        case "C++":
            return <StaticImage src="../images/logos/cpp.png" alt="C++" />
        case "Circuit Design":
            return <StaticImage src="../images/logos/circuit.png" alt="Circuit Design"/>
        case "CMake":
            return <StaticImage src="../images/logos/cmake.png" alt="CMake"/>
        case "CSS":
            return <StaticImage src="../images/logos/css-3.png" alt="Graphql"/>
        case "GraphQL":
            return <StaticImage src="../images/logos/graphql.png" alt="Graphql"/>
        case "HTML":
            return <StaticImage src="../images/logos/html.png" alt="Graphql"/>
        case "JavaScript":
            return <StaticImage src="../images/logos/javascript.png" alt="JavaScript"/>
        case "JSON":
            return <StaticImage src="../images/logos/json.png" alt="JSON"/>
        case "Markdown":
            return <StaticImage src="../images/logos/markdown.png" alt="Markdown"/>
        case "OnShape":
            return <StaticImage src="../images/logos/onshape.png" alt="OnShape"/>
        case "PlantUML":
            return <StaticImage src="../images/logos/plantuml.png" alt="PlantUML"/>
        case "Python":
            return <StaticImage src="../images/logos/python.png" alt="Python"/>
        case "React":
            return <StaticImage src="../images/logos/react.png" alt="React"/>
        default:
            return null
    }
}

export default SkillLogo