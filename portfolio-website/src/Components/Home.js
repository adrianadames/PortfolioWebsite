import React from 'react';
import styled from 'styled-components';
import headshot from '../images/devHeadshotBW.JPG';

const HomeOuterContainer = styled.div`
    display: flex;
    justify-content:center;
    border: 2px solid red;
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
    min-height: 100vh;
`;

const Img = styled.img`
    width:100%;
    z-index: -1;
`;

const BottomSection = styled.section`
    width:100%;
    border: 2px solid orange;
    min-height: 100vh;
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
                    </TopSection>
                    <BottomSection>
                        BottomSection
                    </BottomSection>
                </Main>
            </HomeInnerContainer>
        </HomeOuterContainer>
    )
};

export default Home;