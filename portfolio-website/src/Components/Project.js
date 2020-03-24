import React from 'react';
import styled from 'styled-components';

const ProjectContainerDiv = styled.div`
    display:flex;
    width:100%;
    border:2px solid pink;
    height:400px;
`;

const ProjectDetailsDiv = styled.div`
    width:50%;
`;

const ProjectImageDiv = styled.div`
    width:50%;
`;


function Project(props) {

    return (
        
        <ProjectContainerDiv>
            <ProjectDetailsDiv>
                {props.projectData.title}
            </ProjectDetailsDiv>
            <ProjectImageDiv>
                Project Image
            </ProjectImageDiv> 
        </ProjectContainerDiv>
    )
};

export default Project;