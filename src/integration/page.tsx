import React from 'react'
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { UserInterface } from "../ui/index";
import withStyledTheme from "../style/styled-theme";
import withReduxStore from "../store/reducer";

interface IPageProps {
    reduxStore: any,
    styledTheme: any
};

export const Page = (props: IPageProps) => {

    return (
        <Provider store={ props.reduxStore }>
            <ThemeProvider theme={ props.styledTheme }>
                <UserInterface>{props.children}</UserInterface>
            </ThemeProvider>
        </Provider>
    );
};

export default withReduxStore(withStyledTheme(Page));