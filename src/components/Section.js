import React from "react";
import styled from "styled-components/native";

/* SECTION */
const Section = styled.View`
  flex: 1;
  align-items: center;
  justify-content: ${(props) => props.justify};
`;

export default ({ justify, children }) => {
  return (
    <Section justify={justify}>
        {children}
    </Section>
  );
};
