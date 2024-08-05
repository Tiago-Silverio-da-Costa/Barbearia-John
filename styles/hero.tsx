"use client";
import styled from "styled-components"

export const Section = styled.section<{
    $bg: string;
}>`
    background-image: url(${({ $bg }) => $bg});
    background-size: cover;
    background-position: center;
    position: relative;

`;