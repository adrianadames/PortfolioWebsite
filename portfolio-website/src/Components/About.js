import React from 'react';
import styled from 'styled-components';

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
    height:100px;
    z-index: 1;
    // border: 5px solid fuchsia;
    
    @media(max-width:1000px) {
        flex-direction:column;
        margin-top:20px;
    }

    @media(max-width:550px) {
        flex-direction:row;
    }
`;

const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    width:40%;
    min-width:500px;
    font-size:2.4rem;
    font-weight: 200;
    // border: 5px solid yellow;

    @media(max-width:550px) {
        display:none;
    }
`;

const NavItem = styled.a`
    color:rgba(252, 255, 252, 0.5);
    text-decoration:none;
    &:hover {
        font-weight:300;
    }
`;
const Main = styled.main`
    display:flex;
    flex-direction:column;
    width:100%;
    position:relative;
    // top:-100px;
    // border: 10px solid teal;
`;

const MainHeadlineH1 = styled.h1`
    font-size:6.4rem;
    margin-top: 50px;
    

    @media(max-width:1000px) {
        font-size:6.1rem;
    }
    @media(max-width:550px) {
        font-size:5rem;
    }
`;

const MainHeadlineH2 = styled.h2`
    font-size:4.8rem;
    margin-bottom: 20px;    

    @media(max-width:550px) {
        font-size:3.8rem;
    }
`;

const BurgerDiv= styled.nav`
    // display:none;
    height:100px;
    width:100px;
    // border:5px solid red;
    background-color:pink;

    @media(max-width:550px) {
        display: block;
    }
`;

const LandingSection = styled.section`
    width:100%;
    // border: 10px solid pink;
    margin-bottom:30px;
    height: 100vh;
    min-height:800px;
    position:relative;

    //need to figure out what I"m going to do with content in here when mobile
    @media(max-width:500px) {
        min-height:300px;
    }
`;

const LandingContentDiv = styled.div`
    position:absolute;
    top:0px;
    left:0px;
    // border: 2px solid orange;
    width:100%;
    height:100%;
`;

function About() {

    const scrollProjectsIntoView = () => {
        const projectsAnchor = document.querySelector('.projectsHeading');
        projectsAnchor.scrollIntoView({ behavior: 'smooth'})
    }

    const scrollSkillsIntoView = () => {
        const skillsAnchor = document.querySelector('.skillsHeading');
        skillsAnchor.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <HomeOuterContainer>
            <HomeInnerContainer>
                
                <Header>
                    <MainHeadlineH2>
                        <a href = "/" style = {{color:'rgba(252, 255, 252, 0.5)', textDecoration:'none'}}>
                            Adrian Adames
                        </a>
                    </MainHeadlineH2>
                    <Nav>
                        <NavItem href = "/">HOME</NavItem>
                        <NavItem onClick = {() => scrollProjectsIntoView()}>PROJECTS</NavItem>
                        <NavItem onClick = {() => scrollSkillsIntoView()}>SKILLS</NavItem>
                        <NavItem href = "/about">ABOUT</NavItem>
                    </Nav>
                    <BurgerDiv></BurgerDiv>
                </Header>

                <Main>
                    <LandingSection>
                        <MainHeadlineH1>
                            About
                        </MainHeadlineH1>
                        
                        

                    </LandingSection>
                    
                </Main>
            </HomeInnerContainer>
        </HomeOuterContainer>
    )
};

export default About;