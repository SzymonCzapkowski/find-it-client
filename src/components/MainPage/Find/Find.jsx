import React from 'react'
import {FindContent} from './FindStyles'
import {TeamMate} from './FindStyles'
import {Project} from './FindStyles'
import {RegisterButton} from './FindStyles'
import { Link } from 'react-router-dom'

const Find = () => {
    return (
        <FindContent>
            <TeamMate >
                <p><b>FIND TEAMMATE</b></p>
                <Link to='/register'><RegisterButton>
                    register
                </RegisterButton></Link>
            </TeamMate>
            <Project>
                <p><b>FIND PROJECT</b></p>
                <Link to='/register'><RegisterButton>
                    register
                </RegisterButton></Link>
            </Project>
        </FindContent>
    )
}

export default Find;