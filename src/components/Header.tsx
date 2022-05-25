import styled from "styled-components"

interface HeaderProps {
    title: string
}

export default function Header(props: HeaderProps) {

    const Title = styled.h1`
        color: #919191;
        font-family: "Flexo-Regular",arial,sans-serif;
        line-height: 125%;
        font-size: 187.5%;
    `

    return(
        <div>
            <Title>{props.title}</Title>
        </div>
    )
}