import styled from 'styled-components';

export type JustifyContent = 
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";

export type AlignItems = 
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";

export interface FlexboxProps {
    direction: "row" | "column";
    justify: JustifyContent;
    align: AlignItems;
    width?: "xsm" | "sm" | "md" | "lg" | "xl";
}

export const FlexBox = styled.div<FlexboxProps>`
    display: flex;
    justify-content: ${(props) => props?.justify};
    align-items: ${(props) => props?.align};
    flex-direction: ${(props) => props?.direction};
    width: 100%;
`