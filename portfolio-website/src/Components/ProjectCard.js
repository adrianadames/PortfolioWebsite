import React, { useState } from 'react';
import styled from 'styled-components';
// import image from '../images/mud1.PNG';

const ProjectCardFrontsideDiv = styled.div`
    border:2px solid red;
    width:250px;
    height:400px;
    display:flex;
    flex-direction:column;
`;

const ProjectCardBacksideDiv = styled.div`
    border:3px solid pink;
    width:250px;
    height:400px;
    display:flex;
    flex-direction:column;
`;

const ProjectImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
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
                <ProjectCardFrontsideDiv>
                    {console.log(projectData)}
                    <div style = {{'border':'2px solid blue'}}>
                        <ProjectImg src = {projectData.url} />
                    </div>
                    <div style = {{'border':'2px solid purple'}}>
                        Project Title and Description go here
                    </div>
                    <div onClick = {() => toggleCardView()}> 
                        more details
                    </div>

                </ProjectCardFrontsideDiv>
                :
                <ProjectCardBacksideDiv>
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
                </ProjectCardBacksideDiv>
            }
    
        </>
    )
};

export default ProjectCard;