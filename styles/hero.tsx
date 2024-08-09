"use client";
import styled from "styled-components"

export const Section = styled.section<{
    $bg: string;
}>`
    background-image: url(${({ $bg }) => $bg});
    background-size: cover;
    background-position: center;
    position: relative;
    height: 80vh;

        box-shadow: 0px -164px 50px 132px rgba(0,0,0,0.75) inset;
    -webkit-box-shadow: 0px -164px 50px 132px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: 0px -164px 50px 132px rgba(0,0,0,0.75) inset;

        @media (min-width: 768px) {
        box-shadow: 516px -19px 139px 157px rgba(0,0,0,0.75) inset;
        -webkit-box-shadow: 516px -19px 139px 157px rgba(0,0,0,0.75) inset;
        -moz-box-shadow: 516px -19px 139px 157px rgba(0,0,0,0.75) inset;
      
    }

`;