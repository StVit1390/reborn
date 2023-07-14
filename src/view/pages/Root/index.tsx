// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { Widget } from '../../components/Widget';


// Styles
import { Container } from './styles';

const Root: FC = () => {
    return (
        <Container>
            <Widget />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
