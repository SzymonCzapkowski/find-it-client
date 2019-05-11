import React from 'react';
import {FindContent} from './FindStyles'
import {TeamMate} from './FindStyles'
import {Project} from './FindStyles'
import {RegisterButton} from './FindStyles'

const Find = () => {
    return (
        <FindContent>
            <TeamMate >
                <p><b>FIND TEAMMATE</b></p>
                <RegisterButton>
                    register
                </RegisterButton>
            </TeamMate>
            <Project>
                <p><b>FIND PROJECT</b></p>
                <RegisterButton>
                    register
                </RegisterButton>
            </Project>
        </FindContent>
    )
}

export default Find;