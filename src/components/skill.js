import * as React from 'react'
import {
    skillWrap,
    skillName
} from '../styles/projects.module.css'
import SkillLogo from './skillLogo'

const Skill = ({skill}) => { 
    return (
        <div class={skillWrap}>
            <SkillLogo skill={skill}/>
            <div class={skillName}>{skill}</div>
        </div>
    )
}

export default Skill