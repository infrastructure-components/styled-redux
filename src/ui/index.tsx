import React from 'react';
import styled, { withTheme } from 'styled-components';

export const UserInterface = withTheme(styled.div`
    font-family:  ${props=> props.theme.codeFont }
`);

/*
export default function withUserInterface(Component) {
    return function WrapperComponent(props) {
        return <UserInterface>
            <Component {...props} />
        </UserInterface>
    };
};



/**
 * Use the styled frame, make it full page
 *
const FullPageFrame = styled(Frame)`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-flow: column;
`;


/**
 * let the content consume all the available space
 *
const Content = styled.div`
    flex: 1 1 auto;
    height: 100%;
    overflow-y: hidden;
`;


/*

 import configReducer from './configurator/reducer';
 import Menu from './layout/menu';
 import Footer from './layout/footer';


 <Frame secondary={props.secondary}>
 <Menu background={ props.secondary ? theme.secondaryColor : theme.mainColor } />
 <div style={{paddingBottom:"40px", height:"100%"}}>{ props.children }</div>
 <Footer background={theme.mainColor} />

 </Frame>
 import ExecutionEnvironment from 'exenv';

 export const FullPage = (props) => {
 if (ExecutionEnvironment.canUseDOM) {
 document.getElementsByTagName("html")[0].style.height = "100%";
 document.getElementsByTagName("body")[0].style.height = "100%";
 document.getElementById("root").style.height = "100%";
 }

 return <FullPageFrame>
 <Menu background={ theme.mainColor } />
 <Content>
 { props.children }
 </Content>
 <Footer background={theme.mainColor} />

 {/*style={{paddingBottom: "50px"}} <Footer background={theme.mainColor} />* /}
 </FullPageFrame>
 }*/
