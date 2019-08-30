import React from 'react';

import styled from 'styled-components';

const LoadFonts = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");
`;

export const theme = {
    textFont: "Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif",
    codeFont: "'Inconsolata',monospace",
};

export default function withStyledTheme(Component) {
    return function WrapperComponent(props) {
        return (
            <LoadFonts>
                <Component
                    {...props}
                    styledTheme={theme}
                />
            </LoadFonts>
        );
    };
};
