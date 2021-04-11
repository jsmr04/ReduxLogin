import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import * as theme from "../theme";

/* INPUT */
const InputContainer = styled.View`
  background-color: ${theme.COLOR.BG_INPUT};
  flex-direction: row;
  padding: 5px;
  border-radius: 7px;
  margin-vertical: 12px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 45px;
  padding-horizontal: 3px
  font-size: ${theme.FONT.SIZE};
  color: ${theme.COLOR.PLACEHOLDER};
`;

const IconContainer = styled.View`
  justify-content: center;
`;

export default ({ placeholder, iconName, secureTextEntry, onChangeText }) => {
  return (
    <InputContainer>
      <IconContainer>
        <Ionicons name={iconName} size={30} color={theme.COLOR.PLACEHOLDER} />
      </IconContainer>
      <Input
        placeholderTextColor={theme.COLOR.PLACEHOLDER}
        placeholder={placeholder}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </InputContainer>
  );
};
