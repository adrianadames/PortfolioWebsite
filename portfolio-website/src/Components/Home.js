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
    width:100%;
    border: 2px solid blue;
    z-index: 1;     
`;

const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    border: 2px purple;
    font-size:2.4rem;
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


function Home() {

    return (
        <HomeOuterContainer>
            <HomeInnerContainer>
                <Header>
                    <h2 style = {{'font-size':'4.8rem'}}>Adrian Adames</h2>
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
                        <div>anyone</div>
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