import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';
import { ViewStyle } from 'react-native';

const { primary } = colors;

const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 20px;
  background-color: ${primary};
  justify-content:center;
  align-items: center;
`;

interface MainContainerProps {
    children: ReactNode;
    style?: ViewStyle;  // Include the style prop here
}

const MainContainer: FunctionComponent<MainContainerProps> = (props) => {
    return <StyledView style={props.style}>{props.children}</StyledView>;
};

export default MainContainer;
