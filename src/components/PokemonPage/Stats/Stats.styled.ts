
import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: ${({theme}) => theme.colors.backgroundCard};
border-radius: 10px;
padding: .5em .8em;
margin-top: 1em;
height: 400px;
width: 430px;
`

export const RowWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const StatsWrapper = styled.div`
display: flex;
flex-direction: column;
`

export const StatLabel = styled.div`
font-family: "Flexo",arial,sans-serif;
text-transform: capitalize;
font-weight: 600;
font-size: 1em;
text-align: center;
max-width: 60px;
color: ${({theme}) => theme.colors.text}
`