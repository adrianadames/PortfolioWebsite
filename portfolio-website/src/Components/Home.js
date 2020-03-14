import React from 'react';
import styled from 'styled-components';
import headshot from '../images/devHeadshotBW.JPG';

const HomeOuterContainer = styled.div`
    display: flex;
    justify-content:center;
    border: 2px solid red;
    background-color:#040F0F;
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
    width:100%;
    border: 2px solid blue;
    z-index: 1;
    color:white;
`;

const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    border: 2px purple;
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
`;

const ImgBorderWrapper = styled.div`
    background-color: none;
    width:100%;
    height:100%;
    border:50px solid gold;
    position:relative;
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
    background-size: 100% 100px, 100px 100%, 100% 100px, 100px 100%; // width height
    background-position: top left, top right, bottom right, bottom left; // x-axis y-axis
    background-repeat: no-repeat;
`;

const Img = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.2;
`;

const BottomSection = styled.section`
    width:100%;
    border: 2px solid orange;
    height: 100vh;
`;



function Home() {

    return (
        <HomeOuterContainer>
            <HomeInnerContainer>
                <Header>
                    <h1>Adrian Adames</h1>
                    <Nav>
                        <div>Home</div>
                        <div>Projects</div>
                        <div>About</div>
                    </Nav>
                </Header>
                <Main>
                    <TopSection>
                        <Img src = {headshot}  />
                        <ImgGradientDiv>hello</ImgGradientDiv>
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