import React, {useState} from 'react';
import styled from 'styled-components';
import projectsData from '../projectsData';
import ProjectCard from './ProjectCard';
import IconTooltip from './IconTooltip';

const HomeOuterContainer = styled.div`
    display: flex;
    justify-content:center;
    background-color:#040F0F;
    font-family: 'Montserrat', sans-serif;
    font-size:1.6rem;
    color:rgba(252, 255, 252, 0.5);
    // border: 5px solid red;
`;

const HomeInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    max-width:1200px;
    position:relative;
    background-color:#040F0F;
    margin: 0 12px 0 12px;
    // border: 4px solid aqua;
    

    @media(max-width:500px) {
        min-height:600px;
    }
`;

const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    // height:100%;
    z-index: 1;
    // border: 5px solid fuchsia;
    margin-top:20px;
    
    @media(max-width:1000px) {
        flex-direction:column;
    }

    @media(max-width:550px) {
        // flex-direction:row;
    }
`;

const Main = styled.main`
    display:flex;
    flex-direction:column;
    width:100%;
    position:relative;

    // border: 10px solid teal;
    // color: white; 
    // font-size: 15px;
`;



function Home2() {

    return (
        <HomeOuterContainer>
            <HomeInnerContainer>                
                <Header>
                    Doing a re-design. Stay tuned.
                </Header>
                
                <Main>

                </Main>
            </HomeInnerContainer>
        </HomeOuterContainer>
    )
};

export default Home2;