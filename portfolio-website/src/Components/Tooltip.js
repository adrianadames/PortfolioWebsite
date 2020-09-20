import React, {useState} from 'react';
import styled from 'styled-components';

const TooltipDiv = styled.div`
    display:relative;
    width:100%;
    height:100%;
    color:'white';
    z-index:100;
    // border: 1px solid orange;
    bottom:500px; 
`;

const ToolTipContent = styled.div`
    border:1px solid red;
    display:absolute;
    top:-200px;
    left:300px;
    z-index:100;
`;

const Tooltip = (props) => {
    const [active, setActive] = useState(false);
    const showTip = () => {
        setActive(true);
    };
    const hideTip = () => {
        setActive(false);
    };
    return (
        <TooltipDiv
            onMouseEnter = {showTip}
            onMouseLeave = {hideTip}
        >
            {props.children}
            {active && (
                <ToolTipContent>
                    {props.content}
                </ToolTipContent>
            )}
        </TooltipDiv>
    )
}; 

export default Tooltip; 