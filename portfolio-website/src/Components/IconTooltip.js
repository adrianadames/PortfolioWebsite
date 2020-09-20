import React, {useState} from 'react';
import styled from 'styled-components';

const IconTooltipWrapperDiv = styled.div`
    width:15%;
    position:relative;
`;

const IconToolTipContent = styled.div`
    position:absolute;
    bottom:-20px;
    left:0px;
    color:#E5E5E5;
`;

const IconTooltip = (props) => {
    const [active, setActive] = useState(false);
    const showTip = () => {
        setActive(true);
    };
    const hideTip = () => {
        setActive(false);
    };
    return (
        <IconTooltipWrapperDiv
            onMouseEnter = {showTip}
            onMouseLeave = {hideTip}
        >
            {props.children}
            {active && (
                <IconToolTipContent>
                    {props.content}
                </IconToolTipContent>
            )}
        </IconTooltipWrapperDiv>
    )
}; 

export default IconTooltip; 