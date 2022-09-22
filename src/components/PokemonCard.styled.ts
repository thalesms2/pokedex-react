import styled from 'styled-components'

export const CardDiv = styled.div`
display: flex;
flex-direction: column;
background-color: ${({theme}) => theme.colors.backgroundCard};
transition: linear .2s;
color: white;
margin-top: .5em;
@media (min-width: 1200px) {
    width: 14vw;
}
@media (max-width: 1200px) {
    width: 18vw;
}
@media (max-width: 1000px) {
    width: 28vw;
}
@media (max-width: 700px) {
    width: 43vw;
}
`

export const DescribeDiv = styled.div`
display: flex;
flex-direction: column;
background-color: ${({theme}) => theme.colors.background};
padding: .5em;
transition: linear .2s;
`

export const TitleCard = styled.span`
font-size: 1.45em;
margin-bottom: 5px;
line-height: 125%;
text-transform: capitalize;
font-family: 'Flexo',arial,sans-serif;
font-weight: 600;
color: ${({theme}) => theme.colors.text};
transition: linear .2s;
`

export const TypesDiv = styled.div`
display: flex;
flex-direction: row;
`

export const IdParagraph = styled.p`
font-family: "Flexo",arial,sans-serif;
font-weight: 600;
padding-top: 2px;
color: ${({theme}) => theme.colors.subtext};
font-size: 80%;
line-height: 125%;
margin: .5em 0;
transition: linear .2s;
`