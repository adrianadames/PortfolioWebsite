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

const HeaderLogoContainerDiv = styled.div`
    font-size:4.8rem;
    // border:1px solid red;

    @media(max-width:1000px) {
        margin-bottom: 20px;
    }

    @media(max-width:550px) {
        font-size:3.8rem;
        margin-bottom: 0px;
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

const MobileNav = styled.nav`
    display:none;   

    @media(max-width:550px) {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:flex-end;
        width:100%;
        font-size:2.4rem;
        font-weight: 200;
        // border: 5px solid green;
        // position:absolute;
        // top:7.2rem;
    }
`;

const NavItem = styled.a`
    color:rgba(252, 255, 252, 0.5);
    text-decoration:none;
    &:hover {
        font-weight:300;
    }
    // border:1px solid yellow;

    @media(max-width:550px) {
        padding:7px;
    }
`;

const BurgerDiv= styled.div`
    display:none;

    @media(max-width:550px) {
        display: block;
        height:4rem;
        width:10%;
        // border:2px solid orange;
        // background-color:pink;
    }
`;

const BurgerSVGContainerDiv = styled.div`
    width:100%;
    height:100%;
    // border:2px solid blue;
    // position:absolute;
    // top:0px;
`;

const Main = styled.main`
    display:flex;
    flex-direction:column;
    width:100%;
    position:relative;
    top:-100px;
    // border: 10px solid teal;
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

const GradientOverlayDiv = styled.div`
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    background-color:transparent;   
    border:10% solid transparent;
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

const LandingImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.2;
    @media(max-width:550px) {
        object-fit:cover;
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

const ProjectSection = styled.section`
    width:100%;
    // border: 6px solid orange;
    // height: 100vh;
    min-height:800px;
    position:relative;
    @media(max-width:500px) {
        min-height:300px;
    }
`;

const SkillsSection = styled.section`
    width:100%;
    font-size:2.6rem;
    line-height: 1.1;
    // border: 6px solid purple;
    // height: 100vh;
    // min-height:800px;
    position:relative;
    margin-bottom:50px;
    @media(max-width:500px) {
        min-height:300px;
    }
`;

const AboutSection = styled.section`
    width:100%;
    // border: 6px solid purple;
    @media(max-width:500px) {
        min-height:300px;
    }
`;

const MainHeadlineH1 = styled.h1`
    font-size:6.4rem;
    position:absolute;
    top:35%;
    line-height: 1.5;

    @media(max-width:1000px) {
        margin-top:-120px;
        margin-left:20px;
        margin-right:20px;
        font-size:6.1rem;
    }
    @media(max-width:550px) {
        margin-top:-120px;
        font-size:5rem;
    }
`;

const MainHeadlineH2 = styled.h2`
    font-size:4.8rem;
    margin-bottom: 20px;
    // border:1px solid red;

    @media(max-width:550px) {
        font-size:3.8rem;
    }
`;

const SubHeadlineH3 = styled.h3`
    font-size:2.4rem;
    position:absolute;
    top:70%;
    color:#E5E5E5;
    line-height: 1.5;

    @media(max-width:1000px) {
        margin:-60px 20px 0 20px;
    }

    @media(max-width:550px) {
        margin-top:-90px;
        // font-size:5rem;
    }
`;

const TopContentFooterDiv = styled.div`
    position:absolute;
    top:90%;
    width:100%;
    height:100px;
    // border: 2px solid orange;
    display:grid;
    grid-template-columns:repeat(7, 1fr);
    grid-template-rows:1fr 1fr;
`;

const IconsContainerDiv = styled.div`
    grid-column:1/4;
    display:flex;
    justify-content:space-between; 
    width:50%;
    // height:100%;
    // border: 4px solid red;
    align-items: flex-start;
    min-width:170px;
    position:relative;

    @media(max-width:1000px) {
        margin:0 20px 0 20px;
        margin-top:-20px;
    }
`;

const SVGIconContainerDiv = styled.div`
    // border:2px solid lightgreen;
    width:100%;
`;

const DownArrowContainerDiv = styled.div`
    grid-column:4/5;
    grid-row:2/3;
    display:flex;
    justify-content:center;
    // border: 2px solid pink;

    @media(max-width:1000px) {
        margin-top:-20px;
    }
`;

const ProjectsContainerDiv = styled.div`
    // border:4px solid lightgreen;
    display:flex;
    // justify-content:space-evenly;
    // flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
`;

const AboutContentDiv = styled.div`
    font-size:2.2rem;
    // width:72%; 
    line-height:1.3;

    @media(max-width:550px) {
        // width:95%;
    }
`;


function Home() {
    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    };

    const scrollProjectsIntoView = () => {
        const projectsAnchor = document.querySelector('.projectsHeading');
        projectsAnchor.scrollIntoView({ behavior: 'smooth'})
    }

    const scrollSkillsIntoView = () => {
        const skillsAnchor = document.querySelector('.skillsHeading');
        skillsAnchor.scrollIntoView({ behavior: 'smooth'})
    }

    const scrollAboutIntoView = () => {
        const aboutAnchor = document.querySelector('.aboutHeading');
        aboutAnchor.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <HomeOuterContainer>
            <HomeInnerContainer>
                
                <Header>
                    <div style = {{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                    <HeaderLogoContainerDiv>
                        <a href = "/" style = {{color:'rgba(252, 255, 252, 0.5)', textDecoration:'none'}}>
                            Adrian Adames
                        </a>   
                    </HeaderLogoContainerDiv>
                    <BurgerDiv onClick = {toggleBurger}>
                        <BurgerSVGContainerDiv>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" ><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" fill = "rgba(252, 255, 252, 0.5)"/></svg>
                        </BurgerSVGContainerDiv>
                    </BurgerDiv>
                    </div>
                    {burgerOpen &&
                        <MobileNav>
                            {/* <NavItem href = "/">HOME</NavItem> */}
                            <NavItem onClick = {() => scrollProjectsIntoView()}>PROJECTS</NavItem>
                            <NavItem onClick = {() => scrollSkillsIntoView()}>SKILLS</NavItem>
                            <NavItem onClick = {() => scrollAboutIntoView()}>ABOUT</NavItem>
                        </MobileNav>
                    }
                    <Nav>
                        <NavItem href = "/">HOME</NavItem>
                        <NavItem onClick = {() => scrollProjectsIntoView()}>PROJECTS</NavItem>
                        <NavItem onClick = {() => scrollSkillsIntoView()}>SKILLS</NavItem>
                        <NavItem onClick = {() => scrollAboutIntoView()}>ABOUT</NavItem>
                    </Nav>
                    
                    
                </Header>
                
                <Main>
                    <LandingSection>
                        <LandingImg src = '/images/devHeadshotBWCropped2.jpg'  />
                        <GradientOverlayDiv></GradientOverlayDiv>
                        <LandingContentDiv>
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
                                    
                                    
                                    {/* Email Icon */}
                                    <IconTooltip content='Email'>
                                    <SVGIconContainerDiv>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="#E5E5E5" style= {{minWidth:'24px'}}>
                                        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>                                        
                                        <foreignObject width="100" height="100">                                            
                                                <a href={`mailto:${'adrianadames@gmail.com'}`}>
                                                    <div style={{width:'100%', height:'100%'}}>
                                                        
                                                    </div>
                                                </a>                               
                                        </foreignObject>                                        
                                    </svg>
                                    </SVGIconContainerDiv>
                                    </IconTooltip>
                                    

                                    {/* Github Icon */}
                                    <IconTooltip content='Github'>
                                    <SVGIconContainerDiv>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="90%" viewBox="0 0 24 24" fill="#E5E5E5" style= {{minWidth:'22px'}}>                                        
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        <foreignObject width="100" height="100">
                                            <a href = 'https://www.github.com/adrianadames'>
                                                <div style={{width:'100%', height:'100%'}}></div>
                                            </a>
                                        </foreignObject>
                                    </svg>
                                    </SVGIconContainerDiv>
                                    </IconTooltip>

                                    {/* LinkedIn Icon */}
                                    <IconTooltip content='LinkedIn'>
                                    
                                    <SVGIconContainerDiv>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="85%" viewBox="0 0 24 24" fill="#E5E5E5" style= {{minWidth:'22px'}}>
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                        <foreignObject width="100" height="100">
                                            <a href = 'https://www.linkedin.com/in/adrianadames'>
                                                <div style={{width:'100%', height:'100%'}}></div>
                                            </a>
                                        </foreignObject>
                                    </svg>
                                    </SVGIconContainerDiv>
                                    </IconTooltip>

                                   
                                    {/* Resume Icon */}
                                    <IconTooltip content='Resume'>
                                    <SVGIconContainerDiv>
                                    <svg width="85%" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9972 29H20L27 36L34 29H27.9979V31.5333H25.9972V29Z" fill="#E5E5E5"/>
                                            <line x1="1.5" y1="33.5" x2="1.5" y2="10.5" stroke="#E5E5E5" stroke-width="3" stroke-linecap="square"/>
                                            <line x1="27.5" x2="27.5" y2="19" stroke="#E5E5E5" stroke-width="3"/>
                                            <line x1="21" y1="35.5" y2="35.5" stroke="#E5E5E5" stroke-width="3"/>
                                            <line x1="25.9975" y1="1.52896" x2="8.99758" y2="1.50161" stroke="#E5E5E5" stroke-width="3"/>
                                            <line x1="3" y1="11.5" x2="11" y2="11.5" stroke="#E5E5E5" stroke-width="3"/>
                                            <line x1="11.5" y1="3" x2="11.5" y2="13" stroke="#E5E5E5" stroke-width="3"/>
                                            <line x1="7" y1="17.5" x2="22" y2="17.5" stroke="#E5E5E5" stroke-width="3"/>
                                            <line x1="7" y1="23.5" x2="22" y2="23.5" stroke="#E5E5E5" stroke-width="3"/>
                                            <line x1="7" y1="29.5" x2="17" y2="29.5" stroke="#E5E5E5" stroke-width="3"/>
                                            <rect x="25" y="22" width="4" height="10" fill="#E5E5E5"/>
                                            <path d="M10 1L1 10" stroke="#E5E5E5" stroke-width="3" stroke-linecap="square"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="34" height="37" fill="white"/>
                                            </clipPath>
                                        </defs>
                                        <foreignObject width="100" height="100">
                                            <a href = 'https://drive.google.com/file/d/1tiu6zBUMvjApGU9cU1xG0jKNGj7SuBSl/view?usp=sharing'>
                                                <div style={{width:'100%', height:'100%'}}></div>
                                            </a>
                                        </foreignObject>
                                    </svg>
                                    </SVGIconContainerDiv>
                                    </IconTooltip>
                                </IconsContainerDiv>

                                <DownArrowContainerDiv onClick = {() => scrollProjectsIntoView()}>
                                    {/* Downward-pointing Arrow Head Icon */}
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="#E5E5E5"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
                                </DownArrowContainerDiv>
                            </TopContentFooterDiv>
                        </LandingContentDiv>
                    </LandingSection>
                    <ProjectSection className = 'projectsHeading' >
                        <MainHeadlineH2  >Projects</MainHeadlineH2>
                        <ProjectsContainerDiv>
                            {projectsData.map((projectData, index) => {
                                return (
                                    <ProjectCard 
                                        key={index} 
                                        projectData={projectData}
                                    />
                                )
                            })}
                        </ProjectsContainerDiv>
                    </ProjectSection>
                    <SkillsSection className = 'skillsHeading'>
                        <MainHeadlineH2>SKILLS</MainHeadlineH2>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Node.js/Express</li>
                            <li>Django</li>
                            <li>PostgreSQL</li>
                            <li>SQLite3</li>
                            <li>Knex.js</li>
                            <li>Axios</li>
                            <li>Styled Components</li>
                            <li>LESS</li>
                            <li>Bootstrap</li>
                            <li>Semantic UI</li>
                        </ul>
                    </SkillsSection>
                    <AboutSection className = 'aboutHeading'>
                        <MainHeadlineH2>ABOUT</MainHeadlineH2>
                        <AboutContentDiv>                            
                            <p>
                            My name is Adrian Adames, and I’m a web developer based in Boston, MA. 
                            Trained as a mechanical engineer, I decided to pursue web development  
                            when the opportunity to learn how to code presented itself in the form 
                            of Lambda School - a computer science and software engineering 
                            academy. Software development was something I had always 
                            wanted to pursue, and the timing felt right so I jumped on the opportunity. 
                            </p>
                            <br></br>
                            <p>
                            Outside of software development and mechanical engineering, I have a wide 
                            range of hobbies and interests. One is playing basketball and doing all 
                            the health and fitness stuff required to play at a decent level. I also 
                            love watching basketball in its highest form (NBA playoffs). I’m a big hip-hop fan 
                            and hope to one day put all of my listening to use by learning how to DJ. 
                            I also do a decent amount of reading (mostly non-fiction). Lastly, 
                            I’m slowly but surely getting back into skateboarding and am currently working 
                            on being able to consistently ollie while moving. 
                            </p>
                        </AboutContentDiv>
                        
                    </AboutSection>
                </Main>
            </HomeInnerContainer>
        </HomeOuterContainer>
    )
};

export default Home;