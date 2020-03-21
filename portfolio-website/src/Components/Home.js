import React from 'react';
import styled from 'styled-components';
import headshot from '../images/devHeadshotBWCropped2.jpg';

const HomeOuterContainer = styled.div`
    display: flex;
    justify-content:center;
    border: 2px solid red;
    background-color:#040F0F;
    font-family: 'Montserrat', sans-serif;
    font-size:1.6rem;
    color:rgba(252, 255, 252, 0.5);
`;

const HomeInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    max-width:1200px;
    position:relative;
    top:0px;
    left:0px;
    border: 4px solid brown;
    height:200vh;
    background-color:#040F0F;
`;

const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:100px;
    border: 2px solid blue;
    z-index: 1;     
`;

const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    width:40%;
    max-width:400px;
    border: 5px solid yellow;
    font-size:2.4rem;
    font-weight: 200;
`;

const Main = styled.main`
    display:flex;
    flex-direction:column;
    width:100%;
    border: 3px solid green;
    position:absolute;
    top:0px;
    left:0px;
`;

const TopSection = styled.section`
    width:100%;
    border: 2px solid pink;
    height: 100vh;
    min-height:800px;
    position:relative;
    @media(max-width:500px) {
        min-height:300px;
    }
`;

const ImgGradientDiv = styled.div`
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    background-color:transparent;   
    border:100px solid transparent; 
    background-image: 
        linear-gradient(to bottom, #040F0F, transparent), 
        linear-gradient(to left,  #040F0F, transparent), 
        linear-gradient(to top, #040F0F, transparent), 
        linear-gradient(to right, #040F0F, transparent);
    background-origin: border-box;
    background-size: 100% 20%, 20% 100%, 100% 20%, 20% 100%; // width height
    background-position: top left, top right, bottom right, bottom left; // x-axis y-axis
    background-repeat: no-repeat;
`;

const Img = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.2;
    @media(max-width:600px) {
        object-fit:cover;
    }
`;

const BottomSection = styled.section`
    width:100%;
    border: 2px solid orange;
    height: 100vh;
`;

const TopContentDiv = styled.div`
    position:absolute;
    top:0px;
    left:0px;
    border: 2px solid orange;
    width:100%;
    height:100%;
`;

const MainHeadlineH1 = styled.h1`
    font-size:6.4rem;
    position:absolute;
    top:35%;
    line-height: 1.5;
`;

const SubHeadlineH3 = styled.h3`
    font-size:2.4rem;
    position:absolute;
    top:70%;
    color:#E5E5E5;
    line-height: 1.5;
`;

const TopContentFooterDiv = styled.div`
    position:absolute;
    top:90%;
    width:100%;
    height:100px;
    border: 2px solid orange;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
`;

const IconsContainerDiv = styled.div`
    grid-column:1/2;
    display:flex;
    justify-content:space-between; 
    width:50%;
    border: 2px solid red;
`;

const DownArrowContainerDiv = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    border: 2px solid pink;
    grid-column:2/3;
`;


function Home() {

    return (
        <HomeOuterContainer>
            <HomeInnerContainer>
                <Header>
                    <h2 style = {{'font-size':'4.8rem'}}>Adrian Adames</h2>
                    <Nav>
                        <div>HOME</div>
                        <div>PROJECTS</div>
                        <div>ABOUT</div>
                    </Nav>
                </Header>
                <Main>
                    <TopSection>
                        <Img src = {headshot}  />
                        <ImgGradientDiv></ImgGradientDiv>
                        <TopContentDiv>
                            <MainHeadlineH1>
                                Hi. I’m Adrian.
                                <br></br>
                                I’m a full stack web developer. 
                            </MainHeadlineH1>
                            <SubHeadlineH3>
                                I’ve launched apps from idea to production using the full stack of web technologies. Keep scrolling to see some of the projects I’ve worked on. 
                            </SubHeadlineH3>
                            <TopContentFooterDiv>
                                <IconsContainerDiv>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E5E5E5"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E5E5E5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E5E5E5"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                </IconsContainerDiv>
                                <DownArrowContainerDiv>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#E5E5E5"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
                                </DownArrowContainerDiv>
                            </TopContentFooterDiv>
                        </TopContentDiv>
                    </TopSection>
                    <BottomSection>
                        <Img src = {headshot}  />
                    </BottomSection>
                </Main>
            </HomeInnerContainer>
        </HomeOuterContainer>
    )
};

export default Home;