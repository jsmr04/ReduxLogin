import React from "react";
import styled from "styled-components/native";
import * as theme from "../theme"

/* BUTTON */
const Container = styled.TouchableOpacity`
    border-radius: 7px;
    background-color: ${theme.COLOR.PRIMARY};
    padding-horizontal: 25px;
    padding-vertical: 15px;
    align-items: center;
    margin-vertical: ${ props => props.marginVertical };
    width: ${ props => props.width ? props.width : 'auto' }
`;

const Text = styled.Text`
    color: ${theme.COLOR.BUTTON_TEXT};
    font-size: 18px;
    font-weight: bold;
`;


export default ({ title, onPress, width, marginVertical }) => {
  return (
    <Container onPress={onPress} width={width} marginVertical={marginVertical}>
        <Text>{title}</Text>
    </Container>
  );
};
