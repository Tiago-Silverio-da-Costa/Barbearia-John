"use client";
import styled from "styled-components"

export const Section = styled.section<{
    $bg: string;
}>`
    background-image: url(${({ $bg }) => $bg});
    background-size: cover;
    background-position: right center; 
    position: relative;
    height: 80vh;

    @media (min-width: 768px) {
        background-position: center;
    }

`;