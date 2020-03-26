import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../images/mud1.PNG';

const ProjectCardBasicDiv = styled.div`
    border:2px solid red;
    width:250px;
    height:400px;
    display:flex;
    flex-direction:column;
`;

const ProjectCardDetailsDiv = styled.div`
    border:3px solid pink;
    width:250px;
    height:400px;
    display:flex;
    flex-direction:column;
`;

// ok. so this card will have two sides. 
// one side will have project image, project title, and project description
// other side will have my project responsibilities/accomplishments, the tech stack, a link leading to the deployed site, and the github link for the project

const ProjectCard = (props) => {
    console.log('props =', props)
    
    const [projectData, setProjectData] = useState(props.projectData);

    const [projectDetailsView, setProjectDetailsView] = useState(false);

    const toggleCardView = () => {setProjectDetailsView(!projectDetailsView)};

    return ( 
        <>
            {!projectDetailsView 
                ? 
                <ProjectCardBasicDiv>
                    {console.log(projectData)}
                    <div style = {{'border':'2px solid blue'}}>
                        image goes here
                    </div>
                    <div style = {{'border':'2px solid purple'}}>
                        Project Title and Description go here
                    </div>
                    <div onClick = {() => toggleCardView()}> 
                        more details
                    </div>
                </ProjectCardBasicDiv>
                :
                <ProjectCardDetailsDiv>
                    {console.log(projectData)}
                    <div style = {{'border':'2px solid blue'}}>
                        <h3>Responsibilities</h3>
                        <ul>
                            {projectData.responsibilities.map(item => {
                                return (
                                    <li>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div style = {{'border':'2px solid purple'}}>
                        <h3>Tech Stack</h3>
                        <ul>
                            {projectData.techStack.map(item => {
                                return (
                                    <li>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div onClick = {() => toggleCardView()}>
                        back to basic view
                    </div>
                </ProjectCardDetailsDiv>
            }
    
        </>
    )
};

export default ProjectCard;