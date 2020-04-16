import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectCardContainer = styled.div`
    border:6px solid #89CFF0;
    margin-bottom:50px;
    width:100%;
    max-width:700px;
    // height:700px;
`;

const ProjectOverviewContainer = styled.div`
    border:6px solid red;
    display:flex;
    flex-direction:column;
`;

const ProjectDetailsContainer = styled.div`
    border:6px solid pink;
    display:flex;
    flex-direction:column;
`;

const ProjectImg = styled.img`
    width:100%;
    height:auto;
    border: 6px solid blue;
`;

const ProjectTitleContainer = styled.div`
    display:flex;
    justify-content:space-between;
    font-size:4rem;
    border:5px solid yellow;
    padding:10px 0px;
`;

const ProjectDescriptionContainer = styled.div`
    font-size:2.2rem;
    border:5px solid orange;
    padding:10px 0px;
    line-height: 1.2;
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
        <ProjectCardContainer>
            {!projectDetailsView 
                ? 
                <ProjectOverviewContainer>
                    {console.log(projectData)}
                    
                    <ProjectImg src = {projectData.url} onClick = {() => toggleCardView()} />
                    <ProjectTitleContainer>
                        <div> {projectData.title} </div>
                        <div onClick = {() => toggleCardView()}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E5E5E5"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
                        </div>
                    </ProjectTitleContainer>
                    
                    <ProjectDescriptionContainer>
                        {projectData.description}
                    </ProjectDescriptionContainer>

                </ProjectOverviewContainer>
                :
                <ProjectDetailsContainer>
                    {console.log(projectData)}
                    <div style = {{'border':'2px solid blue'}}>
                    <div style = {{'border':'2px solid purple', 'font-size': '4rem', 'display':'flex', 'justify-content':'space-between', 'margin-bottom': '10px'}}>
                        <h3>Responsibilities</h3>
                        <div onClick = {() => toggleCardView()}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E5E5E5"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
                        </div>
                    </div>
                        
                        <ul>
                            {projectData.responsibilities.map(item => {
                                return (
                                    <li>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div style = {{'border':'2px solid purple'}}>
                        <h3 style = {{'font-size': '4rem'}}>Tech Stack</h3>
                        <ul>
                            {projectData.techStack.map(item => {
                                return (
                                    <li>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </ProjectDetailsContainer>
            }
    
        </ProjectCardContainer>
    )
};

export default ProjectCard;